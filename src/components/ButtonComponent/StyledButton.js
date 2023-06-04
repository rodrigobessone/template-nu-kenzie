// O Styled Components é uma biblioteca para estilização de componentes em aplicações React usando JavaScript. Ela permite que você escreva
// estilos diretamente nos componentes utilizando uma sintaxe similar ao CSS, porém com o poder do JavaScript. O objeto "styled" é um 
// recurso central do Styled Components. Ele é utilizado para criar componentes estilizados personalizados. Você pode criar um novo 
// componente utilizando a função "styled" e passando o nome do elemento HTML ou outro componente como parâmetro. Em seguida, você 
// pode definir as regras de estilo dentro de um template string usando a sintaxe CSS.
import styled from "styled-components";
import Theme from "../../styles/Theme";

// O código define um componente de botão estilizado chamado "StyledButton" utilizando o Styled Components. Dentro do template string, 
// várias propriedades de estilo do botão são definidas com base nas props passadas para o componente. Por exemplo, a cor de fundo, a largura, a altura, o tamanho da fonte, a cor do texto e outras propriedades são condicionalmente definidas com base no valor da prop "insertValue".
// Isso permite que o botão tenha diferentes estilos dependendo do valor da prop, adaptando-se dinamicamente conforme necessário. No final, 
// o componente "StyledButton" é criado e pode ser usado em outros componentes como um botão estilizado com base nas regras definidas.
const StyledButton = styled.button`
  background-color: ${(props) =>
    props.insertValue ? `${Theme.colors.primary}` : `${Theme.colors.gray2}`};
  width: ${(props) => (props.insertValue ? "100%" : "3.0625rem")};
  height: ${(props) => (props.insertValue ? "3rem" : "1.1875rem")};
  border-radius: ${(props) => (props.insertValue ? "0.5rem" : "0.125rem")};
  font-size: ${(props) => (props.insertValue ? "1rem" : "0.625rem")};
  color: ${(props) =>
    props.insertValue ? `#ffffff` : `${Theme.colors.gray4}`};
  border: none;
  margin-top: ${(props) => (props.insertValue ? `1.625rem` : `0.375rem`)};
  font-weight: ${(props) => (props.insertValue ? `500` : `400`)};
  cursor: pointer;
`;

export default StyledButton;
