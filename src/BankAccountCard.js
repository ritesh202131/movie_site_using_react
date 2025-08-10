// BankAccountCard.js

import React from "react";

function BankAccountCard(props) {
  const { name, accountNumber, accountType, balance } = props;

  return (
    <div>
      <h3>Name:{name}</h3>
      <p>Account Number: {accountNumber}</p>
      <p>Account Type: {accountType}</p>
      <p>Balance: {balance}</p>
    </div>
  );
}
export default BankAccountCard;
