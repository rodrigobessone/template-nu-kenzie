import React from "react";
import StyleBalancedValue from "./StyledBalancedValue";


// A função BalanceValue recebe um parâmetro chamado balance. Dentro da função, o componente retornado exibe o valor total do saldo.
// Ele utiliza o componente StyleBalancedValue para estilizar o conteúdo. O valor do saldo é exibido dentro de um elemento h3. Além disso, 
// há um parágrafo que informa que o valor se refere ao saldo. Tudo isso é envolvido por um fragmento vazio <>...</>.
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
