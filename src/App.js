import React from 'react'
import './App.css';
import Headliner from './components/Headliner';
// import { Row } from 'react-bootstrap';
import Aboutme from './pages/Aboutme';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


function App() {
  return (
    <Router>
        <Headliner /> 
        <Switch>  
            <Route path="/Aboutme">
      <Aboutme />
      </Route>
        </Switch>
    </Router>
  );
}





export default App;