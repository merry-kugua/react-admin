import React from "react";
import './App.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import About from "./views/About";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
       <BrowserRouter>
         <Switch>
             <Route exact component={Home} path="/"></Route>
             <Route component={About} path="/about"></Route>
         </Switch>
       </BrowserRouter>
    );
  }
}

export default App;
