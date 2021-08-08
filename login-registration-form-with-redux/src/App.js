
import React, {useEffect} from 'react'

import "./styles.css";
import {history} from "./components/helpers/history";
import {alertActions} from "./components/actions/alert.action";
import {PrivateRoute} from "./components/";
import {HomePage} from "./components/homepage/HomePage";
import {RegisterPage} from "./components/registerpage/RegisterPage";
import {LoginPage} from "./components/loginpage/LoginPage";

import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";




// https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9

// https://medium.com/@jebasuthan/react-user-registration-and-login-using-redux-81ec739e93d1

// https://www.bezkoder.com/react-hooks-redux-login-registration-example/

// https://medium.com/@ingridf/what-redux-thunk-is-how-to-install-it-and-how-it-works-b67b815d2672



// https://dev.to/alecgrey/controlled-forms-with-front-and-backend-validations-using-react-bootstrap-5a2


// http://michaelsoriano.com/react-bootstrap-form-validation/

// https://medium.com/swlh/validating-react-forms-with-react-hook-form-b30d6b2b111e

// https://upmostly.com/tutorials/form-validation-using-custom-react-hooks


export default function App() {

  const alert = useSelector(state => state.alert)

  const dispatch = useDispatch();

  useEffect(() =>{
    history.listen((location, action) => {

      dispatch(alertActions.clear());

    });
  }, [])


  return (
    <div className="App">
     
     <div className="container">

<div className="col-md-8 offset-md-2">

  {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}


  <Router history={history}>

    <Switch>
      <PrivateRoute exact path="/" component={HomePage}/>

      <Route path="/login" component={LoginPage}/>

      <Route path="/register" component={RegisterPage}/>

      <Redirect from="*" to ="/"/>
    </Switch>

  </Router>

</div>
     </div>
    </div>
  );
}
