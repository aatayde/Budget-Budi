import React from "react";

function Button({ count, handleClick }) {
  return <button onClick={handleClick}>{count}</button>;
}
export default Button;
