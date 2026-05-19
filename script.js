document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    // Menambahkan event klik pada ikon hamburger
    menuToggle.addEventListener('click', function() {
        // Mengubah ikon menjadi X
        menuToggle.classList.toggle('is-active');
        // Menampilkan atau menyembunyikan menu dari kiri
        navLinks.classList.toggle('active');
    });
});
