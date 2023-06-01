import React from "react";
import StyledButton from "../ButtonComponent/StyledButton";
import StyledItem from "./StyledItem";


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
