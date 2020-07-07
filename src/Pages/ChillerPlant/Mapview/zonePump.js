import React from 'react';
import './../../../App.css';
import ZonepumpImage from '../../../Config/images/zonepump-room.png';

function Zonepump(){
    return(
        <div className="col-10 justify-content-center mx-auto shadow p-5" >
         <img  src={ZonepumpImage} style={{ width: '100%', height: '100%'}} />
        </div>
    )
}

export default Zonepump;