let income = document.getElementById("income");
let enterIncome = document.getElementById("enterIncome");

console.log(income.value);

function displayIncome() {
  console.log(income.value);
}

enterIncome.addEventListener("click", displayIncome);
