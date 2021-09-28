import styles from './style.module.css'

interface HelloProps{
    name: string
}
export function Hello(props: HelloProps){
    return (
        <h1 className={styles.title}>
            Hello {props.name}!
        </h1>
    )
}

