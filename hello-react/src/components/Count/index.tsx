import { useCallback, useEffect, useState } from "react"

export const Count = () => {

    const [count, setCount] = useState(0)

    // function handleOnClick(){
    //     setCount(count+1)
    // }

    const handleOnClick = useCallback(()=>{
        setCount(count+1) 
    }, [count])

    useEffect(()=>{
        document.title = `${count} cliques`
    }, [count])

    return (
        <div>
            <h1>Count App (FC)</h1>
            <p>Você já clicou {count} vezes</p>

            <button onClick={handleOnClick}>Contador++</button>
            <button onClick={()=>setCount(0)}>Zerar</button>
        </div>
    )
}