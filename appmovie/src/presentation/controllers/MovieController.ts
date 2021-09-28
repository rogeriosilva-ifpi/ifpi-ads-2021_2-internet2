import { Request, Response } from "express";
import { CreateMovieCommand } from "../../application/command/CreateMovieCommand";
import { GetAllMoviesQuery } from "../../application/query/GetAllMoviesQuery";
import { db } from "../../infrastructure/persistence/firestore";
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

    public async create(req: Request, res: Response): Promise<Response>{
        const {nome, genero, duracao, ano} = req.body

        // Validações e transfomações de dados
        // TODO
    
        const repoMovie = new FirestoreMovieRepository()
        const createMovieCommand = new CreateMovieCommand(repoMovie)

        const movieId = await createMovieCommand.execute({nome, genero, duracao, ano})
        
        return res.status(201).json({id:movieId})
    }
}