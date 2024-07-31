let income = document.getElementById("income");
let displayIncome = document.getElementById("displayIncome");

function updateDisplayIncome() {
  console.log(income.value);
  let yearlyIncome = income.value * 40 * 52;
  displayIncome.innerText = `Your estimated yearly income is $${yearlyIncome} before deductions`;
}

function addExpense() {
  console.log("you clicked the add expense function");
}

addEventListener("input", updateDisplayIncome);
addEventListener("click", addExpense);
