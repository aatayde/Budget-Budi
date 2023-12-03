import React from "react";
import Header from "./components/Header";
import DebtandFunds from "./components/DebtandFunds";
import AccountInfo from "./components/AccountInfo";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <DebtandFunds />
      <AccountInfo />

      <Button />
    </div>
  );
}

export default App;
