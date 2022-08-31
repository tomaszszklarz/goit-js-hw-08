import { throttle } from 'lodash';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textArea = document.querySelector('textarea');

form.addEventListener('input', throttle((event) => {
    const obInput = { email: form.elements.email.value, message: form.elements.message.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(objectInput));
}, 500));

form.addEventListener("submit", (e) => {
      e.preventDefault();
      const { elements: { email, message } } = event.currentTarget;
      console.log({ email: email.value, message: message.value });
      
      e.currentTarget.reset();
      localStorage.clear();
});
const storage = localStorage.getItem('feedback-form-state');
const parseStorageData = JSON.parse(storage);
const tryFoo = () => {
    if (parseStorageData !== null) {
        email.value = parseStorageData.email;
        text.value = parseStorageData.message;
    };
};

tryFoo();