import logo from './logo.svg';
import './App.css';
import Card from './components/CardComponent';
import course3 from "./components/course3.png"

function App() {
const react = [
  "Sanket",
  "Swati",
  "Shubham",
  "Vaishnavi",
  "Swapnil"
]

const angular = [
  "Rajendra",
  "Milind",
  "Ajinkya",
  "Akshay",
  "Dhanashree"
]


  return (
    <div className="root">
     {/* <Card>
    
            <img className="card-img-top" src={course3} alt="" />

            <div className="card-body">
                <p>Members</p>
                <ul>
                    <li>Sanket</li>
                    <li>Swati</li>
                    <li>Vaishnavi</li>
                    <li>Shubham</li>
                </ul>
            </div>
    
     </Card> */}


<div className="listContainer">
     <Card label="React" sublabel="corporate"  members={react}/>
     </div>

<div className="listContainer">
     <Card label="Angular" sublabel="freshers" members={angular}/>
     </div>
    </div>
  );
}

export default App;
