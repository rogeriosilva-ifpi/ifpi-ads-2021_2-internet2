import { db } from "..";
import { MovieRepository } from "../../../../application/repositories/MovieRepository";
import { Filme } from "../../../../domain/entidades/Filme";

export class FirestoreMovieRepository implements MovieRepository{
    public async all(): Promise<Filme[]>{
        // Usar o código real do firestore
        const filmesRef = db.collection('filmes')

        const filmesDoc = await filmesRef.get()

        const filmes = filmesDoc.docs.map(doc=>({id: doc.id, ...doc.data()}))

        return filmes as Filme[]
    }
}