// ===== Navegação mobile =====
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// ===== Calendário / contagem regressiva placeholder =====
const timerEl = document.getElementById('contador');
if (timerEl) {
  // TODO: configurar data real do fim da oferta
  const fim = new Date();
  fim.setDate(fim.getDate() + 3);
  const fmt = (n) => String(n).padStart(2, '0');
  const tick = () => {
    const diff = fim - new Date();
    if (diff <= 0) return;
    const dias = Math.floor(diff / 86400000);
    const horas = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    timerEl.textContent = `${fmt(dias)}d ${fmt(horas)}h ${fmt(mins)}m ${fmt(secs)}s`;
  };
  tick();
  setInterval(tick, 1000);
}

// ===== Header com sombra =====
const header = document.getElementById('header');
if (header) {
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll);
  onScroll();
}
