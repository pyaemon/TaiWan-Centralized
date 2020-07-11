import React from 'react';
import ChillerRoom from './Mapview/chillerRoom';
import CoolingTower from './Mapview/coolingTower'
import { Switch, Route } from 'react-router-dom';
import Zonepump from './Mapview/zonePump';
import FirstFloor from './Mapview/Floor/1stFloor';
import FirstFloorSMT from './Mapview/Floor/1stFloorSMT';


const ChillerPlant = () => {
    return (
        <div className='py-5'>
            <Switch>
                <div className="">
                    <Route path="/chillerRoom" render={() => <ChillerRoom />} />
                    <Route path="/coolingTower" render={() => <CoolingTower />} />
                    <Route path="/zonePump" render={() => < Zonepump />} />
                    <Route path="/1stFloor" render={() => <FirstFloor />} />
                    <Route path="/1stFloor-SMT" render={() => < FirstFloorSMT />} />
                </div>
            </Switch>
        </div>
    )
}
export default ChillerPlant;