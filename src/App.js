import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Api from './Components/Api'
import Header from './Components/Header'
import Iframe from './Components/IframeGoogle'
import Mural from './Components/Mural'
import Random from './Components/Random'
import RandomColor from './Components/RandomColor'
import Tempo from './Components/Previsão'
import Cronometro from './Components/Cronometro'
import Timer from './Components/Timer'
import ApiInternaP from './Components/ApiInternaP'
import Animation from './Components/Animation'
import Digipédia from './Components/Digipédia'
import Email from './Components/Email'
import GeradorNome from './Components/GeradorNome'
import ImageDownload from './Components/ImageDownload'
import Piano from './Components/Piano'
import Portfolio from './Components/Portfolio'
import QRcode from './Components/QRcode'
import ReverseLetra from './Components/ReverseLetra'
export default function App(){
  return(
    <Router>
      <div id='Loader'></div>
      <Header/>
      <Switch>
        <div id='Corpo'>
        <Route exact path="/"><Api/></Route>
        <Route path="/Iframe"><Iframe/></Route>
        <Route path="/Mural"><Mural/></Route>
        <Route path="/ApiInternaP"><ApiInternaP/></Route>
        <Route path="/Random"><Random/></Route>
        <Route path="/RandomColor"><RandomColor/></Route>
        <Route path="/Tempo"><Tempo/></Route>
        <Route path="/Cronometro"><Cronometro/></Route>
        <Route path="/Timer"><Timer/></Route>
        <Route path="/Piano"><Piano/></Route>
        <Route path="/GeradorNome"><GeradorNome/></Route>
        <Route path="/Animation"><Animation/></Route>
        <Route path="/QRcode"><QRcode/></Route>
        <Route path="/Email"><Email/></Route>
        <Route path="/Reverse"><ReverseLetra/></Route>
        <Route path="/Digipedia"><Digipédia/></Route>
        <Route path="/ImageDownload"><ImageDownload/></Route>
        <Route path="/Portfolio"><Portfolio/></Route>
        </div>
      </Switch>
    </Router>
    )
}
