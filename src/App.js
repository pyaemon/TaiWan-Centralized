

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Navbar from './Features/Nav'
import MainMenuContainer from './Pages/MainPage/container/maincontainer';
import Login from './Pages/Login/index'
import ChillerPlant from './Pages/ChillerPlant/index'
import Sidebar from './Features/Sidebar';


const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Redirect to='/login' from='/' component={Login} exact />
          <PageApp />

        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )

}

export default App;

const PageApp = (props) => {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidebar />
      <Switch>
        <div className="ml-lg-4 ml-sm-0 mt-4" style={{ width: '100%', padding: 0, minHeight: '100vh' }}>
          <Navbar />
          <Route path="/main" component={MainMenuContainer} className="mx-2 mt-4" />
          <Route path="/chiller-plant" component={ChillerPlant} className="mx-2 mt-4" />
        </div>
      </Switch>
    </div>
  )
}


