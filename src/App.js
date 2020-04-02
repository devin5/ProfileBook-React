import React from 'react';
import './App.css';
import DefaultHome from "./components/DefaultHome"
import Test from "./components/Test"

import Post from "./components/Post"
import Login from "./components/Login"
import TimeLine from "./components/TimeLine"

import Banner from "./components/header"
import PbFooter from "./components/Footer"



import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      
    
      <Route exact path="/">
        <Test />

        <TimeLine/>
      </Route>     
      <Route exact path="/login">
       <Login/>
      </Route>   

  


      <Route path="/defaulthome">
        <DefaultHome />
      </Route>


      <Route path="/post">
        <Post />
      </Route>

      <Route path="/header">
        <Banner />
      </Route>

      <Route path = "/footer">
        <PbFooter />
      </Route>
      

    </div>
  );
}

export default App;
