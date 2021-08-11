import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Home from './Home';
import About from './components/About';
import Blog from './components/Blog';
import Navbar from './components/Navbar';
import Game from './components/Game';
import GameResult from './components/GameResult';


// https://www.digitalocean.com/community/tutorials/react-react-helmet
// https://blog.logrocket.com/search-optimized-spas-react-helmet/

// https://www.taniarascia.com/redux-react-guide/
function App() {
  return (
    <div className="App">

      <Router>

    <Navbar/>


    <Switch>


   

        <Route path="/" exact>
          <Home/>
        </Route>


        <Route path="/about.html" component={About}/>

        <Route path="/blog" component={Blog}/>


        <Route path="/game" component={Game}/>

        <Route path="/result" component={GameResult}/>




        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
