const BASE_URL = 'http://localhost:3000';

function fetchFootballers () {
 return fetch('http://localhost:3000/footballers').then(responce => responce.json())
}

function fetchFootballersById (footballerId) {
 return fetch(`http://localhost:3000/footballers/${footballerId}`).then(responce => responce.json())
}

fetchFootballers()

fetchFootballersById(1)



