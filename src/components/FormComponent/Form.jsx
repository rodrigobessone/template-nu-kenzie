import React, { useState } from "react";
import StyledSection from "./StyledSection";
import Input from "./Input";
import Select from "./Select";
import StyledButton from "../ButtonComponent/StyledButton";

function FormSection({ valuesObject, children }) {
  const options = ["Entrada", "Saída"];
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("0");

// Essa função é chamada quando o valor do campo de descrição é alterado. Ela recebe o evento e como parâmetro e atualiza o
// estado description com o valor digitado no campo.
  function descriptionHandle(e) {
    setDescription(e.target.value);
  }

  // Essa função é chamada quando o valor do campo de valor é alterado. Ela realiza algumas etapas de tratamento no valor digitado. 
  // Remove todos os caracteres não numéricos utilizando uma expressão regular e converte o valor para um número decimal. Em seguida, 
  // formata o valor para a moeda brasileira usando a função Intl.NumberFormat. O valor formatado é então armazenado no estado value.
  function valueHandle(e) {
    const inputValue = e.target.value.replace(/\D/g, "");
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      const currencyValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(numericValue / 100);

      setValue(currencyValue);
    } else {
      setValue("");
    }
  }

  // Essa função é chamada quando uma tecla é pressionada no campo de valor. Ela verifica se a tecla pressionada é um número e, 
  // se não for, previne a ação padrão do evento, impedindo que caracteres não numéricos sejam inseridos no campo.
  function handleKeyPress(e) {
    const key = e.key;
    const isNumeric = /^\d+$/.test(key);

    if (!isNumeric) {
      e.preventDefault();
    }
  }

  // Essa função é chamada quando o valor do campo de seleção é alterado. Ela recebe o evento e como parâmetro e atualiza o estado 
  // select com o valor selecionado.
  function selectHandle(e) {
    setSelect(e.target.value);
  }

  // Essa função é responsável por gerar um ID aleatório de tamanho determinado. Ela utiliza um conjunto de caracteres possíveis e, 
  // em um loop, seleciona aleatoriamente caracteres desse conjunto para construir o ID. O ID gerado é retornado como resultado da função.
  function generateRandomId(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }

    return id;
  }

  // Essa função é chamada quando o formulário é submetido. Ela recebe o evento e como parâmetro. Primeiro, previne o comportamento padrão
  // de recarregar a página. Em seguida, verifica se tanto o campo de valor quanto o campo de descrição possuem valores preenchidos. 
  // Se ambos tiverem valores, cria um objeto newTransaction com os valores dos campos e um ID gerado aleatoriamente usando a função 
  // generateRandomId. Em seguida, chama a função valuesObject passando o objeto newTransaction como argumento para adicioná-lo a algum 
  // contexto ou estado externo. Por fim, limpa os estados description e value, deixando os campos vazios.
  function formSubmition(e) {
    e.preventDefault();
    if (!value || !description) {
      return;
    }
    const newTransaction = {
      id: generateRandomId(8),
      description,
      value,
      select,
    };
    valuesObject(newTransaction);
    setDescription("")
    setValue("")
  }

  return (
    <StyledSection>
      <form onSubmit={formSubmition}>
        <Input
          label={"Descrição"}
          type={"text"}
          placeholder={"Digite sua descrição"}
          onChange={descriptionHandle}
          value={description}
        />
        <span>Ex: Compra de roupas</span>
        <Input
          label={"Valor (R$)"}
          type={"text"}
          placeholder={"R$ 00,00"}
          onChange={valueHandle}
          value={value}
        />
        <Select
          label={"Tipo de valor"}
          options={options}
          onChange={selectHandle}
          inputMode="numeric"
          onKeyPress={handleKeyPress}
        />
        <StyledButton insertValue type="submit">
          Inserir valor
        </StyledButton>
      </form>
      {children}
    </StyledSection>
  );
}

export default FormSection;
