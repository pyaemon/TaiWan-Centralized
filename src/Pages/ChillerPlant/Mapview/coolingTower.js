import React, { Fragment } from 'react'
import CoolingTowerIMG from './../../../Config/images/cooling-tower.png'

const CoolingTower = () => {
    return (
        <div className='col-10 mx-auto justify-content-center shadow'>
            <img className='p-5' src={CoolingTowerIMG} style={{ width: '100%', height: '100%',minHeight: "280px", minWidth: "280px" }} />
        </div>
    )
}

export default CoolingTower