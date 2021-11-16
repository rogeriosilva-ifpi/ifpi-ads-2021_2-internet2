import { UserToken } from "../entidades/UserToken";
import { CRUDRepository } from "./CRUDRepository";

export interface UserTokenRepository extends Omit<CRUDRepository<UserToken>, 'all'>{
  getByUserId(userId: string): Promise<UserToken | undefined>  
}