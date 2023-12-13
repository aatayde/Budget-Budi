import React from "react";
// import Account from "./Account";

const accounts = [
  {
    id: 1,
    title: "BoA",
    balance: 4000,
  },
  {
    id: 2,
    title: "Petal",
    balance: 900,
  },
];

export function Accounts() {
  const listAccounts = accounts.map((account) => (
    <li key={account.id}>
      {account.title} ${account.balance}
    </li>
  ));

  return <ul>{listAccounts}</ul>;
}

// function Accounts() {
//   return (
//     <div className="account">
//       <ul>
//         <Account />
//         <Account />
//         <Account />
//       </ul>
//     </div>
//   );
// }
export default Accounts;
