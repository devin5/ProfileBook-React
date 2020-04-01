import React from 'react';
import './App.css';
import DefaultHome from "./components/DefaultHome"
import Test from "./components/Test"
import Post from "./components/Post"


import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
    
       <Route exact path="/">
        <Test />
      </Route>     
     

     <Route path="/defaulthome">
        <DefaultHome />
      </Route>

      <Route path="/post">
        <Post />
      </Route>
    </div>
  );
}

export default App;
