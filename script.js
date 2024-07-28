let income = document.getElementById("income");
let enterIncome = document.getElementById("enterIncome");

console.log(income.value);

let incomeRate = document.getElementById("income-type");

function displayIncome() {
  let displayIncome = document.getElementById("displayIncome");
  displayIncome.innerText = `You're income is ${income.value}`;
}

enterIncome.addEventListener("click", displayIncome);
enterIncome.addEventListener("enter", displayIncome);
