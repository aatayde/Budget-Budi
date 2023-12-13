import React from "react";
import Account from "./Account";

function Accounts() {
  return (
    <div className="account">
      <ul>
        <Account id="1" />
        <Account id="2" />
        <Account id="3" />
      </ul>
    </div>
  );
}
export default Accounts;
