import styled from 'styled-components'

interface TitleProps{
    color: string
}

export const Title = styled.h1<TitleProps>`
    color: ${props => props.color}
`