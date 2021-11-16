import { UserRepository } from "../../../../domain/repositories/UserRepository";
import { User } from "../../../../domain/entidades/User";
import { FirebaseGenericRepo } from "./FirebaseGenericRepo";

export class FirestoreUserRepository implements UserRepository{
    
    all(): Promise<User[]> {
        throw FirebaseGenericRepo.all<User>('users');
    }
    save(obj: User): Promise<string> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
    getByUsername(username: string): Promise<User | undefined> {
        throw new Error("Method not implemented.");
    }
}