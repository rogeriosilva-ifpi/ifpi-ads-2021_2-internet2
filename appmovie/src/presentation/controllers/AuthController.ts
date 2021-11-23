import { Request, Response } from "express";
import { RefreshTokenCommand } from "../../application/command/RefreshTokenCommand";
import { SigninCommand } from "../../application/command/SigninCommand";
import { SignupCommand } from "../../application/command/SignupCommand";
import { HashProvider } from "../../application/providers/HashProvider";
import { JWTProvider } from "../../application/providers/JWTProvider";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserTokenRepository } from "../../domain/repositories/UserTokenRepository";
import { FirestoreUserRepository } from "../../infrastructure/persistence/firestore/repositories/FirestoreUserRepository";
import { MyHashProvider } from "../../infrastructure/providersImpl/MyHashProvider";

export class AuthController{
    //TODO: Usar injeção de Dependencias
    private userRepo: UserRepository;
    private userTokenRepo: UserTokenRepository;
    private hashProvider: HashProvider;
    private jwtProvider: JWTProvider;

    constructor(){
        this.userRepo = new FirestoreUserRepository()
        this.hashProvider = new MyHashProvider()
    }

    public signUp = async (req: Request, res: Response) => {

        let username: string, password: string
        ({username, password} = req.body)
        // TODO: Implementar VAlidation Interceptor
        if (!username || !password){
            return res.status(400).json({message: 'Username/password são obrigatorios!'})
        }

        if (username.length <= 3 || password.length <=3){
            return res.status(400).json({message: 'Username/password muito(s) curto(s), min: 3'})
        }
 
        //TODO: Usar Injeção de Dependencias para construir o command
        const signupCommand = new SignupCommand(this.userRepo, this.hashProvider)

        // TODO: Global Error handling
        try {
            const result = await signupCommand.execute({username, password})
            return res.status(200).send(result)    
        } catch (error) {
            return res.status(400).json({message: (error as Error).message})            
        }

    }

    public signin = async (req: Request, res: Response) => {
        const {username, password} = req.body

        //TODO: Usar Injeção de Dependencias para construir o command
        const signupCommand = new SigninCommand(this.userRepo, this.userTokenRepo,this.hashProvider, this.jwtProvider)

        const result = await signupCommand.execute({username, password})

        return res.status(200).send(result)
    }

    public refresh = async (req: Request, res: Response) => {

        const {refreshToken} = req.body

        //TODO: Usar Injeção de Dependencias para construir o command
        const signupCommand = new RefreshTokenCommand(this.userTokenRepo, this.jwtProvider)

        const result = await signupCommand.execute({refreshToken})

        return res.status(200).send(result)

    }
}