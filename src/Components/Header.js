import { Link } from "react-router-dom"
import style from './Style.module.css'
export default function Header(){
    return(
        <div className={style.Header}>
        <h1>Header</h1>
        <Link to="/">Home</Link>
        <Link to="/ApiInterna">ApiInterna</Link>
        <Link to="/Animation">Animation</Link>
        <Link to="/Iframe">Iframe</Link>
        <Link to="/Mural">Mural</Link>
        <Link to="/Random">Random</Link>
        <Link to="/RandomColor">Random Color</Link>
        <Link to="/Roleta">Roleta</Link>
        <Link to="/Instalar">Instalar</Link>
        <Link to="/Tempo">Tempo</Link>
        <Link to="/Cronometro">Cronometro</Link>
        <Link to="/Timer">Timer</Link>
        </div>
        )
}
