import { db } from "..";

export class FirebaseGenericRepo{
    public static async all<T>(collectionName: string): Promise<T[]>{
        // Usar o código real do firestore
        const filmesRef = db.collection('movies')

        const filmesDoc = await filmesRef.get()

        const filmes = filmesDoc.docs.map<T>(doc=>({id: doc.id, ...doc.data()} as unknown as T))

        return filmes as T[]
    }
}