import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <nav>
            <Link to="/countSC">Count SC</Link>
            - -
            <Link to="/count">Count </Link>
            - - 
            <Link to="/filmes">Filmes</Link>
        </nav>
    )
}