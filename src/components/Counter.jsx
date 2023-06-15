import React from "react"
const Counter = () => {
    const [contador, setContador] = React.useState(0)

    return(
        <>
            <p>Você clicou: {contador} vezes</p>
            <button onClick={()=>setContador(contador+1)} type="button">Contador</button>   
            <button onClick={()=>setContador(0)} type="button">Limpar</button>        
        </> 
    ) 
    }
export default Counter;