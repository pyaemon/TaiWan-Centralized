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
        <div style={{
          background: "linear-gradient(-60deg,#e6e8eA,#F6F8FA)",
        }}>
          <Switch>
            <Route path="/login" component={Login} exact />
            <Redirect to='/login' from='/' component={Login} exact />
            <PageApp />

          </Switch>
        </div>
      </BrowserRouter>
    </React.Fragment>
  )

}

export default App;

const PageApp = () => {
  return (
      <div>
        <Sidebar />
        <Switch>
            <div className="row">
              <Navbar /> 
              <Route path="/main" component={MainMenuContainer} />
              <Route path="/chiller-plant" component={ChillerPlant} />
            </div>
          
        </Switch>
      </div>
  )
}
