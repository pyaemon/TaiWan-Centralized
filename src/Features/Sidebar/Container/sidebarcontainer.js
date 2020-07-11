import React, { Fragment, useState, Component, useContext } from 'react';
import Icon from '../../../Config/Images/i4.PNG';
import SidebarComponent from '../Component/sidebar';
import { withRouter } from 'react-router-dom';
import { LanguageContext } from '../../../Languages/Context/LanguageContext';

const Sidebar = (props) => {

    const pathName = window.location.pathname
    const { languageId } = useContext(LanguageContext)
 
    return (
        <Fragment>
            {
                pathName === '/main' ?
                    <nav id="sidebar-wrapper" style={{ minWidth: 90, maxWidth: 90, backgroundColor: '#32a3de' }}>
                        <div className="row justify-content-center mt-3 py-3" >
                            <img src={Icon} alt="icon" style={{ height: '50px', width: '50px' }} />

                        </div>
                    </nav>
                    :
                    <Fragment>
                        <SidebarComponent languageId={languageId} />
                    </Fragment>
            }
        </Fragment>
    )

}

export default withRouter(Sidebar);

