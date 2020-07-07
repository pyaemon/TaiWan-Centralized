import React from 'react'
import Floor from '../../../../Config/images/NewBMap02.png'
import Icon from '../../../../Config/images/NewBMap_icons.png'
import StatusList from '../../List'

const FirstFloor = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 p-2 mx-auto">
                    <StatusList />
                </div>
                <div className="col-lg-9 col-md-6 col-sm-12 col-xs-12 p-2 mx-auto" style={{ position: 'relative', left: '35px', top: 0 }}>
                    <img src={Floor} style={{ width: '95%', height: '95%', position: 'relative', left: 0, top: 0 }} />
                    <img src={Icon} style={{ width: '85%', height: '90%', position: 'absolute', top: '40px', left: '62px' }} />
                </div>
            </div>
        </div>


    )
}

export default FirstFloor