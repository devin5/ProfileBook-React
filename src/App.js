import React from "react";
import "./App.css";
import DefaultHome from "./components/DefaultHome";
import Test from "./components/Test";
import ProtectedRoute from "./utils/ProtectedRoute";

import Post from "./components/Post";
import Login from "./components/Login";
import TimeLine from "./components/TimeLine";
import Profile from "./components/Profile";

import Banner from "./components/header";
import PbFooter from "./components/Footer";
import RegFooter from "./components/FooterReg";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ProtectedRoute exact path="/test">
        <Banner />
        <Test />
        <RegFooter />
      </ProtectedRoute>
      
      <ProtectedRoute path="/profilebook">
        <Banner />
      </ProtectedRoute>

      <Route exact path="/">
        <DefaultHome />
        <RegFooter />
      </Route>
      <div className="contain">
        <ProtectedRoute exact path="/profilebook/timeline">
          <TimeLine />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profilebook/profile">
          <Profile />
        </ProtectedRoute>
      </div>

      <ProtectedRoute path="/profilebook">
        <PbFooter />
      </ProtectedRoute>
    </div>
  );
}

export default App;
