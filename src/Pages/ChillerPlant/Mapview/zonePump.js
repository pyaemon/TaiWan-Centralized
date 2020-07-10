import React from 'react';
import './../../../App.css';
import ZonepumpImage from '../../../Config/Images/zonepump-room.png';

function Zonepump(){
    return(
        <div className="col-10 justify-content-center mx-auto shadow p-5" >
         <img  src={ZonepumpImage} style={{ width: '100%', height: '100%', minHeight: "200px", minWidth: "200px"}} />
        </div>
    )
}

export default Zonepump;