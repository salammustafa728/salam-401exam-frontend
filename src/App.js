import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Fav from './Components/Fav';
import Main from './Components/Main';
class App extends React.Component {

  render() {
    return(
      <>
      <Header/>
        <Router>
          <Switch>
            <Route exact path="/">  <Main/> </Route>
            <Route exact path="/favorite">  <Fav/>  </Route>
          </Switch>
        </Router>
        <Footer/>
      </>
    )
  }
}

export default App;

