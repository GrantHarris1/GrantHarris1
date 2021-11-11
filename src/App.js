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
import Projects from './pages/Projects';
import Home from "./pages/Home"


function App() {
  return (
    <Router>
        <Headliner /> 
        <Switch>  
            <Route path="/aboutme">
                <Aboutme />
            </Route>
            <Route path='/projects'>
                <Projects />
            </Route>
            <Route>
                <Home />
            </Route>
        </Switch>
    </Router>

  );
}





export default App;