function Start(){
const today = new Date();
var segundo = today.getSeconds();
var minutos = today.getMinutes();
var horas = today.getHours();
segundo = checkTime(segundo)
minutos = checkTime(minutos)
document.getElementById("hora").innerHTML =  horas + ":" + minutos + ":" + segundo
setTimeout(Start,1000);
}
function checkTime(i){
    if (i< 10) {i = "0" + i};
    return i;
}
export default function Timer(){
    return(
        <div>
            <h1>Hora</h1>
            <button onClick={Start} id="Começar">Começar</button>
            <h1 id="hora"></h1>
        </div>
        )
    }
