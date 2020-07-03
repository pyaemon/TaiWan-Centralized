

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Navbar from './Features/Nav'
import MainMenuContainer from './Pages/MainPage/container/maincontainer';
import Login from './Pages/Login/index'
// import ChillerPlant from './Pages/ChillerPlant/index'
import Sidebar from './Features/sidebar/component/sidebar.js';


const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <div className=""> */}
          <Switch>
            <Route path="/login" component={Login} exact />
            <Redirect to='/login' from='/' component={Login} exact />
            <PageApp />

          </Switch>
        {/* </div> */}
      </BrowserRouter>
    </React.Fragment>
  )

}

export default App;

const PageApp = (props) => {
  return (
      <div>
        <Sidebar />
        <Switch>
            <div>
              <Navbar /> 
              <Route path="/main" component={MainMenuContainer} />
              {/* <Route path="/chiller-plant" component={ChillerPlant} /> */}
           </div>
          
        </Switch>
      </div>
  )
}


