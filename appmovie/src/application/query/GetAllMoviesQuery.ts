import { Movie } from "../../domain/entidades/Movie";
import { MovieRepository } from "../../domain/repositories/MovieRepository";

export class GetAllMoviesQuery{
    private movieRepository: MovieRepository

    constructor(movieRepository: MovieRepository){
        this.movieRepository = movieRepository
    }

    public async execute(): Promise<Movie[]>{
        return this.movieRepository.all()
    }

}