import { validateEmail, validatePassword, validateUsername } from "./validate";

const changeColorBtn = document.getElementById("color-btn");

changeColorBtn.addEventListener("click", () => {
  const rainbow = document.getElementById("rainbow");
  const colorArray = ["#FF6633", "#FFB399", "#FF33FF", "#FFFF99", "#00B3E6"];
  rainbow.style.backgroundColor =
    colorArray[Math.floor(Math.random() * colorArray.length)];
});

const addItemBtn = document.getElementById("add-btn");

addItemBtn.addEventListener("click", () => {
  const inputBackpack = document.getElementById("item-input");
  const errorMessage = document.getElementsByClassName("error")[0];
  if (!inputBackpack.value) {
    errorMessage.textContent = "Plese Enter an item to continue!";
    return;
  }
  errorMessage.textContent = "";
  const ul = document.getElementById("listItem").firstElementChild;
  const li = createLiElement(inputBackpack.value);
  console.log(li);
  ul.appendChild(li);
});

const createLiElement = (item) => {
  const li = document.createElement("li");
  li.textContent = item;
  return li;
};

const formSection = document.getElementById("input-list");
const inputs = formSection.getElementsByTagName("input");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const errorMessage = formSection.querySelector(".error");
  errorMessage.textContent = "";

  const username = inputs[0].value;
  const email = inputs[1].value;
  const password = inputs[2].value;

  if (!validateUsername(username)) {
    errorMessage.textContent =
      "Username is Invalid make sure to contain uppercase, number and not special character";
  } else if (!validateEmail(email)) {
    errorMessage.textContent = "This is not a Email format! Contain @ and .com";
  } else if (!validatePassword(password)) {
    errorMessage.textContent =
      "Password is Invalid make sure to contain uppercase, lowercase, number and special character";
  } else {
    errorMessage.textContent = "Successfully! Yay";
  }
});
