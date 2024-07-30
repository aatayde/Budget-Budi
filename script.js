let income = document.getElementById("income");
let displayIncome = document.getElementById("displayIncome");

function updateDisplayIncome() {
  console.log(income.value);
  let yearlyIncome = income.value * 40 * 52;
  displayIncome.innerText = `Your estimated yearly income is $${yearlyIncome} before deductions`;
}

addEventListener("input", updateDisplayIncome);
