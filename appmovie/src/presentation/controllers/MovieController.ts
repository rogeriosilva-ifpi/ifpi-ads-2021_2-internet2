import { Request, Response } from "express";
import { CreateMovieCommand } from "../../application/command/CreateMovieCommand";
import { GetAllMoviesQuery } from "../../application/query/GetAllMoviesQuery";
import { FirestoreMovieRepository } from "../../infrastructure/persistence/firestore/repositories/FirestoreMovieRepository";

export class MovieController{
    // Obter command/queries by IoC Container
    // const repoMovie = new MongoMovieRepository()
    private repoMovie = new FirestoreMovieRepository()

    public getAll = async (req: Request, res: Response): Promise<Response> => {
        
        const query = new GetAllMoviesQuery(this.repoMovie)
        const movies = await query.execute()

        return res.json(movies)
    }

    public create = async (req: Request, res: Response): Promise<Response> => {
        const {name, genre, duration, year} = req.body

        // Validações e transfomações de dados
        // TODO
    
        const createMovieCommand = new CreateMovieCommand(this.repoMovie)
        const movieId = await createMovieCommand.execute({name, genre, duration, year})
        
        return res.status(201).json({id:movieId})
    }
}