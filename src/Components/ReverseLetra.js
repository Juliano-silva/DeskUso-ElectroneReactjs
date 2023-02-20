import style from './Style.module.css'
function ButtonRevLet(){
    var Letra = document.getElementById("TextoR").value
    var Reverse = Letra.split('').reverse().join('');
    document.getElementById("LetraR").innerText = Letra;
    document.getElementById("Reverse").innerText = Reverse
}
export default function ReverseLetra(){
    return(
        <div className={style.ReverseT}>
            <input type="text" id="TextoR" placeholder="Reverter o texto"/>
            <h3 id='LetraR'></h3>
            <h3 id='Reverse'></h3>
            <button onClick={ButtonRevLet}>Enviar</button>
        </div>
        )
}
