import './practice/practice.css'
import qwe from './practice/templates/color-card.hbs'

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e71e1e', rgb: '231, 30, 30' },
  { hex: '#fcc41e', rgb: '252, 196, 30' },
  { hex: '#ecf50b', rgb: '236, 245, 11' },
  { hex: '#6ff50b', rgb: '111, 245, 11' },
  { hex: '#0bf522', rgb: '11, 245, 34' },
  { hex: '#0bf5a4', rgb: '11, 245, 164' },
  { hex: '#3d87e4', rgb: '61, 135, 228' },
  { hex: '#232d8e', rgb: '35, 45, 142' },
  { hex: '#a118ec', rgb: '161, 24, 236' },
  { hex: '#e41ca1', rgb: '228, 28, 161' },
  { hex: '#f2faf1', rgb: '242, 250, 241' },
  { hex: '#121111', rgb: '18, 17, 17' },
];

const palleteContainer = document.querySelector('.js-pallete');
const cardsMarkup = createColorCardsMarkup(colors);

palleteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

palleteContainer.addEventListener('click', onContainerClick);

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
    <div class="color-card">
      <div
      class="color-swatch"
      data-hex="${hex}"
      data-rgb="${rgb}"
      style="background-color: ${hex}"
    ></div>
    <div class="color-meta">
      <p>HEX: ${hex} </p>
      <p>RGB: ${rgb} </p>
      </div>
    </div>
  `;
    })
    .join('');
}

function onContainerClick(e) {
  const isColorWatch = e.target.classList.contains('color-swatch');

  if (!isColorWatch) {
    return;
  }

  const swatchEl = e.target;
  const parentColorCard = swatchEl.closest('.color-card');

  removeActiveCardClass()
  addActiveCardClass(parentColorCard)
  setBodyBackground(swatchEl.dataset.hex)
}

function setBodyBackground(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass (card) {
  card.classList.add('is-active');
}
