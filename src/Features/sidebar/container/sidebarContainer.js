import React, {Fragment, useState, Component} from 'react';
import Sidebar from '../component/sidebar.js';
import MenuSidebar from '../component/menusidebar.js';
import Toggle from '../../../tools/toggle.js';

const SidebarContainer = () => {
    const [sidebarOpen, setSidebarOpen ] = useState(false);

    const openHandler  = () =>{
        if(!sidebarOpen){
            setSidebarOpen(true)
        }else{
            setSidebarOpen(false)
        }
    }
    let sidebar 
    if(sidebarOpen){
        sidebar = <Sidebar />
    }else{
        sidebar = <MenuSidebar />
    }
    return(
        <Fragment>
            {sidebar}
            
        </Fragment>
    )
}
export default SidebarContainer;