// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(responce => {
//     return responce.json();
//   })
//   .then(pokemon => {
//     console.log(pokemon);
//     const markup = pokemonCardTpl(pokemon);
//     console.log(markup)
//   });

// const refs = {
//   cardContainer: document.querySelector('.js-card-container'),
//   searchForm: document.querySelector('.js-search-form'),
// };

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;
  

//   fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset())
// }

// function fetchPokemon(pokemonId) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
//     responce => {
//       return responce.json();
//     },
//   );
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError (error) {
//   alert('Oops, something went wrong');
// }


// fetch('https://pokeapi.co/api/v2/pokemon?limit=25').then(d => d.json()).then(console.log)

// Anton0406Fake - password

// Your API key is: b3d900b4cdd84d289247343fa8bb6f43

