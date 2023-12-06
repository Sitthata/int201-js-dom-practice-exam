import {
  validateEmail,
  validatePassword,
  validateUsername,
} from './validate.js';

import { User } from './model/user.js';

import { userList, getUserlist, addUserToList } from './model/userList.js';

//* rainbow Button
const rainbowBtn = document.getElementById('color-btn');
rainbowBtn.addEventListener('click', () => {
  const bg = document.getElementById('rainbow');
  const colorArr = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6'];
  bg.style.backgroundColor =
    colorArr[Math.floor(Math.random() * colorArr.length)];
  console.log('retrive data, color');
  localStorage.setItem('bgColor', JSON.stringify(bg.style.backgroundColor));
  console.log(JSON.parse(localStorage.getItem('bgColor')));
});

//* sally's backpack
const sallyBtn = document.getElementById('add-btn');
sallyBtn.addEventListener('click', () => {
  const itemList = document.getElementById('listItem');
  const inputField = document.querySelector('#backpack input');
  const inputItem = inputField.value;
  const newList = document.createElement('li');
  let itemArr = JSON.parse(localStorage.getItem('itemList'));

  if (!itemArr) {
    itemArr = [];
  }

  if (inputItem) {
    newList.textContent = inputItem;
    itemList.appendChild(newList);
    itemArr.push(inputItem);
  }
  inputField.value = '';
  console.log('retrive data, itemList');
  localStorage.setItem('itemList', JSON.stringify(itemArr));
  console.log(JSON.parse(localStorage.getItem('itemList')));
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
  const usernameInput = usernameField.value;
  const emailInput = emailField.value;
  const passwordInput = passwordField.value;

  if (!validateUsername(usernameInput)) {
    errorField.textContent = '';
    errorField.textContent =
      'Username is invalid, make sure your username contain uppercase character, number, without special character and atleast 5 characters long';
  } else if (!validateEmail(emailInput)) {
    errorField.textContent = '';
    errorField.textContent =
      'Email is invalid, make sure you type properly email';
  } else if (!validatePassword(passwordInput)) {
    errorField.textContent = '';
    errorField.textContent =
      'Password is invalid, make sure your password contain uppercase character, number, special character and atleast 5 characters long';
  } else if (
    validateUsername(usernameInput) &&
    validateEmail(emailInput) &&
    validatePassword(passwordInput)
  ) {
    localStorage.setItem('username', JSON.stringify(usernameInput));
    console.log('retrive data, username');
    console.log(JSON.parse(localStorage.getItem('username')));
    localStorage.setItem('email', JSON.stringify(emailInput));
    console.log('retrive data, email');
    console.log(JSON.parse(localStorage.getItem('email')));
    localStorage.setItem('password', JSON.stringify(passwordInput));
    console.log('retrive data, password');
    console.log(JSON.parse(localStorage.getItem('password')));
    userHandler(emailInput);
    errorField.textContent = '';
    usernameField.value = '';
    emailField.value = '';
    passwordField.value = '';
  }
});

function userHandler(email) {
  console.log('userHandler entered');
  const users = getUserlist();
  console.log(users);
  if (users.length === 0) {
    console.log('update');
    const username = JSON.parse(localStorage.getItem('username') || '');
    const newEmail = JSON.parse(localStorage.getItem('email') || '');
    const password = JSON.parse(localStorage.getItem('password') || '');
    const color = JSON.parse(localStorage.getItem('bgColor') || '');
    const items = JSON.parse(localStorage.getItem('itemList') || '');

    const newUser = new User(username, newEmail, password);
    newUser.updateColor(color);
    items.forEach((item) => {
      newUser.addItemToList(item);
    });
    addUserToList(newUser);
    localStorage.setItem('userList', JSON.stringify(getUserlist()));
    return;
  } else {
    users.forEach((user) => {
      if (user.email === email) {
        console.log('not update');
        const bg = document.getElementById('rainbow');
        bg.style.backgroundColor = user.getColor();

        const itemList = document.getElementById('listItem');
        const newList = document.createElement('li');
        const items = [...user.getList()];

        items.array.forEach((item) => {
          newList.textContent = item;
          itemList.appendChild(newList);
        });
        return;
      } else {
        console.log('update');
        const username = JSON.parse(localStorage.getItem('username') || '');
        const newEmail = JSON.parse(localStorage.getItem('email') || '');
        const password = JSON.parse(localStorage.getItem('password') || '');
        const color = JSON.parse(localStorage.getItem('bgColor') || '');
        const items = JSON.parse(localStorage.getItem('itemList') || '');

        const newUser = new User(username, newEmail, password);
        newUser.updateColor(color);
        items.forEach((item) => {
          newUser.addItemToList(item);
        });
        addUserToList(newUser);
      }
    });
  }
}

window.addEventListener('load', () => {
  console.log(localStorage.getItem('bgColor'));
  console.log(localStorage.getItem('itemList'));
  console.log(localStorage.getItem('userList'));
  const bg = document.getElementById('rainbow');
  localStorage.setItem('bgColor', JSON.stringify(bg.style.backgroundColor));
  const itemArr = [];
  localStorage.setItem('itemList', JSON.stringify(itemArr));
  const userList = [];
  localStorage.setItem('userList', JSON.stringify(userList));
});