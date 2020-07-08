import React from 'react';
import Evercomm from '../Config/images/New_Evercomm_Logo_gradient .png'
import acbel_user_icon_exemple from '../Config/images/acbel user icon exemple.png';
import info_icon from '../Config/images/info_icon.png';
import american_flag from '../Config/images/language_icon.png';

const Navbar = () => {
    const pathname = window.location.pathname;
    const path = "Mapview"

    return (
        <div class="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-white bg-white">

                <a className="navbar-brand justify-content-left" href="#">
                    {
                        pathname == "/main" ? <img src={Evercomm}
                            style={{ height: "30px", cursor: "pointer"}}
                            alt="logo" /> :<div style={{color: 'grey'}}><i className="fa fa-circle pr-4" style={{width: '1px'}}></i> {`${path} ${pathname}`}</div>
                    }
                </a>
                <button class="btn d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-center mx-auto" style={{ fontSize: 17 }} >
                        <li className="nav-item active">
                            <a className="nav-link font-weight-bold" href="#" style={{ color: '#32a3de', borderBottom: '3px solid #32a3de', marginLeft: 40 }}>My Apps <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted font-weight-bold " href="#" style={{ marginLeft: 40 }}>Management</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-muted font-weight-bold" href="#" style={{ marginLeft: 40 }}>Alarms<span className="ml-2 badge badge-danger">3</span></a>
                        </li>
                    </ul>
                    <div className="form-inline " style={{ marginLeft: 40 }}>
                        <div className="pr-1"><img src={info_icon} style={{ height: "40px", width: "40px" }} className="shadow-sm rounded p-2" /></div>
                        <div className="px-1"> <img src={american_flag} style={{ height: "40px", width: "40px" }} className="shadow-sm rounded p-2" /></div>
                        <div className="px-1"><img src={acbel_user_icon_exemple} style={{ height: "40px", width: "40px" }} className="shadow-sm rounded" /></div>
                    </div>
                </div>
            </nav>
        </div>
    );


}

export default Navbar;

