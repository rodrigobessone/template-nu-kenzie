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

  function descriptionHandle(e) {
    setDescription(e.target.value);
  }

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

  function handleKeyPress(e) {
    const key = e.key;
    const isNumeric = /^\d+$/.test(key);

    if (!isNumeric) {
      e.preventDefault();
    }
  }

  function selectHandle(e) {
    setSelect(e.target.value);
  }

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
