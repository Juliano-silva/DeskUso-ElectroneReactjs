import style from './Style.module.css'
function Carregar(){
  var Pesq = document.getElementById("Pesquisar").value
  document.getElementById("Frame").src = Pesq
  console.log(Pesq)
}
export default function Iframe(){
    return(
      <div className={style.Iframe}>
        <input type="text" id="Pesquisar" placeholder='Search' /><button id='Enviar' onClick={Carregar}>Pesquisar</button>
        <iframe src='' id='Frame' frameborder="0" ></iframe>
      </div>
      )
  }
