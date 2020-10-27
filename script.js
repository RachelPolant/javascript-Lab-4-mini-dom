"use strict";

// Create four buttons. Each button represents a different product with a different price. Also
// display a total, which starts at $0.00. Whenever a button is clicked, update the total by adding
// the price of that item.
// lime Cola 2.00, salted peanuts 3.00, choclate Bar 4.00, fruit gummies 6.00

let candyButton = document.querySelectorAll(".candyButton");
let total = 0;

candyButton.forEach((button) => {
  button.addEventListener("click", () => {
    let price = parseFloat(button.getAttribute("data-price"));
    total += price;
    console.log(total);
    let candyTotal = document.querySelector(".total");
    candyTotal.innerText = `${total}`;
  });
});

// Create a form with two inputs: a number input (or range input) for count and a select input
// for the type of coin: Penny, Nickel, Dime, or Quarter.
// ● When the form is submitted, add the specified number of “coins” to the page, each with
// text from the “Which coin?” input. For example, the diagram below shows what would
// be displayed after submitting the form

let makeMoney = document.querySelector(".coinForm"); //declare variable with class from form
makeMoney.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(makeMoney);
  let howMany = formData.get("howMany");
  let whichCoin = formData.get("whichCoin");
  let coinContainer = document.querySelector(".coin-container");
  // console.log(number, coin);
  for (let i = 0; i < howMany; i++) {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", whichCoin);
    newDiv.innerText = `${whichCoin}`;
    coinContainer.append(newDiv);
  }
  makeMoney.reset();
});

console.log("Number 3");
let lightBulb = document.querySelector(".light-bulb");
let lightBulbContainer = document.querySelector(".bulb-container");
let onbutton = document.querySelector(".onbutton");
let offbutton = document.querySelector(".offbutton");
let togglebutton = document.querySelector(".togglebutton");
let endbutton = document.querySelector(".endbutton");
let opbutton = document.querySelectorAll("opbutton");
onbutton.addEventListener("click", () => {
  lightBulb.classList.add("on");
});
offbutton.addEventListener("click", () => {
  lightBulb.classList.remove("on");
});
togglebutton.addEventListener("click", () => {
  lightBulb.classList.toggle("on");
});
endbutton.addEventListener("click", () => {
  lightBulb.remove();
  opbutton.forEach((button) => {
    button.disabled === true;
  });
});
