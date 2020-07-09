import React from 'react';
import chiller from '../../../Config/images/chiller-plant.png';

const ChillerRoom=()=>{
    return(
        <div className="col-10 justify-content-center mx-auto shadow p-5" >
            <img className="img-fluid" src={chiller} style={{ width: '100%', height: '100%',minHeight: "250px", minWidth: "230px"}} />
        </div>
    )

}
export default ChillerRoom;
