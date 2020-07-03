import React from 'react';
import Chiller_Plant_Icon from '../Config/images/chiller plant ui_icon.png';

const Toggle = (props) => {
    return (
        <div>
            {
                props.sidebarOpen ?
                    <img src={Chiller_Plant_Icon} style={{ width: 45, height: 45 }} onClick={props.click} />
                    :
                    <button type="button" id="sidebarCollapse" className="btn btn-white fa fa-angle-double-left text-white fa-2x" onClick={props.click}>
                    </button>
                       
                    
            }

        </div>

    )
}

export default Toggle;