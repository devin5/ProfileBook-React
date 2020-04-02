import React from "react";
import "./App.css";
import DefaultHome from "./components/DefaultHome";
import Test from "./components/Test";
import ProtectedRoute from "./utils/ProtectedRoute";

import Post from "./components/Post";
import Login from "./components/Login";
import TimeLine from "./components/TimeLine";

import Banner from "./components/header";
import PbFooter from "./components/Footer";
import RegFooter from "./components/FooterReg";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ProtectedRoute path="/profilebook">
        <Banner />
      </ProtectedRoute>

      <Route exact path="/">
        <DefaultHome />
        <RegFooter />
      </Route>

      <ProtectedRoute exact path="/profilebook/timeline">
        <TimeLine />
      </ProtectedRoute>

      <ProtectedRoute exact path="/profilebook/profile">
        <Test />
      </ProtectedRoute>

      <ProtectedRoute path="/profilebook">
        <PbFooter />
      </ProtectedRoute>
    </div>
  );
}

export default App;
