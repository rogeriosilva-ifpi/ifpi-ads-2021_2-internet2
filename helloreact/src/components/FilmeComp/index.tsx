import { Filme } from "../../pages/Filmes";

interface FilmeProps{
    filme: Filme
}

export function FilmeComp({filme}: FilmeProps){
    return (
        <div>
            <h3>{filme.nome}</h3>
            <p>{filme.genero}</p>
            <p>{filme.ano}</p>
        </div>
    )
}