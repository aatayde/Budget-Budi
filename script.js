let income = document.getElementById("income");
let enterIncome = document.getElementById("enterIncome");

function displayIncome() {
  let displayIncome = document.getElementById("displayIncome");
  let yearlyIncome = income.value * 40 * 52;
  displayIncome.innerText = `Your estimated yearly income is $${yearlyIncome} before deductions`;
}

enterIncome.addEventListener("click", displayIncome);
enterIncome.addEventListener("enter", displayIncome);
