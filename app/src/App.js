import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return(
      <>
        <Router>
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/"></Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;

