document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de Lucide Icons (si la librería está disponible)
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Lógica de Modo Oscuro / Claro
  const themeToggleBtn = document.getElementById('theme-toggle');

  // Aplicar tema guardado o preferencia del sistema al cargar
  const saveTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saveTheme === 'dark' || (!saveTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Evento para alternar tema
  themeToggleBtn?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Re-renderizar iconos para actualizar sol/ luna de Lucide
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  });

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