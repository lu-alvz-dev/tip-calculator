/* variables */

//DOM elements
const amount = document.getElementById("input-bill");
const tipPorcentage = document.querySelectorAll(".porcentage-selected");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-cost");
const porcentage = document.querySelector(".porcentage");
const calculate = document.getElementById("calculate");

function selectTip() {
  tipPorcentage.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = parseFloat(btn.dataset.tip);
      const bill = parseFloat(amount.value.replace(/[^0-9.]/g, ""));
      const tip = bill * (selected / 100);
      tipAmount.value = "$ " + tip.toFixed(2);
      totalAmount.value = "$ " + (bill + tip).toFixed(2);
    });
  });
}

calculate.addEventListener("click", () => {
  selectTip();
});
