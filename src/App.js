import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Book from "./Components/Book";
import './App.css';
import Nav from "./Components/Nav";
import {BrowserRouter as Router,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route  exact path="/" component={Home}/>
        <Route  path="/About" component={About}/>
        <Route  path="/book" component={Book}/>
      </Router>
     
      
    </div>
  );
}

export default App;
