import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    alert(`you clicked ${count} times`);
  }
  return <button onClick={handleClick}>+</button>;
}
export default Button;
