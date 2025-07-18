/* variables */

//DOM elements
const amount = document.getElementById("input-bill");
const tipPorcentage = document.querySelectorAll(".porcentage-selected");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-cost");
const porcentage = document.querySelector(".porcentage");

amount.addEventListener("input", () => {
  if (amount.value.trim() !== "") {
    porcentage.classList.add("active");
  }
});

//functionality to select tip porcentage
tipPorcentage.forEach((btn) => {
  if (amount.value.trim() !== "") {
    btn.addEventListener("click", () => {
      const selected = parseFloat(btn.dataset.five);
      const bill = parseFloat(amount.value);
      const tip = bill * (selected / 100);
      tipAmount.value = "$" + tip.toFixed(2);
    });
  } else {
    amount.placeholder = "Please enter the bill amount";
  }
});
