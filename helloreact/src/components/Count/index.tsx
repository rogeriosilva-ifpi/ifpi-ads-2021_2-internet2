import { useCallback, useState } from "react"

import style from './styles.module.css'
import {Link} from 'react-router-dom'

export const Count = () => {

    const [rogerio, setRogerio] = useState(0)
    const nomes = ['rogerio', 'maria', 'joao', 'Cícero']

    // const handleClick = () => {
    //     setRogerio(rogerio + 1)
    // }

    const handleClick = useCallback(()=>{
        setRogerio(rogerio + 1)},
        [rogerio])

    return (
        <div>
            <h1 className={style.titleR}>Counter App</h1>
            <p>Você já clicou {rogerio} vezes</p>

            {rogerio >= 10 && <h3>Parabéns vc tirou 10!</h3>}

            <button onClick={handleClick}>Contador++</button>
            <button onClick={()=>{setRogerio(0)}}>Zerar</button>
            <ul>
            {nomes.map(nome=>(<li>{nome.toUpperCase()}</li>))}
            </ul>

            <h3>Acessar Versão SC</h3>

            <Link to="/countSC">Clique aqui</Link>
            
        </div>
    )
}