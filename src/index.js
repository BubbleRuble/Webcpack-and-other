import './css/common.scss'

const car = 'ferrari';

console.log(car);


const container = document.querySelector('.container');
const addButton = document.createElement('button');
addButton.classList.add('firstbtn');
addButton.textContent = 'КНОПКА ADD';
container.appendChild(addButton);


addButton.addEventListener('click', onAddButtonClick);

function onAddButtonClick(e) {
  console.log('клікнув на кнопку додавання');
  const newBtn = document.createElement('button');
  newBtn.classList.add('newbtn');
  newBtn.textContent = 'newBtn'
  container.appendChild(newBtn)
}



