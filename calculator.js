/* variables */

//DOM elements
const amount = document.getElementById("input-bill");
const tipPorcentage = document.querySelectorAll(".porcentage-selected");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-cost");

//functionality to select tip porcentage
tipPorcentage.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selected = parseFloat(btn.dataset.five);
    const bill = parseFloat(amount.value);
    const tip = bill * (selected / 100);
    tipAmount.value = "$" + tip.toFixed(2);
  });
});
