import React from 'react';
import Icon from '../Config/images/i2.JPG';
const Sidebar = () =>{
    return(
        // <div className="container-fluid px-0">
        //     <div className="row collapse show no-gutters d-flex h-100 position-absolute">
        //         <div className="p-0 h-100 w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">
        //             <div className="text-white h-100 align-self-start w-sidebar" style={{ backgroundColor: "#0076b7", minWidth:'50px', zIndex: '10000'}}>
        //                 <div className="py-3 row justify-content-center">
        //                     <img src={Icon} alt="icon" style={{height: '45px',width: '45px'}}/>
        //                 </div>
                       
        //                  <ul className="nav flex-column flex-nowrap text-truncate">
        //                     <li className="nav-item">
        //                         <a className="nav-link active" href="#"></a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#"></a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="#"></a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='position-relative position-sticky float-left' style={{width: '60px',height: '100vh', zIndex: 10000, top: 0, left: 0, overflowX: 'hidden', backgroundColor:'#0076b7'}}>
            <div className="py-3 row justify-content-center">
                <img src={Icon} alt="icon" style={{ height: '50px', width: '50px' }} />
            </div>
        </div>
    );
}

export default Sidebar;