import { useState } from "react"

import {Title} from './styles'

export const CountSC = () => {

    const [rogerio, setRogerio] = useState(0)
    const nomes = ['rogerio', 'maria', 'joao', 'Cícero']

    const handleClick = () => {
        setRogerio(rogerio + 1)
    }

    return (
        <div>
            <Title color="red">Counter App</Title>
            <p>Você já clicou {rogerio} vezes</p>

            {rogerio >= 10 && <h3>Parabéns vc tirou 10!</h3>}

            <button onClick={handleClick}>Contador++</button>
            <button onClick={()=>{setRogerio(0)}}>Zerar</button>
            <ul>
            {nomes.map(nome=>(<li>{nome.toUpperCase()}</li>))}
            </ul>
            
        </div>
    )
}