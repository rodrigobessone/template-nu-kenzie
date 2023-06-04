import React from "react";

// Esse código é uma função de componente chamada Select que recebe algumas props como parâmetros. Ao ser chamada, ela retorna um JSX que 
// renderiza um rótulo (<label>) com o texto da prop label e um elemento de seleção (<select>) com os atributos passados via spread 
// ({...rest}). Dentro do elemento <select>, é mapeado o array de opções (options) utilizando o método map(). Para cada item do array, 
// é renderizado um elemento <option> com uma chave única (key) baseada no índice e um valor (value) também baseado no índice. O texto
// do item é exibido como conteúdo dentro do elemento <option>.
function Select({ options, label, ...rest }) {
  return (
    <>
      <label>{label}</label>
      <select {...rest}>
        {options.map((item, index) => (
          <option key={index} value={index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
