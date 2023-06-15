import Form from "./form"
import Header from "./Header";
import Counter from './Counter'

function App() {

  return ( 
    <div className="App">
      <Header />
      <h1>Olá Mundo!</h1>
      <Form botao="Botão 1" idBotao="1" />
      <Counter />
    </div>
  );
}

export default App;