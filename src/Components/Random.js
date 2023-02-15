import Dado1 from '../Arquivos/inverted-dice-1.png'
import Dado2 from '../Arquivos/inverted-dice-2.png'
import Dado3 from '../Arquivos/inverted-dice-3.png'
import Dado4 from '../Arquivos/inverted-dice-4.png'
import Dado5 from '../Arquivos/inverted-dice-5.png'
import Dado6 from '../Arquivos/inverted-dice-6.png'
function random(tamanho){
  var Primeiro = "";
  var caracter = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!)_@#$%¨&abcdefghijklmnopqrstuvwxyz|"
  for(var i=0;i <= tamanho ; i++){
    Primeiro += caracter.charAt(Math.floor(Math.random() * caracter.length))
  }
  return Primeiro
}
function Gerar(){
  var Input = document.getElementById("InputNu").value
  document.getElementById("Senha").innerText = random(Input)
}
function Dados(){
  const DadosR = Math.floor(Math.random() * 7)
  if(DadosR == "1"){document.getElementById("Dado").src = Dado1}
  else if (DadosR == "2"){document.getElementById("Dado").src = Dado2}
  else if (DadosR == "3"){document.getElementById("Dado").src = Dado3}
  else if (DadosR == "4"){document.getElementById("Dado").src = Dado4}
  else if (DadosR == "5"){document.getElementById("Dado").src = Dado5}
  else if (DadosR == "6"){document.getElementById("Dado").src = Dado6}
}
export default function Random(){
    return(
      <div>
        <h1>Random</h1>
        <input type="number" name="" id="InputNu" max="600"/>
        <h1 id="Senha">
        </h1>
        <button onClick={Dados}>Jogar dados</button>
        <button onClick={Gerar}>Gerar</button>
        <div id="Dados">
          <img id="Dado" alt="" />
        </div>
      </div>
      )
  }
