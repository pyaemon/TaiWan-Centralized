import React from 'react';
import Icon from '../../../Config/images/i2.JPG';

const MainSideBar = (props) => {
    return(
      <nav id="sidebar"  style={{ backgroundColor: "#0076b7",minWidth: 70,maxWidth: 70 }} className="active d-inline-block">
        <div className="p-4 pt-1">
          <div className="row justify-content-center">
            <img src={Icon} alt="icon" style={{height: '50px',width: '50px'}}/>
          </div>
        </div>
      </nav>
    )
  }
export default MainSideBar;