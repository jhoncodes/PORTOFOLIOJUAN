document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de Lucide Icons (si la librería está disponible)
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Lógica Menú Lateral Móvil
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMenu() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  }

  function closeMenu() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }

  menuBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});