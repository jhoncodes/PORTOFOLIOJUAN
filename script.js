// ESPERAR A QUE EL HTML ESTE COMPLETAMENTE CARGADO
document.addEventListener('DOMContentLoaded', () => {

    // 1. INICIALIZAR ICONOS DE LUCIDE
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. CONTROL DEL MENU MOVIL
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // 3. CERRAR MENU MOVIL AL HACER CLICK EN CUALQUIER ENLACE
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});