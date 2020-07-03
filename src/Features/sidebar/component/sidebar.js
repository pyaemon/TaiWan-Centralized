import React, { Fragment, useState, Component } from 'react';
import '../../../App.css';
import Icon from '../../../Config/images/i2.JPG';
import Icon1 from '../../../Config/images/i3.PNG';
import solar_power_ui_icon from '../../../Config/images/solar power ui_icon.png';
import street_light_ui_icon from '../../../Config/images/street light ui_icon.png';
import new_iotcomui_ui_icon from '../../../Config/images/new iotcomui ui_icon.png';
import environmental_monitor_ui_icon from '../../../Config/images/environmental monitor ui_icon.png';
import Chiller_Plant_Icon from '../../../Config/images/chiller plant ui_icon.png';
import Toggle from '../../../tools/toggle.js';
import MenuSidebar from '../component/menusidebar.js';

const Sidebar = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = window.location.pathname
  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true)
    } else {
      setSidebarOpen(false)
    }
  }
  let sidebar
  if (sidebarOpen) {
    sidebar = menusidebar();
  } else {
    sidebar = subsidebar();
  }

  if(pathname !== '/main') return null
  return (
    <Fragment>
      {
        pathname === '/main' ?
          <div className='position-relative position-sticky float-left' style={{ width: '60px', height: '100vh',  zIndex: 10000, top: 0, left: 0, overflowX: 'hidden', backgroundColor: '#0076b7' }}>
            <div className="py-3 row justify-content-center">
              <img src={Icon} alt="icon" style={{ height: '40px', width: '40px' }} />
            </div>
          </div>
          :
          <Fragment>
          { sidebar }
          </Fragment>
      }


    </Fragment>
  )

  function subsidebar() {
    return (
      <nav id="sidebar" style={{ backgroundColor: "#00d5b0", minWidth: 300, maxWidth: 300, fontSize: 15, fontWeight: "bold" }} className="active d-inline-block">
        <div className="p-3">
          {/* <div className="container-fluid border-bottom">
                  <Toggle click={openHandler}></Toggle>
            </div> */}
          <div className="row p-3 ">
            <div className="col-3">
              <a href="#" className="img logo rounded-circle mb-5"> <img src={Chiller_Plant_Icon} style={{ width: 50, height: 50 }} /> </a>
            </div>
            <div className="col-7 pt-1"><strong className="font-weight-bolder text-dark">Acbel Chillerplant UI</strong></div>
          </div>
          <div className="d-flex justify-content-end"><Toggle click={openHandler}>asd</Toggle></div>
          <ul className="list-unstyled mb-5 mt-3 p-2">
            <li className="active border-bottom pb-2 pt-2">
              <a className="text-white mt-2 text-decoration-none">Realtime</a>
            </li>
            <ul className="list-unstyled ml-3">
              <li className="pt-3">
                <a href="#" className="text-white text-decoration-none">Listview</a>
              </li>
              <li className="pt-2">
                <a href="#mapViewMenu" data-toggle="collapse" aria-expanded="false" className="text-decoration-none dropdown-toggle text-white text-left  dropdown-menu-right">Mapview</a>
                <ul className="collapse list-unstyled ml-3" id="mapViewMenu">
                  <li className="pt-3">
                    <a href="#" className="text-white text-decoration-none">Chilleroom</a>
                  </li>
                  <li className="pt-2">
                    <a href="#" className="text-white text-decoration-none">Cooling tower</a>
                  </li>
                  <li className="pt-2">
                    <a href="#" className="text-white text-decoration-none">Zonepump</a>
                  </li>
                  <li className="pt-2">
                    <a href="#" className="text-white text-decoration-none">Chilleroom</a>
                  </li>
                  <li className="pt-2">
                    <a href="#" className="text-white text-decoration-none">Cooling tower</a>
                  </li>
                  <li className="pt-2">
                    <a href="#" className="text-white text-decoration-none">Zonepump</a>
                  </li>
                </ul>
              </li>
            </ul>
            <li className="border-bottom pb-2 pt-2">
              <a href="#" className="text-white text-decoration-none">Analysis</a>
            </li>
            <ul className="list-unstyled ml-3">
              <li className="pt-2">
                <a href="#" className="text-white text-decoration-none">Data trend</a>
              </li>
              <li className="pt-2">
                <a href="#" className="text-white text-decoration-none">Chiller performance</a>
              </li>
            </ul>
            <li className="border-bottom pb-2 pt-2">
              <a href="#" className="text-white text-decoration-none">Report</a>
            </li>
            <ul className="list-unstyled ml-3">
              <li className="pt-2">
                <a href="#" className="text-white text-decoration-none">Data quality</a>
              </li>
              <li className="pt-2">
                <a href="#" className="text-white text-decoration-none">Daily activity</a>
              </li>
              <li className="pt-2">
                <a href="#" className="text-white text-decoration-none">Weekly performance</a>
              </li>
            </ul>
          </ul>

        </div>
      </nav>
    )
  }

  function menusidebar() {
    return (
      <nav id="sidebar" style={{ backgroundColor: "#00d5b0", minWidth: 70, maxWidth: 70 }} className="animated fadeIn active d-inline-block">
        <div className="p-4 pt-1">
          <div className="row justify-content-center" >
            <img src={Icon1} alt="icon" style={{ height: '50px', width: '50px' }} onClick={ console.log(props)}/>
          </div>
        </div>
        {/* <div class="d-flex justify-content-center"><Toggle click={openHandler}></Toggle></div>  */}
        <div className="p-1 mt-5">
          {sidebarOpen ?

            <div className="row justify-content-center mt-5">
              <Toggle click={openHandler} sidebarOpen={sidebarOpen}></Toggle>
            </div>
            :
            null
          }

          <div className="row justify-content-center mt-3">
            <img src={solar_power_ui_icon} alt="icon" style={{ height: '50px', width: '50px' }} />
          </div>
          <div className="row justify-content-center mt-3">
            <img src={street_light_ui_icon} alt="icon" style={{ height: '50px', width: '50px' }} />
          </div>
          <div className="row justify-content-center mt-3">
            <img src={new_iotcomui_ui_icon} alt="icon" style={{ height: '50px', width: '50px' }} />
          </div>
          <div className="row justify-content-center mt-3">
            <img src={environmental_monitor_ui_icon} alt="icon" style={{ height: '50px', width: '50px' }} />
          </div>
        </div>
      </nav>
    )
  }
 
}



export default Sidebar;

