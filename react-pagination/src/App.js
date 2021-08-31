import logo from './logo.svg';
import './App.css';
import Pagination from './components/Pagination';
import PaginationEx from './components/PaginationEx';

// https://www.bezkoder.com/react-pagination-material-ui/
// https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react
// css modules 
// css in js (styled components, material ui)
// https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945/

// https://www.youtube.com/watch?v=mYi2-UZHa6E&list=LL&index=53
// https://www.youtube.com/watch?v=1lG-ZLswWKw&list=LL&index=55

function App() {
  return (
    <div className="App">
      {/* <Pagination/> */}
      <PaginationEx
      />
    </div>
  );
}

export default App;
