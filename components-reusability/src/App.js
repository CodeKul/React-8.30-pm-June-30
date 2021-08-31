import logo from './logo.svg';
import './App.css';
import Card from './components/CardComponent';
import course3 from "./components/course3.png"
import { useState } from 'react';
import List from './components/CardComponent';
import HOCExample from './HOCExample';

// https://dev.to/jexperton/how-to-fix-the-react-memory-leak-warning-d4i
// https://epicreact.dev/memoization-and-react/
// https://dmitripavlutin.com/use-react-memo-wisely/

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

const list = ['Home', 'Posts', 'About', 'More', 'Contact', 'FAQ']

const limit = 3;


const [collapsed, setCollapsed] = useState(true);

function toggle () {
  setCollapsed((prevValue) => !prevValue)
}

function renderCollapser({collapsed, toggle}) {
  return <i onClick={toggle} class="fas fa-chevron-right"></i>
}


function renderExpander({collapsed, toggle}) {
  return <i onClick={toggle} class="fas fa-chevron-left"></i>
}

function renderListItem({collapsed, toggle, members}) {

  function onClick() {
    window.alert(`Clickd ${members}`)
  }

  return <li onClick={onClick} className="custom-li">
{members}
  </li>
}

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


{/* <div className="listContainer">
     <Card label="React" sublabel="corporate"  members={react}/>
     </div>

<div className="listContainer">
     <Card label="Angular" sublabel="freshers" members={angular}/>
     </div>
    </div> */}

    <div className="navbar">
      <div className="listContainer" style={{display: "flex"}}>
        <List 
        collapsed={collapsed}
        toggle={toggle}
        header={null}
        items={list}
        limit={limit}
        renderCollapser={renderCollapser}
        renderExpander={renderExpander}
        renderListItem={renderListItem}
        
        >

        </List>
      </div>

      <HOCExample/>
    </div>

    </div>



  );
}

export default App;
