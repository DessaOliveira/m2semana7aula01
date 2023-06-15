import Button from "./Button";
import Input from "./Input";

function Form({botao, idBotao}) {
    return (  
        <>
      
<form className="form-inline">
  <div className="form-group mb-2">
     <Input tipo="texto" legenda="Digite seu e-mail"/>
  </div>
  <div className="form-group mb-2">
     <Input tipo="password" legenda="Digite sua senha"/>
  </div>
     <Button tipo="button" texto={botao} numero={idBotao}/>
</form>
        </>
    );
}

export default Form;