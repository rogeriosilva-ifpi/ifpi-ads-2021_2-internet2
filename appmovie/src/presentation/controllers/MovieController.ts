import { Request, Response } from "express";
import { GetAllMoviesQuery } from "../../application/query/GetAllMoviesQuery";
import { FirestoreMovieRepository } from "../../infrastructure/persistence/firestore/repositories/FirestoreMovieRepository";
import { MongoMovieRepository } from "../../infrastructure/persistence/mongo/repositories/MongoMovieRepository";

export class MovieController{
    public async getAll(req: Request, res: Response): Promise<Response>{
        // Obter command/queries by IoC Container
        const repoMovie = new FirestoreMovieRepository()
        // const repoMovie = new MongoMovieRepository()
        
        const query = new GetAllMoviesQuery(repoMovie)

        const movies = await query.execute()

        return res.json(movies)
    }
}