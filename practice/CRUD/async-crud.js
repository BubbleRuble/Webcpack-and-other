const BASE_URL = 'http://localhost:3000';

async function addFootballer(footballer) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(footballer),
  };

  const responce = await fetch(`${BASE_URL}/footballers`, options);

  return await responce.json();
}

async function addFootballerAndUpdateUi () {
  try {
    const footballer = await addFootballer({});
    console.log(footballer)
  } catch (error) {
    console.log(error)
  }
}


async function fetchFootballer () {
  const responce = await fetch(`${BASE_URL}/footballers`, options);
  return await responce.json()
}

async function deleteFootballer () {
  const url = `${BASE_URL}/footballers/${footballerId}`;
  const options = {
    method: "DELETE"
  };

  const responce = await fetch(`${BASE_URL}/footballers`, options);
  return await responce.json()
}