import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
//import Navbar from './Features/Nav'
import MainMenuContainer from './Pages/MainPage/container/maincontainer';
import Login from './Pages/Login/index'
import ChillerPlant from './Pages/ChillerPlant/index'
import Sidebar from './Features/Sidebar';
import Header from './Features/Nav';
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
        <div className="m-lg-4 m-sm-0 " style={{ width: '100%', padding: 0, minHeight: '100vh' }}>
          <Header/>
          <Route path="/main" component={MainMenuContainer} className="mx-2 mt-4" />
          <Route path="/chiller-plant" component={ChillerPlant} className="mx-2 mt-4" />
          <Route path="/chillerRoom" component={ChillerPlant} className="mx-2 mt-4" />
          <Route path="/coolingTower" component={ChillerPlant} className="mx-2 mt-4" />
          <Route path="/zonePump" component={ChillerPlant} className="mx-2 mt-4" />
          <Route path="/1stFloor" component={ChillerPlant} className="mx-2 mt-4" />
          <Route path="/1stFloor-SMT" component={ChillerPlant} className="mx-2 mt-4" />
        </div>
      </Switch>
    </div>
  )
}


