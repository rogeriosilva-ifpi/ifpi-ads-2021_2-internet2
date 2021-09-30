import style from './style.module.css'
// CSS Modules / Styled Components
interface HelloProps{
    name?: string
}

export function Hello({name = 'Kauê'}: HelloProps){
    return <h2 className={style.title}>Olá React, meu nome é {name}!</h2>
}
