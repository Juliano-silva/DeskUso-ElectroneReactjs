import { geradorNome } from 'gerador-nome'
var Nome = geradorNome()
const SobreNome = [
    "Almeida", "Azevedo", "Braga", "Barros", "Brasil", "Bahiense", "Campos", "Cardoso", "Correia", "Castro","Silva","Costa", "Fontes" , "Guimarães" , "Magalhães" , "Macedo", "Matos", "Pedreira", "Queirós", "Ribeiro", "Rocha","Siqueira", "Serra", "Souza", "Teixeira","Valle", "Junior"
]
const PalavrasList =[
    "coisa","casa","tempo","ano","dia","vez","homem","mulher","senhor","senhora","moço","moça","bom","grande","melhor","pior","certo","último","próprio","foda","cu","pinto",
    "buceta","ser","ir","estar","ter","haver","fazer","dar","ficar","poder","ver",
    "não","mais","muito","já","quando","mesmo","depois","ainda","um","dois","primeiro","cem","mil","a","o","um","uma","de","em","para","por","com","até","e","mas","ou","também","se","assim","como","porque","que","eu","você","ele","este","esse","isso","sua","Ai!","Ah!","Au!","Ui!","Hum!","A Lista de Schindler","2001: Uma Odisséia no Espaço","E.T. - O Extraterrestre","O Poderoso Chefão: Parte II","Casablanca","Pulp Fiction - Tempo de Violência","Um sonho de Liberdade","Cidadão Kane","O Mágico de Oz","O Poderoso Chefão"
]
var Sobrenome = SobreNome[Math.floor(Math.random() * SobreNome.length)]
var Sobrenome1 = SobreNome[Math.floor(Math.random() * SobreNome.length)]
function Frase(){
    var Frase1 = PalavrasList[Math.floor(Math.random() * PalavrasList.length)]
    var Frase2 = PalavrasList[Math.floor(Math.random() * PalavrasList.length)]
    var Frase3 = PalavrasList[Math.floor(Math.random() * PalavrasList.length)]
    var Frase4 = PalavrasList[Math.floor(Math.random() * PalavrasList.length)]
    var Frase5 = PalavrasList[Math.floor(Math.random() * PalavrasList.length)]
    var Frase = document.getElementById("Frase")
    Frase.innerHTML = Frase1 + " " + Frase2 + " " + Nome  + " " + Frase3 + " " + Frase4 + " " + Frase5
}
export default function Gerador_Nome(){
    return(
        <div>
            <h1>Gerador de Nome</h1>
            <h1>{Nome} {Sobrenome} de {Sobrenome1}</h1>
            <button onClick={Frase}>Gerar Frase</button>
            <h2 id='Frase'></h2>
        </div>
        )
}
