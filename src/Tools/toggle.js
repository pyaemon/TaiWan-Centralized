import React from 'react';
import Chiller_Plant_Icon from '../Config/Images/chiller plant ui_icon.png';

const Toggle = (props) => {
    return (
        <div>
            {
                props.sidebarOpen ?
                    <img src={Chiller_Plant_Icon} style={{ width: 45, height: 45, boxShadow: '1px 1px 18px 1px #f5f7fc', borderRadius: '20%' }} onClick={props.click} />
                    :
                    <button type="button" id="sidebarCollapse" className="btn btn-white fa fa-angle-double-left text-white fa-2x" onClick={props.click}>
                    </button>    
            }
        </div>
    )
}

export default Toggle;