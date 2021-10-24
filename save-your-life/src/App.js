import './App.css';
import { Button } from '@mui/material';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React, { useEffect, lazy, Suspense } from 'react';
const Login = lazy(() => import('./components/User/Login'));
const Layout = lazy(() => import('./Layout'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <Switch>
            <Route path={"/login", "/"} exact component={Login} />
            <Route component={Layout} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
