import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import Dashboard from '../components/dashboard/Dashboard';
import CreateJam from '../components/jams/CreateJam';
import JamDetails from '../components/jams/JamDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/index' component={Dashboard} />
          <Route path='/create' component={CreateJam} />
          <Route path='/jams/:id' component={JamDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
