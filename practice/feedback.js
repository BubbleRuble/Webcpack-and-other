import throttle from 'https://cdn.skypack.dev/lodash.throttle';

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-message';

const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));
populateTextarea();

function onFormSubmit(e) {
  e.preventDefault();

  console.log('відправляємо формy');
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
} 

function onTextareaInput(e) {
  const value = e.target.value;

  localStorage.setItem(STORAGE_KEY, value);
}

function populateTextarea (e) {
  const savedMessage = localStorage.getItem(STORAGE_KEY);


  if (savedMessage) {
    console.log(savedMessage);
    refs.textarea.value = savedMessage;
  };
}

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  const stringifyFormData = JSON.stringify(formData);
  console.log(stringifyFormData);
  localStorage.setItem('data', stringifyFormData)
  
})
