import { MovieRepository } from "../../../../application/repositories/MovieRepository";
import { Filme } from "../../../../domain/entidades/Filme";

export class MongoMovieRepository implements MovieRepository{
    public async all(): Promise<Filme[]>{
        // Usar o código real do MongoDB
        return []
    }
}