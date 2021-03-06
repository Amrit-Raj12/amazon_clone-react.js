import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
const [{}, dispatch] = useStateValue();
  useEffect(() =>{

    //will only run once when the app component loads..
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if (authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        // the user just logged in / the user was logged in
      } else {
        dispatch({
          type: 'SET_USER',
          user:null
        })
        // the user is logged out
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/">
        <Header />
        <Home />

        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
