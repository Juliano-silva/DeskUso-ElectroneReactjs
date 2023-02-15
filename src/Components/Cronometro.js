var seg = 0;
var min = 0;
var hor = 0;
var tempo = 1000;
var cron;
function Start(){
    cron = setInterval(() => {Timer()}, tempo)
}
function Sair(){clearInterval(cron); document.getElementById("counter").innerHTML = "00:00:00"}
function Pause(){clearInterval(cron)}
function Timer(){
    seg++;
    if(seg == 60){
        seg = 0;
        min ++
        if(min == 60){
            min = 0;
            hor ++
        }
    }
    var format = (hor < 10 ? "0" + hor: hor) + ":" + (min < 10 ? "0" + min: min) + ":" + (seg < 10 ? "0" + seg: seg);
    document.getElementById("counter").innerText = format
}
export default function Cronometro(){
    return(
        <div>
            <h1>Cronometro</h1>
            <button onClick={Start}>Começar</button>
            <button onClick={Pause}>Pause</button>
            <button onClick={Sair}>Sair</button>
            <div id="counter">00:00:00</div>
        </div>
        )
    }
