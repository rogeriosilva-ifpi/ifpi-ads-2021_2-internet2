export interface CRUDRepository<T>{
    all(): Promise<T[]>
    save(obj: T): Promise<string>
    get(id: number): Promise<T | undefined>
}