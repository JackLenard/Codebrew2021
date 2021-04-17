import './App.css';
import Navigation from  './Components/Navigation';
import Class from './Components/Class';
import { Route, Switch } from 'react-router-dom';
import MathsChat from './Components/MathsChat';
import EnglishChat from './Components/EnglishChat';
import ScienceChat from './Components/ScienceChat';
import ArtsChat from './Components/ArtsChat';
import Login from './Components/Login'; 
/*import Conference from './Components/Conference';
import BossRoom from './Components/BossRoom';*/
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <Navigation  />
       <Switch>
         <Route path="/" exact>
           <Login /> 
         </Route>
         <Route path = "/class" exact>
             <Class />
        </Route> 
         <Route path="/MathsChat" exact>
           <MathsChat />
         </Route>
         <Route path="/ArtsChat" exact>
           <ArtsChat />
         </Route>
         <Route path="/ScienceChat" exact>
           <ScienceChat />
         </Route>
         <Route path="/EnglishChat" exact>
           <EnglishChat />
         </Route>
       </Switch>
   </div>
  );
}

export default App;
