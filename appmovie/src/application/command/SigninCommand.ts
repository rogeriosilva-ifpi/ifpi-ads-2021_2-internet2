import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserTokenRepository } from "../../domain/repositories/UserTokenRepository";
import { HashProvider } from "../providers/HashProvider";
import { JWTProvider } from "../providers/JWTProvider";

interface SigninRequestModel{
    username: string
    password: string 
}

interface SigninResponseModel{
    accessToken: string
    refreshToken: string
}

export class SigninCommand{

    constructor(
        private userRepository: UserRepository,
        private userTokenRepository: UserTokenRepository,
        private hashProvider: HashProvider,
        private jwtProvider: JWTProvider){
    }

    public async execute({username, password}: SigninRequestModel): Promise<SigninResponseModel>{
        const user = await this.userRepository.getByUsername(username)

        if (!user){
            throw new Error("Usuário e/ou senha inválidos!")
        }

        const validPassword = await this.hashProvider.compare(password, user.password)

        if (!validPassword){
            throw new Error("Usuário e/ou senha inválidos!")
        }

        // Generate Tokens
        const accessToken = this.jwtProvider.sign({expiresIn: '1h', secret: 'my-fake-secret', subject: user.id!})
        const refreshToken = this.jwtProvider.sign({expiresIn: '1d', secret: 'my-fake-secret', subject: user.id!})

        // Save refresh Token into DB
        await this.userTokenRepository.save({token: refreshToken, user})

        return {accessToken, refreshToken}
    }

}
       
