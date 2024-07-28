let income = document.getElementById("income");
let enterIncome = document.getElementById("enterIncome");
let displayIncome = document.getElementById("displayIncome");

enterIncome.onkeydown = updateDisplayIncome;
enterIncome.onkeyup = updateDisplayIncome;

function updateDisplayIncome() {
  let yearlyIncome = this.value * 40 * 52;
  displayIncome.innerText = `Your estimated yearly income is $${yearlyIncome} before deductions`;
}
