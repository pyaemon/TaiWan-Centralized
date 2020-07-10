import React from 'react'
import Floor from '../../../../Config/Images/NewBMap02.png'
import Icon from '../../../../Config/Images/NewBMap_icons.png'
import StatusList from '../../list'

const FirstFloor = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-5 col-sm-12 col-xs-12 p-2 mx-auto">
                    <StatusList />
                </div>
                <div className="col-lg-9 col-md-7 col-sm-12 col-xs-12 p-2 mx-auto" >
                    <img src={Floor} style={{ width: '95%', height: '95%', position: 'relative', left: 0, top: 0, minHeight: "280px", minWidth: "280px"}} />
                    <img src={Icon} style={{ width: '85%', height: '90%', position: 'absolute', top: '10px', left: '27px' }} />
                </div>
            </div>
        </div>
    )
}

export default FirstFloor