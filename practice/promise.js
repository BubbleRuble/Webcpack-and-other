// const promise = new Promise((resolve, reject) => {
//   const canFulFill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulFill) {
//       resolve('Проміс виконано успішно');
//     }

//     reject('Була виявлена помилкa');
//   }, 1000);
// });

// promise
//   .then(result => {
//     console.log(result)
//   })
//   .then(x => {
//     console.log(x);

//     throw new Error('ERROR')
//   })
//   .then(y => {
//     console.log(y);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('я буду виконаний в будь якому випадку'));

const fetchPokeId = id => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
};

fetchPokeId(1).then(onFetchSuccess).catch(onFetchError);
fetchPokeId(2).then(onFetchSuccess).catch(onFetchError);
fetchPokeId(3).then(onFetchSuccess).catch(onFetchError);


function onFetchSuccess (result) {
  console.log(result)
};

function onFetchError (error) {
  console.log(error)
};

