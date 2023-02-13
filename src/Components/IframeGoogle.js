import style from './Style.module.css'
function Carregar(){
  var Pesq = document.getElementById("Pesquisar").value
  document.getElementById("Frame").src = Pesq
  console.log(Pesq)
}
export default function Iframe(){
    return(
      <div className={style.Iframe}>
        <input type="text" id="Pesquisar"/>
        <iframe src='' id='Frame' frameborder="0" ></iframe>
        <button id='Enviar' onClick={Carregar}>Carregar</button>
      </div>
      )
  }
