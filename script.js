let income = document.getElementById("income");
let displayIncome = document.getElementById("displayIncome");
let addExpense = document.getElementById("addExpense");

function updateDisplayIncome() {
  console.log(income.value);
  let yearlyIncome = income.value * 40 * 52;
  displayIncome.innerText = `Your estimated yearly income is $${yearlyIncome} before deductions`;
}

function handleElementExpense() {
  console.log("you clicked the create element expense function");
  createElementExpense();
  addElementExpense();
  appendElementExpense();
  insertElementExpense();
}

function createElementExpense() {
  console.log("create new element expense");
}

function addElementExpense() {
  console.log("add element expense");
}

function appendElementExpense() {
  console.log("append element expense");
}

function insertElementExpense() {
  console.log("insert element expense");
}

income.addEventListener("input", updateDisplayIncome);
addExpense.addEventListener("click", handleElementExpense);
