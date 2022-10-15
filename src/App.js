import React, {useState, useEffect} from "react";
import styled from "styled-components";
import SearchBox from "./components/SearchBox";

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000;
`;

function App() {
  const [contagem, setContagem] = useState(0);
  const [texto, setTexto] = useState('');

  useEffect(()=>{
    document.title = contagem;
  },[contagem])

  const botaoAcao = () => {
    setContagem(contagem - 1);
  }

  const handInput = (e) => {
    setTexto(e.target.value);
  }

  return (
  <>
    <div>{contagem} vezes</div>
    <button onClick={() => setContagem(contagem + 1)}>Clique aqui!</button>
    <div><br></br></div>
    <Input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} /> 
    <p>{texto}</p>
    <p>{texto.length}</p>

    <SearchBox  
    frasePadrao="A frase padrão"/>

  </>
  );
}

export default App;