import { Filme } from "../../domain/entidades/Filme";

export interface MovieRepository{
    all(): Promise<Filme[]>
}