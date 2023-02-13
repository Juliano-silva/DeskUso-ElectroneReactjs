import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Api from './Components/Api'
import ApiInterna from './Components/ApiInterna'
import Header from './Components/Header'
import Animation from './Components/Animation'
import Iframe from './Components/IframeGoogle'
import Mural from './Components/Mural'
import Random from './Components/Random'
import RandomColor from './Components/RandomColor'
import Roleta from './Components/Roleta'
import Tempo from './Components/Previsão'
import Instalar from './Components/InstalarARQ'
import Cronometro from './Components/Cronometro'
import Timer from './Components/Timer'
export default function App(){
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/"><Api/></Route>
        <Route path="/ApiInterna"><ApiInterna/></Route>
        <Route path="/Animation"><Animation/></Route>
        <Route path="/Iframe"><Iframe/></Route>
        <Route path="/Mural"><Mural/></Route>
        <Route path="/Random"><Random/></Route>
        <Route path="/RandomColor"><RandomColor/></Route>
        <Route path="/Roleta"><Roleta/></Route>
        <Route path="/Instalar"><Instalar/></Route>
        <Route path="/Tempo"><Tempo/></Route>
        <Route path="/Cronometro"><Cronometro/></Route>
        <Route path="/Timer"><Timer/></Route>
      </Switch>
    </Router>
    )
}
