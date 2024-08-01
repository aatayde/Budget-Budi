let income = document.getElementById("income");
let displayIncome = document.getElementById("displayIncome");
let addExpense = document.getElementById("addExpense");

function updateDisplayIncome() {
  console.log(income.value);
  let yearlyIncome = income.value * 40 * 52;
  displayIncome.innerText = `Your estimated yearly income is $${yearlyIncome} before deductions`;
}

function createElementExpense() {
  console.log("you clicked the add expense function");
}

income.addEventListener("input", updateDisplayIncome);
addExpense.addEventListener("click", createElementExpense);
