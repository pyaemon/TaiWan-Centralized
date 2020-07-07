import React from 'react';
import StatusList from './List';
import ChillerRoom from './Mapview/chillerRoom';
import CoolingTower from './Mapview/coolingTower'
import { Switch, Route } from 'react-router-dom';
import Zonepump from './Mapview/zonePump';
import FirstFloor from './Mapview/Floor/1stFloor';
import FirstFloorSMT from './Mapview/Floor/1stFloorSMT';


const ChillerPlant=()=>{
    // const path=window.location.pathname
    
    return(
       <div className='py-5'>
           <Switch>
            <div className="">
                <Route path="/chillerRoom" render={()=> <ChillerRoom/> } />
                <Route path="/coolingTower" render={()=> <CoolingTower/> } />
                <Route path="/zonePump" render={()=> < Zonepump/>} />
                <Route path="/1stFloor" render={()=> <FirstFloor/>} />
                <Route path="/1stFloor-SMT" render={()=> < FirstFloorSMT/>} />
            </div>  
           </Switch>
          
          {/* { path ==="/1stFloor" || path ==="/1stFloor-SMT" ? <StatusList/> :null} */}
       
       </div>
    )
}
export default ChillerPlant;