// --- 1. APLICACIÓN INMEDIATA DEL TEMA (Evita parpadeos al cargar) ---
(function applyInitialTheme() {
  const saveTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saveTheme === 'dark' || (!saveTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
})();

// --- 2. LÓGICA DE INTERACCIÓN (Una vez cargado el DOM) ---
document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de Lucide Icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // BOTÓN CAMBIO DE TEMA
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn?.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // MENÚ LATERAL MÓVIL
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  function openMenu() {
    sidebar?.classList.remove('-translate-x-full');
    overlay?.classList.remove('hidden');
  }

  function closeMenu() {
    sidebar?.classList.add('-translate-x-full');
    overlay?.classList.add('hidden');
  }

  menuBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // SELECCIÓN DE OBJETOS DEL SETUP INTERACTIVO
  const setupSpots = document.querySelectorAll('.setup-spot');
  const setupCards = document.querySelectorAll('.setup-card');

  setupSpots.forEach(spot => {
    spot.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = spot.getAttribute('href');
      const targetCard = document.querySelector(targetId);

      if (targetCard) {
        // Desplazamiento suave hasta la tarjeta
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Quitar resaltado previo
        setupCards.forEach(card => {
          card.classList.remove('ring-4', 'ring-[#527853]', 'dark:ring-emerald-500', 'scale-[1.02]');
          const badge = card.querySelector('.selected-badge');
          if (badge) badge.classList.add('hidden');
        });

        // Aplicar resaltado a la tarjeta activa
        targetCard.classList.add('ring-4', 'ring-[#527853]', 'dark:ring-emerald-500', 'scale-[1.02]');
        const activeBadge = targetCard.querySelector('.selected-badge');
        if (activeBadge) activeBadge.classList.remove('hidden');
      }
    });
  });
});