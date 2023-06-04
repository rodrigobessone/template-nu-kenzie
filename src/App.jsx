// O useState é um hook no React que permite adicionar estado a componentes funcionais. O estado é uma forma de armazenar e rastrear 
// dados que podem mudar ao longo do tempo. Quando você usa o useState, você está criando uma variável de estado dentro de um componente
// funcional. Essa variável pode armazenar qualquer tipo de dado, como números, strings, objetos, arrays e até mesmo valores booleanos.
// O useState retorna um par de valores: o valor atual do estado e uma função que permite atualizar esse valor. A função de atualização 
// pode ser chamada em qualquer lugar dentro do componente, e quando ela é chamada, o componente é re-renderizado com o novo valor 
// de estado.
import { useState } from "react";
import FormSection from "./components/FormComponent/Form";
import Template from "./components/MainTemplate/Template";
import SectionSummary from "./components/SummaryComponent/SectionSummary";
import BalanceValue from "./components/TotalValueComponent/BalanceValue";

function App() {
// O código cria uma variável de estado chamada "transactions" e uma função "setTransactions" para atualizá-la. A função "valuesReceiver"
// recebe uma nova transação como parâmetro e adiciona essa transação ao array "transactions" usando a função de atualização.
  const [transactions, setTransactions] = useState([]);
  function valuesReceiver(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }
// O código define uma função chamada "totalValues" que calcula o valor total das transações. A função utiliza o método "reduce" no 
// array "transactions" para iterar sobre cada transação e acumular um valor. Dentro do "reduce", verifica-se se o campo "select" da 
// transação é igual a 0 ou não. Com base nisso, o valor da transação é adicionado ou subtraído do acumulador. No final, o resultado
// acumulado é retornado como o valor total das transações. 
  function totalValues() {
    return transactions.reduce((acc, transaction) => {
      if (transaction.select == 0) {
        return acc + parseFloat(transaction.value.replace(/\D/g, ""));
      } else {
        return acc - parseFloat(transaction.value.replace(/\D/g, ""));
      }
    }, 0);
  }
  const value = totalValues();

// A função "formattedTotalValue" recebe um valor numérico como parâmetro. Divide esse valor por 100 para formatar corretamente os decimais.
// Em seguida, utiliza o método "toLocaleString" para formatar o valor como uma string monetária brasileira (R$). Retorna o valor formatado
// como uma string monetária no formato "R$ X.XXX,XX".
  function formattedTotalValue(value) {
    const decimalFormattedValue = value / 100
    return decimalFormattedValue.toLocaleString("pt-BR", {
       style: "currency", 
       currency: "BRL",
       });
  }

// A função "handleDeleteItem" recebe uma transação como parâmetro. Utiliza a função de atualização do estado "setTransactions" para atualizar
// o estado "transactions". Através do método "filter", remove a transação do array "transactions" com base no seu ID.
  function handleDeleteItem(transaction) {
    setTransactions(transactions.filter((t) => t.id !== transaction.id));
  }

  return (
    <Template>
      <FormSection valuesObject={valuesReceiver}>
        {transactions.length > 0 && (<BalanceValue balance={formattedTotalValue(value)} />)}
      </FormSection>
      <SectionSummary
        transactions={transactions}
        handleDelete={handleDeleteItem}
      />
    </Template>
  );
}

export default App;
