import { HashProvider } from "../../application/providers/HashProvider";

export class MyHashProvider implements HashProvider{
    public async hash(value: string): Promise<string> {
        return value.toUpperCase()
    }
    public async compare(value: string, hash: string): Promise<boolean> {
        const valueHash = await this.hash(value)
        return valueHash === hash
    }

}