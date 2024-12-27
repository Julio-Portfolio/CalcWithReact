import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0"); // Inicialmente como string para facilitar concatenação
  const [isResultDisplayed, setIsResultDisplayed] = useState(false); // Indica se o resultado foi exibido

  // Função para adicionar número ou operador
  const adicionarNumero = (numb) => {
    if (isResultDisplayed) {
      // Se o resultado estiver exibido, redefine para o novo número/operador
      setCurrentNumber(numb);
      setIsResultDisplayed(false); // Reseta o indicador
    } else {
      // Concatena o número/operador ao valor atual
      setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${numb}`);
    }
  };

  // Função para limpar a tela
  const limparNumero = () => {
    setCurrentNumber("0");
    setIsResultDisplayed(false);
  };

  // Função para calcular o resultado
  const operacao = () => {
    try {
      const resultado = eval(currentNumber.replace("x", "*")); // Substitui 'x' por '*' para multiplicação
      setCurrentNumber(String(resultado)); // Atualiza com o resultado
      setIsResultDisplayed(true); // Marca que o resultado está exibido
    } catch (error) {
      setCurrentNumber("Erro"); // Mostra erro se a expressão for inválida
      setIsResultDisplayed(true);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="=" onClick={operacao} />
          <Button label="9" onClick={() => adicionarNumero("9")} />
          <Button label="0" onClick={() => adicionarNumero("0")} />
          <Button label="C" onClick={limparNumero} />
        </Row>
        <Row>
          <Button label="5" onClick={() => adicionarNumero("5")} />
          <Button label="6" onClick={() => adicionarNumero("6")} />
          <Button label="7" onClick={() => adicionarNumero("7")} />
          <Button label="8" onClick={() => adicionarNumero("8")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => adicionarNumero("1")} />
          <Button label="2" onClick={() => adicionarNumero("2")} />
          <Button label="3" onClick={() => adicionarNumero("3")} />
          <Button label="4" onClick={() => adicionarNumero("4")} />
        </Row>
        <Row>
          <Button label="+" onClick={() => adicionarNumero("+")} />
          <Button label="-" onClick={() => adicionarNumero("-")} />
          <Button label="x" onClick={() => adicionarNumero("x")} />
          <Button label="/" onClick={() => adicionarNumero("/")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
