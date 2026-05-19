document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', function() {
        // Efek garis 3 berubah jadi X
        menuToggle.classList.toggle('is-active');
        // Memunculkan/menyembunyikan sidebar dari kiri
        sidebar.classList.toggle('active');
    });
});
