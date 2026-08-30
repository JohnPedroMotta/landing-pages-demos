// ===== Navegação mobile =====
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    nav?.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// ===== Header com sombra ao rolar =====
const header = document.getElementById('header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

// ===== Destaque do link ativo durante a rolagem =====
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav__link');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            const target = link.getAttribute('href')?.replace('#', '');
            link.classList.toggle('active', target === entry.target.id);
          });
        }
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );

  sections.forEach((s) => observer.observe(s));
}

// ===== Formulário de contato (placeholder) =====
const contatoForm = document.getElementById('contatoForm');
const formNote = document.getElementById('formNote');

if (contatoForm) {
  contatoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: integrar com Supabase/API após configurar o backend
    contatoForm.reset();
    if (formNote) formNote.hidden = false;
  });
}
