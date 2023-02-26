import { geradorNome } from 'gerador-nome'
import style from './Style.module.css'
const SobreNome = [
    "Almeida", "Azevedo", "Braga", "Barros", "Brasil", "Bahiense", "Campos", "Cardoso", "Correia", "Castro","Silva","Costa", "Fontes" , "Guimarães" , "Magalhães" , "Macedo", "Matos", "Pedreira", "Queirós", "Ribeiro", "Rocha","Siqueira", "Serra", "Souza", "Teixeira","Valle", "Junior"
]
const PalavrasList =[
    "coisa","casa","tempo","ano","dia","vez","homem","mulher","senhor","senhora","moço","moça","bom","grande","melhor","pior","certo","último","próprio","foda","cu","pinto",
    "buceta","ser","ir","estar","ter","haver","fazer","dar","ficar","poder","ver",
    "não","mais","muito","já","quando","mesmo","depois","ainda","um","dois","primeiro","cem","mil","a","o","um","uma","de","em","para","por","com","até","e","mas","ou","também","se","assim","como","porque","que","eu","você","ele","este","esse","isso","sua","Ai!","Ah!","Au!","Ui!","Hum!","A Lista de Schindler","2001: Uma Odisséia no Espaço","E.T. - O Extraterrestre","O Poderoso Chefão: Parte II","Casablanca","Pulp Fiction - Tempo de Violência","Um sonho de Liberdade","Cidadão Kane","O Mágico de Oz","O Poderoso Chefão"
]
function Frase(){
    var Nome = geradorNome()
    var Frase1 = PalavrasList[Math.floor(Math.random() * PalavrasList.length)]
    var Frase2 = PalavrasList[Math.floor(Math.random() * PalavrasList.length)]
    var Frase3 = PalavrasList[Math.floor(Math.random() * PalavrasList.length)]
    var Frase4 = PalavrasList[Math.floor(Math.random() * PalavrasList.length)]
    var Frase5 = PalavrasList[Math.floor(Math.random() * PalavrasList.length)]
    var Frase = document.getElementById("Frase")
    Frase.innerHTML = Frase1 + " " + Frase2 + " " + Nome  + " " + Frase3 + " " + Frase4 + " " + Frase5
    var Sobrenomes = document.getElementById("Sobrenome")
    var Sobrenomes1 = document.getElementById("Sobrenome1")
    var Nomes = document.getElementById("Nome")
    Nomes.innerHTML = Nome
    Sobrenomes.innerHTML = SobreNome[Math.floor(Math.random() * SobreNome.length)] + " de "
    Sobrenomes1.innerHTML = SobreNome[Math.floor(Math.random() * SobreNome.length)]
}
export default function Gerador_Nome(){
    return(
        <div className={style.GeradorNome}>
            <h1>Gerador de Nomes e Frases</h1>
            <button onClick={Frase}>Gerar Frase</button>
            <h2><span id='Nome'></span> <span id='Sobrenome'></span> <span id='Sobrenome1'></span></h2>
            <h4 id='Frase'></h4>
        </div>
        )
}
