import { MovieRepository } from "../../../../domain/repositories/MovieRepository";
import { Movie } from "../../../../domain/entidades/Movie";

export class MongoMovieRepository implements MovieRepository{
    public async lancamentos(): Promise<Movie[]> {
        throw new Error("Method not implemented.");
    }
    public async all(): Promise<Movie[]> {
        throw new Error("Method not implemented.");
    }
    public async save(obj: Movie): Promise<string> {
        throw new Error("Method not implemented.");
    }
    public async get(id: number): Promise<Movie | undefined> {
        throw new Error("Method not implemented.");
    }
   
}