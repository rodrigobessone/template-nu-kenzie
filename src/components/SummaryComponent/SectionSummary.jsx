import React from "react";
import StyledSummary from "./StyledSummary";
import SummaryItem from "./SummaryItem";

function SectionSummary( { transactions , handleDelete }) {
  return (
  
    <StyledSummary>
    <h3>Resumo financeiro</h3>
    {
      transactions.length === 0 && (<h2>Você ainda não possui nenhum lançamento</h2>)
    }
      {transactions.map((transaction, index) => (
        <SummaryItem key={index} transaction={transaction} handleDelete={handleDelete}/>
      ))}
    </StyledSummary>
  
  );
}

export default SectionSummary;
