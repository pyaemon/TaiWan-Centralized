import React, { useContext } from 'react';
import Evercomm from '../Config/Images/New_Evercomm_Logo_gradient .png'
import acbel_user_icon_exemple from '../Config/Images/acbel user icon exemple.png';
import info_icon from '../Config/Images/info_icon.png';
import american_flag from '../Config/Images/language_icon.png';
import { LanguageContext } from '../Languages/Context/LanguageContext';
import taiwanFlag from '../Config/Images/TaiwanFlag.jpg'

const Navbar = () => {
    const pathname = window.location.pathname;
    const path = "Mapview"
    const { languageId, setlanguageId } = useContext(LanguageContext)
    const flagStyle = { height: "40px", width: "40px" }

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-white bg-white">

                <a className="navbar-brand justify-content-left" href="#">
                    {
                        pathname == "/main" ? <img src={Evercomm}
                            style={{ height: "30px", cursor: "pointer" }}
                            alt="logo" /> : <div style={{ color: 'grey' }}><i className="fa fa-circle pr-4" style={{ width: '1px' }}></i> {`${path} ${pathname}`}</div>
                    }
                </a>
                <button className="btn d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                        <div className="px-1" type="button" data-toggle="dropdown"> {languageId == 0 ? <img src={american_flag} style={flagStyle} className="shadow-sm rounded p-2" /> : <img src={taiwanFlag} style={flagStyle} NameName="shadow-sm rounded p-2" />} </div>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" onClick={() => {
                                setlanguageId(0)
                                window.localStorage.setItem('languageId', 0)
                            }}>English</a>
                            <a className="dropdown-item" onClick={() => {
                                setlanguageId(1)
                                window.localStorage.setItem('languageId', 1)
                            }}>Chinese</a>
                        </div>
                        <div className="px-1"><img src={acbel_user_icon_exemple} style={{ height: "40px", width: "40px" }} className="shadow-sm rounded" /></div>
                    </div>
                </div>
            </nav>
        </div>
    );


}

export default Navbar;

// import React from 'react';
// import { string } from 'prop-types';
// import { Row } from 'simple-flexbox';
// import { StyleSheet, css } from 'aphrodite';
// import Evercomm from '../Config/images/New_Evercomm_Logo_gradient .png';
// import { Nav, Navbar } from 'react-bootstrap';
// import acbel_user_icon_exemple from '../Config/images/acbel user icon exemple.png';
// import info_icon from '../Config/images/info_icon.png';
// import american_flag from '../Config/images/language_icon.png';
// import taiwanFlag from '../Config/images/TaiwanFlag.jpg'

// const styles = StyleSheet.create({
//     avatar: {
//         height: 35,
//         width: 35,
//         borderRadius: 50,
//         marginLeft: 14,
//         border: '1px solid #DFE0EB',
//     },
//     cursorPointer: {
//         cursor: 'pointer'
//     },
//     name: {
//         fontFamily: 'Muli',
//         fontStyle: 'normal',
//         fontWeight: 600,
//         fontSize: 14,
//         lineHeight: '20px',
//         textAlign: 'right',
//         letterSpacing: 0.2,
//         '@media (max-width: 768px)': {
//             display: 'none'
//         }
//     },
//     separator: {
//         borderLeft: '1px solid #DFE0EB',
//         marginLeft: 32,
//         marginRight: 32,
//         height: 32,
//         width: 2,
//         '@media (max-width: 768px)': {
//             marginLeft: 12,
//             marginRight: 12
//         }
//     },
//     container: {
//         fontWeight: 'bold',
//         fontSize: 20,
//         lineHeight: '30px',
//         letterSpacing: 0.3,
//         '@media (max-width: 768px)': {
//             marginLeft: 36,
//             marginTop: -15
//         },
//         '@media (max-width: 468px)': {
//             fontSize: 20
//         }
//     },
//     iconStyles: {
//         cursor: 'pointer',
//         marginLeft: 25,
//         '@media (max-width: 768px)': {
//             marginLeft: 12
//         }
//     }
// });

// const Header=()=>{
//     const pathname = window.location.pathname;
//     const path = "Mapview"
//     const { languageId, setlanguageId } = useContext(LanguageContext)
//     const flagStyle = { height: "40px", width: "40px" }
//     const { icon, title, ...otherProps } = props;

//     return (
//         <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className={css(styles.container)}>
//             <Navbar.Brand href="#home" vertical="" className="mb-2">

//                 {
//                     pathname == "/main" ? <img src={Evercomm}
//                         style={{ height: "30px", cursor: "pointer" }}
//                         alt="logo" /> : <div style={{ color: 'grey' }}><i className="fa fa-circle pr-4" style={{ width: '1px' }}></i> {`${path} ${pathname}`}</div>
//                 }
//             </Navbar.Brand>
//             <button className="btn d-inline-block d-lg-none mt-1" type="button" data-toggle="collapse" data-target="#responsive-navbar-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <i class="fa fa-cog" aria-hidden="true" style={{ fontSize: 30 }}></i>
//             </button>
//             <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="mx-auto">
//                     <Nav.Link href="#MyApps" className="" style={{ color: '#32a3de', borderBottom: '3px solid #32a3de', marginLeft: 40 }}>My Apps</Nav.Link>
//                     <Nav.Link href="#Management" className="" style={{ marginLeft: 40 }}>Management</Nav.Link>
//                     <Nav.Link href="#Alarms" className="" style={{ marginLeft: 40 }}>Alarms <span className="ml-2 badge badge-danger">3</span></Nav.Link>

//                 </Nav>
//                 <Nav>
//                     <div className="form-inline " style={{ marginLeft: 40 }}>
//                         <div className="pr-1"><img src={info_icon} style={{ height: "40px", width: "40px" }} className="shadow-sm rounded p-2" /></div>
//                         <div className="px-1" type="button" data-toggle="dropdown"> {languageId == 0 ? <img src={american_flag} style={flagStyle} className="shadow-sm rounded p-2" /> : <img src={taiwanFlag} style={flagStyle} NameName="shadow-sm rounded p-2" />} </div>
//                         <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
//                             <a className="dropdown-item" onClick={() => {
//                                 setlanguageId(0)
//                                 window.localStorage.setItem('languageId', 0)
//                             }}>English</a>
//                             <a className="dropdown-item" onClick={() => {
//                                 setlanguageId(1)
//                                 window.localStorage.setItem('languageId', 1)
//                             }}>Chinese</a>
//                         </div>
//                         <div className="px-1"><img src={acbel_user_icon_exemple} style={{ height: "40px", width: "40px" }} className="shadow-sm rounded" /></div>
//                     </div>
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>

//     );
// }

// // Navbar.propTypes = {
// //     title: string
// // };

// export default Header;



