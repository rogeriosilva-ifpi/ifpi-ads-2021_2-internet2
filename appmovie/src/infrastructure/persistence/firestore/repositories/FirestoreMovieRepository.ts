import { db } from "..";
import { MovieRepository } from "../../../../domain/repositories/MovieRepository";
import { Movie } from "../../../../domain/entidades/Movie";
import { FirebaseGenericRepo } from "./FirebaseGenericRepo";

export class FirestoreMovieRepository extends FirebaseGenericRepo<Movie> implements MovieRepository{

    constructor(){
        super("movies")
    }

    public async lancamentos(): Promise<Movie[]>{
        return this.all()
    }

}