import { UserRepository } from "../../../../domain/repositories/UserRepository";
import { User } from "../../../../domain/entidades/User";
import { FirebaseGenericRepo } from "./FirebaseGenericRepo";

export class FirestoreUserRepository extends FirebaseGenericRepo<User> implements UserRepository{
    
    constructor(){
        super("users")
    }

    public async getByUsername(username: string): Promise<User | undefined> {
        const result = await this.getByAttribute("username", username)

        if (result.length <= 0) return

        return result[0]
    }
    
}