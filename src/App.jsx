import { useState } from "react";
import FormSection from "./components/FormComponent/Form";
import Template from "./components/MainTemplate/Template";
import SectionSummary from "./components/SummaryComponent/SectionSummary";
import BalanceValue from "./components/TotalValueComponent/BalanceValue";

function App() {
  const [transactions, setTransactions] = useState([]);
  function valuesReceiver(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

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

  function formattedTotalValue(value) {
    const decimalFormattedValue = value / 100
    return decimalFormattedValue.toLocaleString("pt-BR", {
       style: "currency", 
       currency: "BRL",
       });
  }


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
