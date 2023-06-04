import React from "react";

// Esse código é uma função de componente chamada Input que recebe algumas props como parâmetros. Ao ser chamada, ela retorna
// um JSX que renderiza um rótulo (<label>) com o texto da prop label e um campo de entrada (<input>) com alguns atributos, 
// como tipo (type), texto de placeholder (placeholder) e as demais props passadas utilizando o operador spread ({...rest}).
// Por fim, o componente Input é exportado como padrão para ser utilizado em outros lugares do código.
function Input({ label, type, placeholder, ...rest }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...rest} />
    </>
  );
}

export default Input;
