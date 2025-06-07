// import './practice/practice.css';
// import colors from './practice/templates/colors.json';
// import colorCards from './practice/templates/color-cards.hbs';
// import countries from './practice/templates/countries.json';
// import countriesTpl from './practice/templates/countries.hbs';
// import timeout from './practice/01-timeout.js';
// import notification from './practice/notification.js';
// import date from './practice/date.js';
// import timer from './src/css/timer.css';
// import promise from './practice/promise.js';
// import racetrack from './practice/racetrack.js';
// import racetrackCSS from './src/css/racetrack.css';
// import fetchApi from './practice/fetch-api.js';
// import pokemonCardTpl from './practice/templates/pokemon-card.hbs';
// import { create } from 'handlebars';
// import fetchapi from './src/css/fetch-api.css';
// import NewsApiService from './practice/news-service.js';
// import articlesTpl from './practice/templates/articles.hbs';
// import c from './practice/CRUD/c.js'
// import r from './practice/CRUD/r.js'
// import u from './practice/CRUD/u.js'
// import d from './practice/CRUD/d.js'
// import async from './practice/async-await.js'
import asyncCrud from './practice/CRUD/async-crud.js'


// console.log((countriesTpl(countries)))

// const countryContainer = document.querySelector('.js-country-set');
// const countriesMarkup = createCountriesMarkup({countries});

// countryContainer.insertAdjacentHTML('beforeend', countriesMarkup);

// function createCountriesMarkup (countries) {
//   return countriesTpl(countries);
// }

// console.log(colorCards(colors))

// const palleteContainer = document.querySelector('.js-pallete');
// const cardsMarkup = createColorCardsMarkup(colors);

// palleteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// palleteContainer.addEventListener('click', onContainerClick);

// function createColorCardsMarkup(colors) {
//   return colorCards(colors)
// }

// function onContainerClick(e) {
//   const isColorWatch = e.target.classList.contains('color-swatch');

//   if (!isColorWatch) {
//     return;
//   }

//   const swatchEl = e.target;
//   const parentColorCard = swatchEl.closest('.color-card');

//   removeActiveCardClass()
//   addActiveCardClass(parentColorCard)
//   setBodyBackground(swatchEl.dataset.hex)
// }

// function setBodyBackground(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass (card) {
//   card.classList.add('is-active');
// }
