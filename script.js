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
  console.log("Monthly Income: $", income.value * 40 * 4);
  console.log("Bi Weekly Income: $", income.value * 40 * 2);
  console.log("Weekly Income: $", income.value * 40);
}

function handleElementExpense() {
  console.log("you clicked the create element expense function");
  createElementExpense();
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

// Add value to count
let count = 0;

// Add Expense list
let expenseListArray = [];

function createElementExpense() {
  console.log("create new element expense");
  let newExpense = document.createElement("input");
  newExpense.type = "number";
  newExpense.placeholder = 0;
  newExpense.id = "expense-" + count;
  console.log(newExpense.id);
  expenseList.appendChild(newExpense);

  // Add each expense to a list
  expenseListArray.push(newExpense);
  // WHEN DO I UPDATE THE EXPENSES???
  newExpense.addEventListener("newExpense", updateDisplayExpenseTotal);
}

// Dynamically update income
income.addEventListener("input", updateDisplayIncome);
// Dynamically update sum of expenses
newExpense.addEventListener("input", updateDisplayExpenseTotal);

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
