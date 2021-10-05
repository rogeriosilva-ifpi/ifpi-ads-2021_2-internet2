// import styles from './style.module.css'

import {Title} from './style'

interface HelloProps{
    name: string
}
export function Hello(props: HelloProps){
    return (
        <Title>
            Hello {props.name}!
        </Title>
    )
}
/*
export function Hello(props: HelloProps){
    return (
        <h1 className={styles.title}>
            Hello {props.name}!
        </h1>
    )
}
*/
