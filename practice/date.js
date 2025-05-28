// const date = new Date();
// const date1 = Date.now();

// console.log(date);
// console.log(date1);

// const refs = {
//   startBtn: document.querySelector('button[data-action-start]'),
//   stopBtn: document.querySelector('button[data-action-stop]'),
//   clockface: document.querySelector('.js-clockface'),
// };

// const timer = 
// {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if(this.isActive) {
//       return;
//     }

//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const { hours, mins, secs } = getTimeComponents(deltaTime);

//       updateClockface({ hours, mins, secs })

//       console.log(
//         `${pad(new Date(deltaTime).getUTCHours())}:${pad(
//           new Date(deltaTime).getUTCMinutes(),
//         )}:${pad(new Date(deltaTime).getUTCSeconds())}`,
//       );
//     }, 1000);
//   },
//   stop () {
//     clearInterval(this.intervalId);
//     this.isActive = false
//   },
// };

// refs.startBtn.addEventListener('click', () => {
//   timer.start();
// })

// refs.stopBtn.addEventListener('click', () => {
//   timer.stop()
// })

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }

// function updateClockface({ hours, mins, secs }) {
//   refs.clockface.textContent = `${hours}:${mins}:${secs}`;
// }
