import logo from './logo.svg';
import './App.css';
import SampleInput from './component/SampleInput';
import SignUpForm from './component/SignUpForm';


// https://dev.to/gathoni/firebase-google-sign-in-with-react-3741
// https://blog.prototypr.io/how-to-build-google-login-into-a-react-app-and-node-express-api-821d049ee670
// https://blog.logrocket.com/user-authentication-firebase-react-apps/
// https://web.dev/sign-up-form-best-practices/
// https://www.abtasty.com/blog/best-practices-sign-up-forms/

function App() {
  return (
    <div className="App">
     {/* <SampleInput/> */}

     <SignUpForm/>
    </div>
  );
}

export default App;
