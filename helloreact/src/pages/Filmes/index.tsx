import axios from 'axios'
import { useEffect, useState } from 'react'
import { FilmeComp } from '../../components/FilmeComp'

export interface Filme{
    nome: string
    ano: number
    genero: string
}

export const Filmes = () => {

    const [filmes, setFilmes] = useState<Filme[]>([])

    useEffect(() => {

        async function loadFilmes(){
            try {
                const response = await axios.get('http://localhost:3003/filmes')
                setFilmes(response.data)  
            } catch (error) {
                console.error(error) 
            }
            
        }
        // console.log('Olá eu sou o Filmes')

        loadFilmes()
        
    }, [])

    return (
        <>
            <h1>Filmes</h1>
            {filmes.length > 0 && 
                filmes.map(filme => <FilmeComp key={filme.nome} filme={filme}/>)
            }
        </>
    )
}