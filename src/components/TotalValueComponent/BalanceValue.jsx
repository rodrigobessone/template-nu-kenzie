import React from "react";
import StyleBalancedValue from "./StyledBalancedValue";

function BalanceValue({balance}) {

  
  return (
    <>
      <StyleBalancedValue>
        <div>
          <span>Valor total:</span>
          <h3>{balance}</h3>
        </div>
        <p>O valor se refere ao saldo</p>
      </StyleBalancedValue>
    </>
  );
}

export default BalanceValue;
