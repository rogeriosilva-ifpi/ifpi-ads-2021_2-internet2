import { Filme } from "../../domain/entidades/Filme";
import { MovieRepository } from "../repositories/MovieRepository";

export class GetAllMoviesQuery{
    private movieRepository: MovieRepository

    constructor(movieRepository: MovieRepository){
        this.movieRepository = movieRepository
    }

    public async execute(): Promise<Filme[]>{
        return this.movieRepository.all()
    }

}