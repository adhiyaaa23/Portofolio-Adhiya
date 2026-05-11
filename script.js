// Memilih semua link navigasi yang mengarah ke ID di halaman yang sama
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah lompatan standar browser
        
        // Melakukan scroll halus ke bagian yang dituju
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});