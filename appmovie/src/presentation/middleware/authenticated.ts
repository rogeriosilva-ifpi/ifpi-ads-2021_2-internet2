import { NextFunction, Request, Response } from "express";
import { JWTProvider } from "../../application/providers/JWTProvider";

// Prover uma Implementação concreta para a Interface
let jwtProvider: JWTProvider;

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader){
        return res.status(401).json({error: 'Token não enviado!'})
    }

    const token = authHeader.split(' ')[1]

    try{
        const decoded = jwtProvider.verify(token, 'my-fake-secret')

        const userId = decoded.sub

        // Disponibilizar o id do usuário logado no objeto request
        // Ficará disponível a nível de Controller
        req.userId = userId

        // Requisição pode seguir normalmente
        return next()
    }catch (error){
        return res.status(401).json({error: 'Token inválido ou expirado!'})
    }
    
}