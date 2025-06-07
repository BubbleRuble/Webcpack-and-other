// try {
//   console.log('всередені try до myVar')

//   myVar;

//   console.log('всередені try після myVar')
// } catch (error) {
//   console.log(error.name)
// }

// const validJSON = '{"name": "Mango", "age": 15}';

// const invalidJSON = '{антон петрович}';

// try {
//   console.log(1);

//   console.log(JSON.parse(invalidJSON));

//   console.log(2);
// } catch (error) {
//   if (error.name === 'SyntaxError') {
//     console.log('синтаксична помилка')
//   } else {
//     console.log('не синтаксична помилка')
//   }
// }

// const fn = async () {}

// const arr = async () => {}

// const x = {
//   async getName () {}
// }

// class X {
//   async getName () {}
// }

function getFruits(name) {
  const fruits = {
    kiwi: 'kiwi',
    banana: 'banana',
    apple: 'apple',
  };

  return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
}

async function aMakeSmoothie() {
  try {
  const apple = getFruits('apple');
  const banana = getFruits('banana');
  const kiwi = getFruits('kiwi');
  
  const fruits = await Promise.all([apple,banana,kiwi]);

  return fruits

  } catch (error) {
    console.log(error)
  }
}

aMakeSmoothie().then(fruits => console.log(fruits))

function makeSmoothie() {
  getFruits('apple').then(apple => {
    console.log(apple);

    getFruits('banana').then(apple => { 
      console.log(apple)});
  });
}
