import { User } from "../entidades/User";
import { CRUDRepository } from "./CRUDRepository";

export interface UserRepository extends CRUDRepository<User>{
    getByUsername(username: string): Promise<User | undefined>
}