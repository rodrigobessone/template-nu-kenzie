import React from "react";
import StyledButton from "../ButtonComponent/StyledButton";
import StyledItem from "./StyledItem";


// A função SummaryItem recebe dois parâmetros: transaction e handleDelete. Dentro da função, há uma função interna chamada 
//handleDeleteOnClick que chama a função handleDelete passando a transação como argumento. O componente retornado pela função possui a 
// estrutura de um item de resumo financeiro. Ele exibe a descrição e o valor da transação, e o tipo da transação é exibido como "Saída" 
// ou "Entrada" dependendo do valor de transaction.select. Também é renderizado um botão "Excluir" que, ao ser clicado, chama a função 
// handleDeleteOnClick. O componente é estilizado usando o componente StyledItem, e tudo isso é envolvido por um fragmento vazio <>...</>.
function SummaryItem({transaction, handleDelete}) {

    function handleDeleteOnClick(){
      handleDelete(transaction)
    }

  return (
    <>
      <StyledItem type={transaction.select}>
        <div>
        <h3>{transaction.description}</h3>
        <span>{transaction.value}</span>
      </div>
      <div>
      {transaction.select === "1" && <p>Saída</p>}
      {transaction.select === "0" && <p>Entrada</p>}
        <StyledButton onClick={handleDeleteOnClick}>Excluir</StyledButton>
        </div>
      </StyledItem>
    </>
  );
}

export default SummaryItem;
