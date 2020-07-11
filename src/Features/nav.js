import React, { useContext } from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import { Nav, Navbar } from 'react-bootstrap';
import Evercomm from '../Config/Images/New_Evercomm_Logo_gradient .png'
import acbel_user_icon_exemple from '../Config/Images/acbel user icon exemple.png';
import info_icon from '../Config/Images/info_icon.png';
import american_flag from '../Config/Images/language_icon.png';
import taiwanFlag from '../Config/Images/TaiwanFlag.jpg'
import { LanguageContext } from '../Languages/Context/LanguageContext';
import Font from '../Config/Font';

const styles = StyleSheet.create({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid #DFE0EB',
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    name: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: 0.2,
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12,
            marginRight: 12
        }
    },
    container: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: '30px',
        letterSpacing: 0.3,
        '@media (max-width: 768px)': {
            marginLeft: 36,
            marginTop: -15
        },
        '@media (max-width: 468px)': {
            fontSize: 20
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
});

const MainNav=()=>{
    const pathName = window.location.pathname;
    const path = "Mapview"
    const { languageId, setlanguageId } = useContext(LanguageContext)
    // const { icon, title, ...otherProps } = this.props;

    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className={css(styles.container)}>
            <Navbar.Brand href="#home" vertical="" className="mb-2">

                {
                    pathName == "/main" ? <img src={Evercomm}
                        style={{ height: "30px", cursor: "pointer" }}
                        alt="logo" /> : <div style={{ color: 'grey', fontSize: Font.labels}}><i className="fa fa-circle pr-4" style={{ width: '1px' }}></i> {`${path} ${pathName}`}</div>
                }
            </Navbar.Brand>
            <button className="btn d-inline-block d-lg-none mt-1 mr-2" type="button" data-toggle="collapse" data-target="#responsive-navbar-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-cog" aria-hidden="true" style={{ fontSize: 30 }}></i>
            </button>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto" style={{fontSize: Font.heading3}}>
                    <Nav.Link href="#MyApps" className="" style={{ color: '#32a3de', borderBottom: '3px solid #32a3de', marginLeft: 40 }}>My Apps</Nav.Link>
                    <Nav.Link href="#Management" className="" style={{ marginLeft: 40 }}>Management</Nav.Link>
                    <Nav.Link href="#Alarms" className="" style={{ marginLeft: 40 }}>Alarms <span className="ml-2 badge badge-danger">3</span></Nav.Link>

                </Nav>
                <Nav>
                    <div className="form-inline " style={{ marginLeft: 40 }}>
                        <div className="pr-1"><img src={info_icon} style={{ height: "40px", width: "40px" }} className="shadow-sm rounded p-2" /></div>
                        <div className="px-1" type="button" data-toggle="dropdown"> {languageId == 0 ? <img src={american_flag} style={{ height: "41px", width: "41px" }} className="shadow-sm rounded p-2" /> : <img src={taiwanFlag} style={{ height: "40px", width: "40px" }} className="shadow-sm rounded p-2" />} </div>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{position:'absolute', cursor: "pointer"}}>
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
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

MainNav.propTypes = {
    title: string
};

export default MainNav;



