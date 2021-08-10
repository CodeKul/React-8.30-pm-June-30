import logo from './logo.svg';
import './App.css';
import Game from './components/Game';

import {BrowserRouter as Router,
Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">

<Router>


  <Switch>
    <Route path="/game"  component={Game}/>
  </Switch>
</Router>

    </div>
  );
}

export default App;
