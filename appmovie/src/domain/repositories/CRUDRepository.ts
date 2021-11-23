export interface CRUDRepository<T>{
    all(): Promise<T[]>
    save(obj: T): Promise<string>
    getById(id: string): Promise<T | undefined>
}