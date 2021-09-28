import React from "react"

interface HelloWithChildrenProps{
    name: string
}

export const HelloWithChildren:React.FC<HelloWithChildrenProps> = (props) => {
    return (
        <div>
            <h1>Olá {props.name}, tudo bem?!</h1>
            {props.children}
        </div>
    )
}