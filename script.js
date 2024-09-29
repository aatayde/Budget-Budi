let income = document.getElementById("income");
let displayIncome = document.getElementById("displayIncome");
let addExpense = document.getElementById("addExpense");
let expenseList = document.getElementById("expenseList");
let displayExpense = document.getElementById("displayExpense");
let displaySumOfExpenses = document.getElementById("displaySumOfExpenses");

// const

function updateDisplayIncome() {
  console.log(income.value);
  let yearlyIncome = income.value * 40 * 52;
  displayIncome.innerText = `Your estimated yearly income before deductions is $${yearlyIncome}`;
}

function handleElementExpense() {
  console.log("you clicked the create element expense function");
  createElementExpense();
}

// Add value to count
let count = 0;

// Add Expense list
let expenseListArray = [];

function createElementExpense() {
  console.log("create new element expense");
  let newExpense = document.createElement("input");
  newExpense.type = "number";
  // newExpense.value = 0;
  newExpense.id = "expense-" + count;
  console.log(newExpense.id);
  expenseList.appendChild(newExpense);

  // Add each expense to a list
  expenseListArray.push(newExpense);
}

// Display Sum of Expenses
function updateDisplayExpenseTotal() {
  console.log(expenseListArray);
  let sum = 0;

  for (x = 0; x < expenseListArray.length; x++) {
    sum += parseFloat(expenseListArray[x].value);
  }
  console.log(sum);
  displaySumOfExpenses.innerText = sum;
}

// Dynamically update income
income.addEventListener("input", updateDisplayIncome);

addExpense.addEventListener("click", (e) => {
  console.log(this.className);
  console.log(e.currentTarget === this);
  console.log(e.timeStamp);
  // on click, increment count & add to addExpense
  console.log(this.id);
  count++;
  console.log(count);
  // add count as id value of newly created element
  createElementExpense(count);
});

// dynamically update the sum of expenses
displaySumOfExpenses.addEventListener("input", updateDisplayExpenseTotal);
