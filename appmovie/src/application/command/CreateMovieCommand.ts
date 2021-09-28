import { Filme } from "../../domain/entidades/Filme"
import { MovieRepository } from "../repositories/MovieRepository"

interface CreateMovieRequestModel{
    nome: string
    genero: string
    duracao: number
    ano: number
}

interface CreateMovieResponseModel{
    id: string
}


export class CreateMovieCommand{
    private movieRepository: MovieRepository

    constructor(movieRepository: MovieRepository){
        this.movieRepository = movieRepository
    }

    public async execute(request: CreateMovieRequestModel): Promise<CreateMovieResponseModel>{

        // Lógica de Application
        const {nome} = request

        this.movieRepository.create({nome})

        return {id: '0909ds'}
    }

}