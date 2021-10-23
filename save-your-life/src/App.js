import './App.css';
import { Button } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React, { useEffect, lazy, Suspense } from 'react';

const Home = lazy(() => import('./components/Dashboard/Dashboard'));
const Login = lazy(() => import('./components/User/Login'));
const Layout = lazy(() => import('./Layout'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Suspense fallback={<div />}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route component={Layout} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
