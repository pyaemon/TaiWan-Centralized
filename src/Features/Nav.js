import React from 'react';
import Evercomm from '../Config/images/New_Evercomm_Logo_gradient .png'
//import '../assets/custom.css'; 
import acbel_user_icon_exemple from '../Config/images/acbel user icon exemple.png';
import info_icon from '../Config/images/info_icon.png';
import american_flag from '../Config/images/language_icon.png';


const Navbar = () => {
    const pathname = window.location.pathname
    if(pathname !== '/main') return null
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-white bg-white">
            <div className="container-fluid">

                {/* <div className="col-4"> */}
                    {/* <button className="btn btn-mute d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                    </button> */}
                        <a className="navbar-brand justify-content-left  pl-2" href="#">
                            <img src={Evercomm}
                                style={{ height: "30px", cursor: "pointer" }}
                                alt="logo">
                            </img>
                        </a>
                        <button className="navbar-toggler btn btn-mute" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                        </button>
                   

                {/* </div> */}

                <div className="col-8">
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav w-100 justify-content-center mx-auto" >
                            <li className="nav-item active">
                                <a className="nav-link text-primary border-bottom border-primary font-weight-bold" href="#">My Apps <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark font-weight-bold" href="#">Management</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark font-weight-bold" href="#">Alarams<span className="ml-2 badge badge-danger">3</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="col-4"> */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100 justify-content-end pr-5 icon" >
                            <li className="nav-item active ml-2 p-1">
                                <img src={info_icon} style={{ height: "30px", width: "35px" }} />
                            </li>
                            <li className="nav-item bg-white  ml-2 p-1">
                                <img src={american_flag} style={{ height: "25px", width: "30px" }} />
                            </li>
                            <li className="nav-item ml-2 p-1">
                                <img src={acbel_user_icon_exemple} style={{ height: "30px", width: "35px" }} className="" />
                            </li>
                        </ul>
                    </div>
                {/* </div> */}

            </div>
        </nav>

    );
}

export default Navbar;

