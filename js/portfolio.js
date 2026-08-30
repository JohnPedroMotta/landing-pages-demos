// Dados do portfólio
// Cada projeto aponta para sua landing page de modelo em /modelos/<pasta>/index.html
const projetos = [
  {
    id: 1,
    titulo: 'Loja de Moda Feminina',
    categoria: 'ecommerce',
    icone: '👗',
    descricao: 'E-commerce completo com vitrine, carrinho e checkout integrado.',
    url: '#',
  },
  {
    id: 2,
    titulo: 'Construtora Alfa',
    categoria: 'corporativo',
    icone: '🏗️',
    descricao: 'Site institucional com portfólio de obras e captação de contatos.',
    url: '#',
  },
  {
    id: 3,
    titulo: 'Curso Online SuaEscola',
    categoria: 'landing',
    icone: '🎓',
    descricao: 'Landing page de infoproduto com módulos, oferta e matrícula.',
    url: 'modelos/cursos-online/index.html',
  },
  {
    id: 4,
    titulo: 'Clínica Beleza',
    categoria: 'corporativo',
    icone: '✨',
    descricao: 'Página de clínica de estética com serviços, resultados e agendamento.',
    url: 'modelos/saude-estetica/index.html',
  },
  {
    id: 5,
    titulo: 'Fotógrafo João Souza',
    categoria: 'portfolio',
    icone: '📸',
    descricao: 'Portfólio pessoal com galeria e área de contato para orçamentos.',
    url: '#',
  },
  {
    id: 6,
    titulo: 'Mercado Orgânico',
    categoria: 'ecommerce',
    icone: '🥬',
    descricao: 'Loja virtual de alimentos com sistema de assinatura mensal.',
    url: '#',
  },
  {
    id: 7,
    titulo: 'Clínica Vida',
    categoria: 'corporativo',
    icone: '🏥',
    descricao: 'Site médico com agendamento online e informações de especialidades.',
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
