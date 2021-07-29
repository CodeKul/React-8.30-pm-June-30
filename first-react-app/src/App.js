import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from "./components/SecondComponent"
import ThirdComponent from './components/ThirdComponent';
import FourthComponent from './components/FourthComponent';
import StateExample from './components/StateExample';
import PropsExample from './components/PropsExample';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">

{/* <FirstComponent/>

<SecondComponent/>

<ThirdComponent/>

<FourthComponent/> */}

{/* <StateExample/>

<StateExample/> */}

<PropsExample />

<PropsExample name = "Sanket"/>

<PropsExample name ="Swati"/>

<PropsExample name="Milind"/>




<Router>
  <Link to="/" component={FirstComponent}>First Component</Link>

  <Link to="/second" component={SecondComponent}>Second Component</Link>

  <Link to="/third" component={ThirdComponent}>Third Component</Link>

  <Link to="/fourth" component={FourthComponent}>Forth Component</Link>



  <Switch>
  <Route path="/third">
    <ThirdComponent/>

  </Route>


  <Route path="/fourth">
    <FourthComponent/>
  </Route>
</Switch>



</Router>





          </div>
  );
}

export default App;
