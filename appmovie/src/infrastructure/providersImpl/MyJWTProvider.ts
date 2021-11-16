import { JWTProvider, JWTProviderDTO, TokenPayload } from "../../application/providers/JWTProvider";

export class MyJWTProvider implements JWTProvider{
    sign(data: JWTProviderDTO): string {
        return data.payload
    }
    verify(token: string, secret: string): TokenPayload {
        return {sub: token, iat: 0, exp: 0}
    }

}