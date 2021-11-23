import { Request, Response } from "express";
import { RefreshTokenCommand } from "../../application/command/RefreshTokenCommand";
import { SigninCommand } from "../../application/command/SigninCommand";
import { SignupCommand } from "../../application/command/SignupCommand";
import { HashProvider } from "../../application/providers/HashProvider";
import { JWTProvider } from "../../application/providers/JWTProvider";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserTokenRepository } from "../../domain/repositories/UserTokenRepository";

export class AuthController{
    //TODO: Usar injeção de Dependencias
    private userRepo: UserRepository;
    private userTokenRepo: UserTokenRepository;
    private hashProvider: HashProvider;
    private jwtProvider: JWTProvider;

    public signUp = async (req: Request, res: Response) => {

        const {username, password} = req.body

        //TODO: Usar Injeção de Dependencias para construir o command
        const signupCommand = new SignupCommand(this.userRepo, this.hashProvider)

        const result = await signupCommand.execute({username, password})

        return res.status(200).send(result)

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