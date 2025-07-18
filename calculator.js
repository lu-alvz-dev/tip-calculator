/* variables */

//DOM elements
const amount = document.getElementById("input-bill");
const tipPorcentage = document.querySelectorAll(".porcentage-selected");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-cost");

let selected = 0;
let bill = 0;

tipPorcentage.forEach((btn) => {
  btn.addEventListener("click", () => {
    selected = parseFloat(btn.dataset.five);
    bill = parseFloat(amount.value);
    tipAmount.value = bill * (selected / 100);
  });
});
