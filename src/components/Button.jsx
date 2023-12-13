function Button() {
  function handleClick() {
    alert("you clicked me!");
  }
  return <button onClick={handleClick}>+</button>;
}
export default Button;
