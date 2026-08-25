/* ====================================================
   bolos.js – Modal e interações da página de bolos
   ==================================================== */

const bolosData = {
  debutante: {
    img: 'assets/bolo_debutante_pink.jpg',
    alt: 'Bolo em Biscuit Debutante Pink',
    tag: 'Debutante',
    title: 'Bolo em Biscuit Debutante Pink',
    desc: 'Uma peça única e sofisticada para tornar os 15 anos da sua princesa absolutamente inesquecíveis. Decoração floral em tons de rosa com detalhes dourados, flores de seda importadas e acabamento impecável. Cada detalhe é pensado com carinho para refletir a personalidade e o sonho de quem encomenda.',
    specs: [
      { label: 'Medidas das Bases', value: '15x12 / 20x12 / 25x12 / 35x15' },
      { label: 'Peso', value: '5 quilos' },
      { label: 'Valor', value: 'R$ 900,00', price: true }
    ],
    wa: 'Olá%20Dy!%20Gostaria%20de%20encomendar%20o%20Bolo%20em%20Biscuit%20Debutante%20Pink'
  },
  casamento: {
    img: 'assets/bolo_casamento_luxo.jpg',
    alt: 'Bolo em Biscuit Casamento Luxo',
    tag: 'Casamento',
    title: 'Bolo em Biscuit Casamento Luxo',
    desc: 'Elegância e sofisticação em cada centímetro. Este bolo em biscuit foi criado para ser o elemento central e mais fotografado do seu casamento. Rosas brancas de seda, folhas douradas, pérolas e arabescos clássicos compõem uma peça de altíssimo padrão que encanta todos os convidados.',
    specs: [
      { label: 'Medidas das Bases', value: '15x12 / 20x12 / 25x12 / 35x15' },
      { label: 'Peso', value: '6 quilos' },
      { label: 'Valor', value: 'R$ 1.200,00', price: true }
    ],
    wa: 'Olá%20Dy!%20Gostaria%20de%20encomendar%20o%20Bolo%20em%20Biscuit%20Casamento%20Luxo'
  },
  bodas: {
    img: 'assets/bolo_bodas_ouro.jpg',
    alt: 'Bolo em Biscuit Bodas de Ouro',
    tag: 'Bodas',
    title: 'Bolo em Biscuit Bodas de Ouro',
    desc: 'Cinquenta anos de amor merecem uma celebração à altura! Este bolo em biscuit dourado, com arabescos clássicos, rosas douradas e pérolas, é uma verdadeira obra de arte que homenageia décadas de cumplicidade e carinho. Feito com todo o cuidado para emocionar e surpreender.',
    specs: [
      { label: 'Medidas das Bases', value: '15x12 / 20x12 / 30x12' },
      { label: 'Peso', value: '4 quilos' },
      { label: 'Valor', value: 'R$ 850,00', price: true }
    ],
    wa: 'Olá%20Dy!%20Gostaria%20de%20encomendar%20o%20Bolo%20em%20Biscuit%20Bodas%20de%20Ouro'
  },
  unicornio: {
    img: 'assets/bolo_kids_unicornio.jpg',
    alt: 'Bolo em Biscuit Kids Unicórnio',
    tag: 'Kids',
    tagClass: 'kids',
    title: 'Bolo em Biscuit Kids Unicórnio',
    desc: 'A festa do seu pequeno vai ficar ainda mais mágica com este bolo unicórnio encantador! Chifre dourado brilhante, flores coloridas, juba arco-íris e detalhes que fazem qualquer criança se sentir em um mundo de fantasia. Um bolo que é tão bonito que dá vontade de guardar para sempre!',
    specs: [
      { label: 'Medidas das Bases', value: '15x12 / 20x12' },
      { label: 'Peso', value: '3 quilos' },
      { label: 'Valor', value: 'R$ 550,00', price: true }
    ],
    wa: 'Olá%20Dy!%20Gostaria%20de%20encomendar%20o%20Bolo%20em%20Biscuit%20Kids%20Unicórnio'
  },
  dino: {
    img: 'assets/bolo_kids_dino.jpg',
    alt: 'Bolo em Biscuit Kids Dino',
    tag: 'Kids',
    tagClass: 'kids',
    title: 'Bolo em Biscuit Kids Dino',
    desc: 'Para o pequeno aventureiro que ama dinossauros! Cores super vibrantes em verde e azul, dinos fofos em 3D, folhas tropicais e elementos da selva que transformam a mesinha do bolo em uma verdadeira expedição pré-histórica. Diversão garantida para todas as idades!',
    specs: [
      { label: 'Medidas das Bases', value: '15x12 / 20x12' },
      { label: 'Peso', value: '3 quilos' },
      { label: 'Valor', value: 'R$ 500,00', price: true }
    ],
    wa: 'Olá%20Dy!%20Gostaria%20de%20encomendar%20o%20Bolo%20em%20Biscuit%20Kids%20Dino'
  }
};

function openModal(id) {
  const data = bolosData[id];
  if (!data) return;

  document.getElementById('modalImg').src = data.img;
  document.getElementById('modalImg').alt = data.alt;

  const tagEl = document.getElementById('modalTag');
  tagEl.textContent = '';
  tagEl.style.display = 'none';

  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalDesc').textContent = data.desc;

  const specsEl = document.getElementById('modalSpecs');
  specsEl.innerHTML = data.specs.map(s => `
    <div class="modal-spec-row">
      <span class="modal-spec-label">${s.label}</span>
      <span class="modal-spec-value${s.price ? ' price-val' : ''}">${s.value}</span>
    </div>
  `).join('');

  document.getElementById('modalWaBtn').href =
    `https://wa.me/5500000000000?text=${data.wa}`;

  document.getElementById('modalBackdrop').classList.add('open');
  document.getElementById('boloModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('open');
  document.getElementById('boloModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Inject kids tag style
const s = document.createElement('style');
s.textContent = `.modal-tag-kids { background: #e8f5e9 !important; color: #388e3c !important; }`;
document.head.appendChild(s);
