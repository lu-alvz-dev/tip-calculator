/* variables */

//DOM elements
const amount = document.getElementById("input-bill");
const tipPorcentage = document.querySelectorAll(".porcentage-selected");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-cost");
const porcentage = document.querySelector(".porcentage");
const calculate = document.getElementById("calculate");

let selected = 0;

amount.addEventListener("input", () => {
  tipAmount.value = "";
  totalAmount.value = "";
  if (amount.value.replace(/[^0-9.]/g, "") === "") {
    porcentage.classList.remove("active");
    tipPorcentage.forEach((b) => {
      b.classList.remove("selected");
      calculate.classList.remove("active");
    });

    return;
  }
  porcentage.classList.add("active");
});

tipPorcentage.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!porcentage.classList.contains("active")) return;
    calculate.classList.add("active");
    tipPorcentage.forEach((b) => {
      b.classList.remove("selected");
    });
    btn.classList.add("selected");
    selected = parseFloat(btn.dataset.tip);
  });
});

calculate.addEventListener("click", () => {
  const bill = parseFloat(amount.value.replace(/[^0-9.]/g, ""));
  if (!porcentage.classList.contains("active") || isNaN(bill)) return;
  const tip = bill * (selected / 100);
  tipAmount.value = "$ " + tip.toFixed(2);
  totalAmount.value = "$ " + (bill + tip).toFixed(2);
});
