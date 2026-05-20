/* =============================================
   PORTFOLIO SCRIPT — Interactive & Animated
============================================= */

// ── Page Loader ──────────────────────────────
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1900);
});

// ── Custom Cursor ─────────────────────────────
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

if (cursor && follower) {
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX; mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top  = mouseY + 'px';
    });
    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup',   () => cursor.classList.remove('click'));

    // Hover state on interactive elements
    document.querySelectorAll('a, button, .project-card, .skill-card, .card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Smooth follower
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.14;
        followerY += (mouseY - followerY) * 0.14;
        follower.style.left = followerX + 'px';
        follower.style.top  = followerY + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
}

// ── Navbar scroll behaviour ───────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ── Hamburger / Mobile Menu ───────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger?.addEventListener('click', () => {
    const open = hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ── Smooth scroll for all anchor links ────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ── Scroll-triggered reveals ──────────────────
const revealEls = document.querySelectorAll('.reveal-up, .reveal-scale');
const observer  = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

// Hero elements are CSS-animated, skip them
revealEls.forEach(el => {
    if (!el.closest('.hero')) observer.observe(el);
});

// ── Magnetic glow on cards (desktop only) ─────
if (window.matchMedia('(hover:hover)').matches) {
    document.querySelectorAll('.card, .project-card, .skill-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
            card.style.setProperty('--my', (e.clientY - rect.top)  + 'px');
        });
    });
}

// ── Parallax orbs on mouse move ───────────────
const orbs = document.querySelectorAll('.orb');
document.addEventListener('mousemove', e => {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    orbs.forEach((orb, i) => {
        const depth = (i + 1) * 10;
        orb.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
    });
}, { passive: true });

// ── Tilt effect on project cards ──────────────
if (window.matchMedia('(hover:hover)').matches) {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect  = card.getBoundingClientRect();
            const x     = (e.clientX - rect.left) / rect.width  - 0.5;
            const y     = (e.clientY - rect.top)  / rect.height - 0.5;
            card.style.transform = `translateY(-7px) perspective(900px) rotateX(${-y*5}deg) rotateY(${x*5}deg)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// ── Active nav highlight on scroll ────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            active?.classList.add('active');
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// Highlight active nav link style
const style = document.createElement('style');
style.textContent = `.nav-links a.active { color: var(--text); } .nav-links a.active::after { width:100%; }`;
document.head.appendChild(style);

// ── Number counter animation for badges ───────
function animateCount(el, end, dur = 1200) {
    let start = 0; const step = end / (dur / 16);
    const tick = () => {
        start = Math.min(start + step, end);
        el.textContent = Math.floor(start);
        if (start < end) requestAnimationFrame(tick);
    };
    tick();
}

const badgeNum = document.querySelector('.profile-badge span:first-child');
if (badgeNum) {
    const badgeObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            animateCount(badgeNum, 6, 1000);
            badgeObserver.disconnect();
        }
    });
    badgeObserver.observe(badgeNum);
}

// ── Text scramble on hero name hover ──────────
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
document.querySelectorAll('.name-line').forEach(el => {
    const original = el.textContent;
    let interval = null;
    el.addEventListener('mouseenter', () => {
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            el.textContent = original.split('').map((char, i) => {
                if (char === ' ') return ' ';
                if (i < iteration) return original[i];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join('');
            if (iteration >= original.length) clearInterval(interval);
            iteration += 0.5;
        }, 35);
    });
    el.addEventListener('mouseleave', () => {
        clearInterval(interval);
        el.textContent = original;
    });
});
