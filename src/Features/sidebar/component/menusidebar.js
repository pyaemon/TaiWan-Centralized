import React from 'react';
import Chiller_Plant_Icon from '../../../Config/images/chiller plant ui_icon.png';
import Icon from '../../../Config/images/i2.JPG';
import solar_power_ui_icon from '../../../Config/images/solar power ui_icon.png';
import street_light_ui_icon from '../../../Config/images/street light ui_icon.png';
import new_iotcomui_ui_icon from '../../../Config/images/new iotcomui ui_icon.png';
import environmental_monitor_ui_icon from '../../../Config/images/environmental monitor ui_icon.png';


const MenuSidebar = (props) =>{
  return(
    <nav id="sidebar"  style={{ backgroundColor: "#00d5b0",minWidth: 70,maxWidth: 70 }} className="active d-inline-block">
      <div className="p-4 pt-1">
        <div className="row justify-content-center">
          <img src={Icon} alt="icon" style={{height: '50px',width: '50px'}}/>
        </div>
      </div>
      <div className="p-1 mt-5">
        <div className="row justify-content-center mt-5">
          <img src={Chiller_Plant_Icon} alt="icon" style={{height: '50px',width: '50px'}}/>
        </div>
        <div className="row justify-content-center mt-3">
          <img src={solar_power_ui_icon} alt="icon" style={{height: '50px',width: '50px'}}/>
        </div>
        <div className="row justify-content-center mt-3">
          <img src={street_light_ui_icon} alt="icon" style={{height: '50px',width: '50px'}}/>
        </div>
        <div className="row justify-content-center mt-3">
          <img src={new_iotcomui_ui_icon} alt="icon" style={{height: '50px',width: '50px'}}/>
        </div>
        <div className="row justify-content-center mt-3">
          <img src={environmental_monitor_ui_icon} alt="icon" style={{height: '50px',width: '50px'}}/>
        </div>
      </div>
    </nav>
  )
}

export default MenuSidebar;