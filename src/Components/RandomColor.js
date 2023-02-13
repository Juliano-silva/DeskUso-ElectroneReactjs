
function random(tamanho){
  var Primeiro = "#";
  var caracter = "0123456789"
  for(var i=0;i <= tamanho ; i++){
    Primeiro += caracter.charAt(Math.floor(Math.random() * caracter.length))
  }
  return Primeiro
}
function Cor(){
  document.getElementById("Color").style.background = random(5)
  document.getElementById("Color").innerText = random(5)
}
function Random(){
  document.getElementById("Gradient").style.background =(`linear-gradient(${random(5)},${random(5)},${random(5)}`)
  document.getElementById("Gradient").innerText = `${random(5)},${random(5)},${random(5)}`
}
export default function RandomColor(){
    return(
      <div>
        <h1>RandomColor</h1>
        <div id="Color"></div>
        <div id="Gradient"></div>
        <button onClick={Cor}>Random Color</button>
        <button onClick={Random}>Random Gradient</button>
      </div>
      )
  }
