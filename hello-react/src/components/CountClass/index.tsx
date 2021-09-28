import React from "react"

interface CountClassProps{}
interface CountClassState{
    count: number
}

export class CountClass extends React.Component<CountClassProps, CountClassState>{
    constructor(props: CountClassProps){
        super(props)
        this.state = {
            count: 0
        }
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(){
        this.setState({count: this.state.count + 1})
    }

    render(){
        return (
            <div>
                <h1>Count App (Class)</h1>
                <p>Você já clicou {this.state.count} vezes</p>
    
                <button onClick={this.handleOnClick}>Contador++</button>
                <button onClick={()=>this.setState({count: 0})}>Zerar</button>
            </div>
        )
    }
}