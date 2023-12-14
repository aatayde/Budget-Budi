import React, { useState } from "react";
import Header from "./Header";
import Accounts from "./Accounts";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    // alert(`you clicked ${count} times`);
  }

  return (
    <div>
      <Header />
      <Accounts />
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
