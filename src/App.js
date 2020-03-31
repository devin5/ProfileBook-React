import React from 'react';
import './App.css';
import DefaultHome from "./components/DefaultHome"
import Test from "./components/Test"

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
       <Route exact path="/">
        <Test />
      </Route>

     <Route path="/defaulthome">
        <DefaultHome />
      </Route>
    </div>
  );
}

export default App;
