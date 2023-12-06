import {
  validateEmail,
  validatePassword,
  validateUsername,
} from './validate.js';

//* rainbow Button
const rainbowBtn = document.getElementById('color-btn');

rainbowBtn.addEventListener('click', () => {
  const bg = document.getElementById('rainbow');
  const colorArr = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6'];
  bg.style.backgroundColor =
    colorArr[Math.floor(Math.random() * colorArr.length)];
});

//* sally's backpack
const sallyBtn = document.getElementById('add-btn');

sallyBtn.addEventListener('click', () => {
  const itemList = document.getElementById('listItem');
  const inputField = document.querySelector('#backpack input');
  const inputItem = inputField.value;
  const newList = document.createElement('li');

  if (inputItem) {
    newList.textContent = inputItem;
    itemList.appendChild(newList);
  }
  inputField.value = '';
});

//* regis
const regisBtn = document.getElementById('submit-btn');

regisBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const section = document.getElementById('input-list');
  const errorField = section.querySelector('.error');

  const usernameField = section.querySelectorAll('input')[0];
  const emailField = section.querySelectorAll('input')[1];
  const passwordField = section.querySelectorAll('input')[2];
  const username = usernameField.value;
  const email = emailField.value;
  const password = passwordField.value;

  if (!validateUsername(username)) {
    errorField.textContent = '';
    errorField.textContent =
      'Username is invalid, make sure your username contain uppercase character, number, without special character and atleast 5 characters long';
  } else if (!validateEmail(email)) {
    errorField.textContent = '';
    errorField.textContent =
      'Email is invalid, make sure your email contain @ and .com';
  } else if (!validatePassword(password)) {
    errorField.textContent = '';
    errorField.textContent =
      'Password is invalid, make sure your password contain uppercase character, number, special character and atleast 5 characters long';
  } else if (
    validateUsername(username) &&
    validateEmail(email) &&
    validatePassword(password)
  ) {
    errorField.textContent = '';
    usernameField.value = '';
    emailField.value = '';
    passwordField.value = '';
    errorField.textContent = 'Login successfully!';
  }
});
