// Dados do portfólio
// Cada projeto aponta para sua landing page de modelo em /modelos/<pasta>/index.html
const projetos = [
  {
    id: 1,
    titulo: 'Agência NEXO',
    categoria: 'landing',
    icone: '🚀',
    descricao: 'Agência digital: websites, design e marketing em uma página completa.',
    url: 'modelos/agencia-digital/index.html',
  },
  {
    id: 2,
    titulo: 'Nutrição Esportiva',
    categoria: 'landing',
    icone: '🥗',
    descricao: 'Landing de nutricionista com serviços, planos e agendamento.',
    url: 'modelos/nutricao-esportiva/index.html',
  },
  {
    id: 3,
    titulo: 'Bem-Estar Mente Serena',
    categoria: 'landing',
    icone: '🌿',
    descricao: 'Saúde mental: abordagens, FAQ acolhedora e agendamento sigiloso.',
    url: 'modelos/bem-estar/index.html',
  },
  {
    id: 4,
    titulo: 'Consultoria GestãoPro',
    categoria: 'landing',
    icone: '📊',
    descricao: 'Gestão para PMEs e MEIs: soluções, resultados e diagnóstico.',
    url: 'modelos/consultoria-gestao/index.html',
  },
  {
    id: 5,
    titulo: 'FinInvest',
    categoria: 'landing',
    icone: '🌱',
    descricao: 'Planejamento financeiro em 4 passos, com foco em confiança.',
    url: 'modelos/planejamento-financeiro/index.html',
  },
  {
    id: 6,
    titulo: 'Curso Online SuaEscola',
    categoria: 'landing',
    icone: '🎓',
    descricao: 'Infoproduto: módulos, instrutor, oferta e matrícula.',
    url: 'modelos/cursos-online/index.html',
  },
  {
    id: 7,
    titulo: 'Clínica Beleza',
    categoria: 'corporativo',
    icone: '✨',
    descricao: 'Clínica de estética com serviços, resultados e agendamento.',
    url: 'modelos/saude-estetica/index.html',
  },
  {
    id: 8,
    titulo: 'Fotógrafo João Souza',
    categoria: 'portfolio',
    icone: '📸',
    descricao: 'Portfólio pessoal com galeria e área de contato.',
    url: '#',
  },
];

const grid = document.getElementById('portfolioGrid');
const filterBar = document.getElementById('filterBar');

// Renderiza os cards de portfólio
function renderProjetos(categoria = 'todos') {
  const filtrados = categoria === 'todos'
    ? projetos
    : projetos.filter((p) => p.categoria === categoria);

  grid.innerHTML = filtrados
    .map(
      (p) => `
      <a href="${p.url}" class="projeto" data-categoria="${p.categoria}" aria-label="Ver modelo: ${p.titulo}">
        <div class="projeto__thumb"><span>${p.icone}</span></div>
        <div class="projeto__body">
          <span class="projeto__cat">${p.categoria}</span>
          <h3 class="projeto__title">${p.titulo}</h3>
          <p class="projeto__desc">${p.descricao}</p>
          <span class="projeto__link">${p.url === '#' ? 'Em breve' : 'Ver modelo →'}</span>
        </div>
      </a>
    `
    )
    .join('');
}

// Filtro por categoria
if (filterBar) {
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;

    filterBar
      .querySelectorAll('.filter')
      .forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    renderProjetos(btn.dataset.filter);
  });
}

// Permite filtrar via links com ?cat=
function aplicarFiltroDaURL() {
  const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const cat = params.get('cat');
  if (cat && filterBar) {
    const alvo = filterBar.querySelector(`[data-filter="${cat}"]`);
    if (alvo) {
      alvo.click();
      document.getElementById('portifolio')?.scrollIntoView();
    }
  }
}

// Inicializa
renderProjetos();
aplicarFiltroDaURL();
