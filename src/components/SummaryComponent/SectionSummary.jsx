import React from "react";
import StyledSummary from "./StyledSummary";
import SummaryItem from "./SummaryItem";



// A função SectionSummary recebe dois parâmetros: transactions e handleDelete. Dentro da função, ela retorna um componente que contém
// um resumo financeiro. Se o tamanho da lista de transações for igual a zero, será exibida uma mensagem informando que não há lançamentos.
// Caso contrário, para cada transação na lista de transações, será renderizado um componente SummaryItem passando a transação e a função
// handleDelete como propriedades. O componente retornado pela função SectionSummary é estilizado usando o componente StyledSummary e
// contém o título "Resumo financeiro" e a lista de itens de resumo financeiro.
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
