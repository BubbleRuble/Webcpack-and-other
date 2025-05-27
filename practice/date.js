// const date = new Date();
// const date1 = Date.now();

// console.log(date);
// console.log(date1);


const timer = {
  sdtart() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const {hours, mins, secs} = getTimeComponents(deltaTime);

      console.log(`${pad(new Date(deltaTime).getUTCHours())}:${pad(
        new Date(deltaTime).getUTCMinutes(),
      )}:${pad(new Date(deltaTime).getUTCSeconds())}`)
    }, 1000);
  },
}

timer.start();