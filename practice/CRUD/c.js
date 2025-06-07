const BASE_URL = 'http://localhost:3000';

function addFootballer(footballer) {
  const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(footballer),
};

  return fetch(`${BASE_URL}/footballers`, options)
    .then(responce => responce.json())
    .then(console.log);
}

addFootballer({
    "name": "Kane",
    "age": 32,
    "number": 9,
    "position": "striker"
  }).then(createFootballMarkup)

  function createFootballMarkup (football) {
    console.log('можна малювати');
  }




