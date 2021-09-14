import logo from "./logo.svg";
import "./App.css";
import Modal from "./components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "./components/Grid/Grid";
import CheckoutGridEx from "./components/Grid/CheckoutGridEx";
import Navbar from "./components/Navbar";
import GridCard from "./components/GridCard";
import Flex from "./components/Flex/Flex";
import List from "./components/List";
import Toast from "./components/Toast";
import { useEffect } from "react";

// https://inspirnathan.com/posts/46-jsx-autocomplete-with-emmet-in-vscode/
// https://github.com/sanketcodekul/CropData
// https://www.youtube.com/watch?v=rwW6k9zKd7Y 
// https://formvalidation.io/guide/plugins/bootstrap5
// https://www.youtube.com/watch?v=tEQOdFgUXI4 
// https://www.youtube.com/watch?v=jnQ1-XW7KNY 
// https://www.youtube.com/watch?v=mYi2-UZHa6E
// https://www.youtube.com/watch?v=fD6HtqM5mkg
// https://www.codingnepalweb.com/detect-internet-connection-javascript/ 

// https://www.positronx.io/how-to-implement-loading-spinner-button-in-react/

// https://javascript.plainenglish.io/using-geolocation-to-a-locate-a-user-on-google-maps-in-react-redux-4dc33a34bf2e
// https://youtu.be/EFyNUJ_PQbQ

function App() {

  useEffect   (() => {
    if ("geolocation" in navigator) {
      console.log("Available")
    } else {
      console.log("Not Available")
    }

    let geo = navigator.geolocation;

    function success(pos) {
      var crd = pos.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    geo.watchPosition(success);

  })


  return (
    <div className="App" style={{backgroundColor: "green"}}>
      <Modal/>
      <Navbar />
      <Grid />

      <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Link with href
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Button with data-bs-target
</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>

      <Flex/>

      <GridCard/>

      <Toast/>

      <List/>

      {/* <CheckoutGridEx/> */}
    </div>
  );
}

export default App;
