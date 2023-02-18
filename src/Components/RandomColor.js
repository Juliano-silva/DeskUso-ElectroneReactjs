import style from './Style.module.css'
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
  document.getElementById("H1").innerText = random(5)
}
function Random(){
  document.getElementById("Gradient").style.background =(`linear-gradient(${random(5)},${random(5)},${random(5)}`)
  document.getElementById("H12").innerText = `${random(5)},${random(5)},${random(5)}`
}
export default function RandomColor(){
    return(
      <div className={style.Container}>
        <button className={style.ColorButton} onClick={Cor}>Random Color</button>
        <div className={style.Color} id="Color">
          <h1 id='H1'></h1>
        </div>
        <button className={style.ColorButton} onClick={Random}>Random Gradient</button>
        <div className={style.Color} id="Gradient">
        <h1 id='H12'></h1>
        </div>
      </div>
      )
  }
