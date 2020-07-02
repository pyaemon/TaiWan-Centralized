import React from 'react';
import Evercomm from '../Config/images/New_Evercomm_Logo_gradient .png'
import acbel_user_icon_exemple from '../Config/images/acbel user icon exemple.png';
import info_icon from '../Config/images/info_icon.png';
import american_flag from '../Config/images/language_icon.png';

const Navbar=()=> {
    return(
        <div className="w-100" >
              <nav className="navbar sticky-top navbar-expand-lg justify-content-between navbar-white bg-white " style={{position: 'relative'}}>
                <a className="navbar-brand">
                    <img src={Evercomm}
                        style={{height: "23px",cursor: "pointer"}}
                        alt="logo">
                    </img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav w-100 justify-content-center mx-auto" >
                        <li className="nav-item active">
                            <a className="nav-link text-primary border-bottom border-primary" href="#">My Apps <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Management</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Alarams<span className="ml-2 badge badge-danger">3</span></a>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav w-100 justify-content-end pr-5" >
                        <li className="nav-item active px-2">
                           <img src={info_icon} style={{height: "30px", width: "40px"}} />
                        </li>
                        <li className="nav-item px-2">
                           <img src={american_flag} style={{height: "30px", width: "40px"}} />
                        </li>
                        <li className="nav-item px-2">
                           <img src={acbel_user_icon_exemple} style={{height: "30px", width: "40px"}} />
                        </li>
                    </ul>
                </div>   
            </nav>
        </div>
          
    );
}

export default Navbar;

