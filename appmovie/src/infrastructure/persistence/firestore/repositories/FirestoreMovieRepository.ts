import { db } from "..";
import { MovieRepository } from "../../../../domain/repositories/MovieRepository";
import { Movie } from "../../../../domain/entidades/Movie";
import { FirebaseGenericRepo } from "./FirebaseGenericRepo";

export class FirestoreMovieRepository implements MovieRepository{


    public async all(): Promise<Movie[]>{
        // Usar o código real do firestore
        // const filmesRef = db.collection('movies')

        // const filmesDoc = await filmesRef.get()

        // const filmes = filmesDoc.docs.map(doc=>({id: doc.id, ...doc.data()}))

        // return filmes as Movie[]
        return FirebaseGenericRepo.all<Movie>('movies')
    }

    public async save(filme: Movie): Promise<string> {
        const filmesRef = db.collection('movies')

        const result = await filmesRef.add(filme)

        return result.id
    }

    public async get(id: number): Promise<Movie | undefined> {
        return undefined
    }

    public async lancamentos(): Promise<Movie[]>{
        return this.all()
    }

}