import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "./components/Grid/Grid";
import CheckoutGridEx from "./components/Grid/CheckoutGridEx";
import Navbar from "./components/Navbar";
import GridCard from "./components/GridCard";
import Flex from "./components/Flex/Flex";

// https://inspirnathan.com/posts/46-jsx-autocomplete-with-emmet-in-vscode/
// https://github.com/sanketcodekul/CropData
// https://www.youtube.com/watch?v=rwW6k9zKd7Y 
// https://formvalidation.io/guide/plugins/bootstrap5

function App() {
  return (
    <div className="App">
      <Modal/>
      <Navbar />
      <Grid />

      <Flex/>

      <GridCard/>

      {/* <CheckoutGridEx/> */}
    </div>
  );
}

export default App;
