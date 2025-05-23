const user = {
  name: 'Lebron',
  age: 35,
  status: 'offline',
};

console.log(JSON.stringify(user));

// const savedUserData = '{"name":"Lebron","age":35,"status":"offline"}';

// console.log(JSON.parse(savedUserData));

localStorage.setItem('new-data', JSON.stringify(user));

localStorage.getItem('new-data')

const savedData = localStorage.getItem('new-data');
const parsedData = JSON.parse(localStorage.getItem('new-data'));

console.log(parsedData);

const fsdnfsd = JSON.parse()


