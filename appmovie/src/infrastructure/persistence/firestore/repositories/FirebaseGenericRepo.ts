import { db } from "..";

export abstract class FirebaseGenericRepo<T>{

    private collectionRef: FirebaseFirestore.CollectionReference

    constructor(private collectionName: string){
        this.collectionRef = db.collection(this.collectionName)
    }

    public async all(): Promise<T[]>{
        const snapshots = await this.collectionRef.get()
        const result = snapshots.docs.map<T>(doc=>({id: doc.id, ...doc.data()} as unknown as T))

        return result as T[]
    }

    public async save(obj: T): Promise<string> {
        const result = await this.collectionRef.add(obj)
        
        return result.id
    }

    public async getById(id: string): Promise<T | undefined> {

        const result = await this.collectionRef.doc(id).get()

        if (!result.exists) return
        
        return {id, ...result.data()} as unknown as T
    }

    public async getByAttribute(atribute: string, value: string): Promise<T[]>{

        const snapshots = await this.collectionRef.where(atribute, '==', value).get()

        const result = snapshots.docs.map<T>(doc=>({id: doc.id, ...doc.data()} as unknown as T))

        return result as T[]
    } 

}