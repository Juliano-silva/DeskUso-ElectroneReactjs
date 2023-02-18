import { Link } from "react-router-dom"
import style from './Style.module.css'
import SunMon from '../Arquivos/SoleLua.png'
function Entrar(){
    var Sidebar = document.getElementById("Sidebar").style.display = "block"
}
function Fechar(){
    var Sidebar = document.getElementById("Sidebar").style.display = "none"
}
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
function loadTheme() {
  const darkMode = localStorage.getItem("dark");
  if (darkMode) {
    toggleDarkMode();
  }
}
loadTheme();
function Charge() {
  toggleDarkMode();
  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
};
export default function Header(){
    return(
        <div className={style.Header}>
        <input type="checkbox" name="change-theme" id="change-theme" />
        <label for="change-theme" onClick={Charge} className={style.Theme}>
          <button class="bi bi-moon"><img src={SunMon} alt="" /></button>
          </label>
        <button className={style.Button} onClick={Entrar}>
            <span></span>
            <span></span>
            <span></span>
        </button>
        <h1>DeskUp</h1>
        <div id="Sidebar" className={style.Sidebar}>
            <button onClick={Fechar} className={style.ButtonF}>
            <span></span>
            <span></span>
            <span></span>
            </button>
        <Link to="/">Home</Link>
        <Link to="/ApiInternaP">Pokedex</Link>
        <Link to="/Iframe">Iframe</Link>
        <Link to="/Mural">Mural</Link>
        <Link to="/Random">Random</Link>
        <Link to="/RandomColor">Random Color</Link>
        <Link to="/Tempo">Tempo</Link>
        <Link to="/Cronometro">Cronometro</Link>
        <Link to="/Timer">Timer</Link>
        </div>
        </div>
        )
}
