/* variables */

//DOM elements
const amount = document.getElementById("input-bill");
const tipPorcentage = document.querySelectorAll(".porcentage-selected");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-cost");
const porcentage = document.querySelector(".porcentage");
const calculate = document.getElementById("calculate");

amount.addEventListener("input", () => {
  if (!isNaN(amount.value.trim()) /*|| amount.value.trim() !== ""*/) {
    porcentage.classList.add("active");
  } else {
    porcentage.classList.remove("active");
  }
});

//functionality to select tip porcentage

tipPorcentage.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selected = parseFloat(btn.dataset.five);
    const bill = parseFloat(amount.value);

    if (isNaN(bill)) {
      amount.placeholder = "please enter amount";
      return;
    }
    const tip = bill * (selected / 100);
    tipAmount.value = "$" + tip.toFixed(2);
    if (!isNaN(tipAmount.value.trim())) {
      calculate.classList.add("active");
      totalAmount.value = "$" + (bill + tip).toFixed(2);
    }
  });
});
