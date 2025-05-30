// const horses = [
//   'Secretariat',
//   'Eclipse',
//   'West Australian',
//   'Flying Fox',
//   'Seabiscuit',
// ];

// const refs = {
//   startBtn: document.querySelector('.js-race-btn'),
//   winnerField: document.querySelector('.js-winner'),
//   progressField: document.querySelector('.js-progress'),
//   tableBody: document.querySelector('.js-results-table > tbody'),
// };

// let countRaces = 0;
// refs.startBtn.addEventListener('click', onStart);

// function onStart() {
//   countRaces += 1;
//   const promises = horses.map(race);

//   updateWinnerField('');
//   updateProgressField('заїзд почався, ставки не приймаються');
//   determineWinner(promises);
//   waitForAll(promises);
// }

// function updateWinnerField(message) {
//   refs.winnerField.textContent = message;
// }

// function updateProgressField(message) {
//   refs.progressField.textContent = message;
// }

// function determineWinner(horsesP) {
//   Promise.race(horsesP).then(({ horse, time }) => {
//     updateWinnerField(`Переміг ${horse} закінчивши заїзд за ${time} мс`);
//     updateTableBodyField({ horse, time, countRaces })
//   });
// }

// function waitForAll(horsesP) {
//   Promise.all(horsesP).then(x => {
//     updateProgressField('заїзд почався, ставки приймаються');
//   });
// }

// function updateTableBodyField({ horse, time, countRaces}) {
//   const tr = `<tr><td>${countRaces}</td><td>${horse}</td><td>${time} ms</td></tr>`;
//   refs.tableBody.insertAdjacentHTML('beforeend', tr);
// }

// function race(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time, countRaces });
//     }, time);
//   });
// }

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

