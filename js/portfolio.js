// Dados do portfólio (placeholder - preencher com projetos reais após)
const projetos = [
  {
    id: 1,
    titulo: 'Loja de Moda Feminina',
    categoria: 'ecommerce',
    icone: '👗',
    descricao: 'E-commerce completo com vitrine, carrinho e checkout integrado.',
  },
  {
    id: 2,
    titulo: 'Construtora Alfa',
    categoria: 'corporativo',
    icone: '🏗️',
    descricao: 'Site institucional com portfólio de obras e captação de contatos.',
  },
  {
    id: 3,
    titulo: 'Lançamento Fitness',
    categoria: 'landing',
    icone: '💪',
    descricao: 'Landing page de alta conversão para oferta de treinamento online.',
  },
  {
    id: 4,
    titulo: 'Fotógrafo João Souza',
    categoria: 'portfolio',
    icone: '📸',
    descricao: 'Portfólio pessoal com galeria e área de contato para orçamentos.',
  },
  {
    id: 5,
    titulo: 'Mercado Orgânico',
    categoria: 'ecommerce',
    icone: '🥬',
    descricao: 'Loja virtual de alimentos com sistema de assinatura mensal.',
  },
  {
    id: 6,
    titulo: 'Clínica Vida',
    categoria: 'corporativo',
    icone: '🏥',
    descricao: 'Site médico com agendamento online e informações de especialidades.',
  },
  {
    id: 7,
    titulo: 'Curso de Inglês',
    categoria: 'landing',
    icone: '📚',
    descricao: 'Página de captura de leads com vídeo de apresentação e matrícula.',
  },
  {
    id: 8,
    titulo: 'Desenvolvedor Front-end',
    categoria: 'portfolio',
    icone: '💻',
    descricao: 'Portfólio pessoal apresentando projetos e habilidades técnicas.',
  },
];

const grid = document.getElementById('portfolioGrid');
const filterBar = document.getElementById('filterBar');

// Redenriza os cards de portfólio
function renderProjetos(categoria = 'todos') {
  const filtrados = categoria === 'todos'
    ? projetos
    : projetos.filter((p) => p.categoria === categoria);

  grid.innerHTML = filtrados
    .map(
      (p) => `
      <article class="projeto" data-categoria="${p.categoria}">
        <div class="projeto__thumb"><span>${p.icone}</span></div>
        <div class="projeto__body">
          <span class="projeto__cat">${p.categoria}</span>
          <h3 class="projeto__title">${p.titulo}</h3>
          <p class="projeto__desc">${p.descricao}</p>
        </div>
      </article>
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

// Permite filtrar via links com ?cat= (ex: modelo de card)
function aplicarFiltroDaURL() {
  const params = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const cat = params.get('cat');
  if (cat && filterBar) {
    const alvo = filterBar.querySelector(`[data-filter="${cat}"]`);
    if (alvo) {
      alvo.click();
      // rola até a seção de portfólio
      document.getElementById('portifolio')?.scrollIntoView();
    }
  }
}

// Inicializa
renderProjetos();
aplicarFiltroDaURL();
