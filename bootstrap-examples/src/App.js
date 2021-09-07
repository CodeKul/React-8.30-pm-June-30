import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from './components/Grid/Grid';
import CheckoutGridEx from './components/Grid/CheckoutGridEx';
import Navbar from './components/Navbar';




// https://inspirnathan.com/posts/46-jsx-autocomplete-with-emmet-in-vscode/
// https://github.com/sanketcodekul/CropData
function App() {
  return (
    <div className="App">
      {/* <Modal/> */}
<Navbar/>
      <Grid/>

      {/* <CheckoutGridEx/> */}
    </div>
  );
}

export default App;
