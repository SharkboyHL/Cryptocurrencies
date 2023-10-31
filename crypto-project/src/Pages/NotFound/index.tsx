import style from './notfound.module.css'
import { Link } from 'react-router-dom'

export function NotFound(){
    return(
        <div className={style.container}>
            <h1>Página 404 não existe !</h1>
            <Link to="/">Acessar CriptoMoedas</Link>
        </div>
    )
}