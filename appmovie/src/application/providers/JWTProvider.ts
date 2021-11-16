export interface JWTProviderDTO {
    payload?: any
    secret: string
    subject: string
    expiresIn: string
  }

export interface TokenPayload {
    iat: number
    exp: number
    sub: string
}

export interface JWTProvider {
    sign(data: JWTProviderDTO): string
    verify(token: string, secret: string): TokenPayload
}
  
