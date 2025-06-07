const BASE_URL = 'http://localhost:3000';

function deleteById (footballerId) {
  const url = `${BASE_URL}/footballers/${footballerId}`;
  const options = {
    method: 'DELETE',
  };
  return fetch(url,options)
}

deleteById("96ef")




