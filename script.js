document.addEventListener("DOMContentLoaded", () => {
    // ===========================
    // 1. CUSTOM CURSOR
    // ===========================
    const cursor = document.getElementById("cursor");
    const cursorFollower = document.getElementById("cursor-follower");

    // Hanya aktifkan custom cursor jika perangkat menggunakan mouse (bukan layar sentuh)
    if (window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener("mousemove", (e) => {
            // Memperbarui posisi kursor utama dan pengikutnya
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";

            cursorFollower.style.left = e.clientX + "px";
            cursorFollower.style.top = e.clientY + "px";
        });
    }

    // ===========================
    // 2. EFEK NAVBAR SAAT SCROLL
    // ===========================
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        // Tambahkan efek blur dan background jika halaman di-scroll lebih dari 50px
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // ===========================
    // 3. MENU MOBILE (HAMBURGER)
    // ===========================
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    function toggleMenu() {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("open");
        
        // Mencegah halaman bisa di-scroll saat menu mobile terbuka
        if (mobileMenu.classList.contains("open")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }

    // Buka/tutup menu saat tombol hamburger diklik
    hamburger.addEventListener("click", toggleMenu);

    // Tutup menu secara otomatis saat salah satu link diklik
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            mobileMenu.classList.remove("open");
            document.body.style.overflow = "";
        });
    });

    // ===========================
    // 4. ANIMASI MUNCUL SAAT SCROLL (REVEAL)
    // ===========================
    const revealElements = document.querySelectorAll(".reveal-up, .reveal-scale");

    const revealOptions = {
        threshold: 0.15, // Animasi dimulai saat 15% elemen terlihat di layar
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan class 'visible' untuk memicu animasi CSS
                entry.target.classList.add("visible");
                // Hentikan observasi agar animasi hanya terjadi satu kali
                observer.unobserve(entry.target); 
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});

// ===========================
// 5. PAGE LOADER
// ===========================
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    
    // Beri jeda sekitar 1.8 detik agar animasi progress bar di CSS selesai terlebih dahulu
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1800);
});
