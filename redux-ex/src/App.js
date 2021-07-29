import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Balance from './components/Balance';
import BankOperation from './components/BankOperation';
import AccountType from './components/AccountType';

// https://blog.logrocket.com/using-recompose-to-write-clean-higher-order-components-3019a6daf44c/
// https://medium.com/@mrewusi/reusing-logic-in-your-react-apps-with-higher-order-components-70cdb8e7230a
// https://medium.com/@mjewell/maximizing-higher-order-component-reusability-289950410b83
// https://material-ui.com/getting-started/installation/
// https://ant.design/
// https://blog.logrocket.com/the-best-styling-in-react-tutorial-youve-ever-seen-676f1284b945/

function App() {
  return (
    <div className="App">
      <Login/>
      <Balance/>
      <BankOperation/>
      <AccountType/>
    </div>
  );
}

export default App;
