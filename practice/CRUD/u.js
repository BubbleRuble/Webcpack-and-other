const BASE_URL = 'http://localhost:3000';

function footballerById(update, footId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };
  return fetch(`${BASE_URL}/footballers/${footId}`, options)
    .then(responce => responce.json())
    .then(console.log);
}

footballerById({name: "Kanye West"}, "2ba7");
footballerById({number: 10}, "2116");
footballerById({number: 1000, age: 1000}, "b4bc");


