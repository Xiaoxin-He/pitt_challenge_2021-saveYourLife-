import './App.css';
import { Button } from '@mui/material';
import Navbar from "./components/Navbar/Navbar";
import {Switch, Route,BrowserRouter} from "react-router-dom";
import React, {useEffect, lazy, Suspense} from "react";

const Home = lazy( () => import("./components/Dashboard/Dashboard"));
const Login = lazy( () => import("./components/User/Login"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Suspense fallback={<div />}>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
          </Suspense>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
