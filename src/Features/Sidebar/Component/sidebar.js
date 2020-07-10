import React, { Fragment, useState, Component, useContext } from 'react';
import Icon from '../../../Config/Images/i4.PNG';
import solar_power_ui_icon from '../../../Config/Images/solar power ui_icon.png';
import street_light_ui_icon from '../../../Config/Images/street light ui_icon.png';
import new_iotcomui_ui_icon from '../../../Config/Images/new iotcomui ui_icon.png';
import environmental_monitor_ui_icon from '../../../Config/Images/environmental monitor ui_icon.png';
import Chiller_Plant_Icon from '../../../Config/Images/chiller plant ui_icon.png';
import Toggle from '../../../Tools/toggle';
import { withRouter } from 'react-router-dom';
import { LanguageContext } from '../../../Languages/Context/LanguageContext';
import { SidebarLanguage } from '../../../Languages/Util/sidebar.language';

const Sidebar = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { languageId } = useContext(LanguageContext)
  const pathname = window.location.pathname
  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true)
    } else {
      setSidebarOpen(false)
    }
  }
  let sidebar
  if (sidebarOpen) {
    sidebar = menusidebar();
  } else {
    sidebar = subsidebar();
  }

  return (
    <Fragment>
      {
        pathname === '/main' ?
          <nav style={{ minWidth: 60, maxWidth: 60, backgroundColor: '#32a3de' }}>
            <div className="row justify-content-center mt-3 py-3" >
              <img src={Icon} alt="icon" style={{ height: '50px', width: '50px' }} />

            </div>
          </nav>
          :
          <Fragment>
            {sidebar}
          </Fragment>
      }
    </Fragment>
  )


  function subsidebar() {
    return (
      <nav id="sidebar" className="" style={{ minWidth: 300, maxWidth: 300, backgroundColor: '#32a3de', minHeight: '100vh' }} >
        <div className="p-4 pt-1">
          <div className="row p-3 ">
            <div className="col-3">
              <a href="#" className="img logo rounded-circle mb-5"> <img src={Chiller_Plant_Icon} style={{ width: 50, height: 50 }} /> </a>
            </div>
            <div className="col-6 pt-1"><span className="font-weight-bolder text-dark" style={{ fontSize: 13 }}>Acbel Chillerplant UI</span></div>
          </div>
          <div className="d-flex justify-content-end"><Toggle click={openHandler}></Toggle></div>
          <ul className="list-unstyled mb-5 mt-3 p-2">
            <li className="active border-bottom pb-2 pt-2">
              <a className="text-white mt-2 text-decoration-none">Realtime</a>
            </li>
            <ul className="list-unstyled ml-3">
              <li className="pt-3">
                <a href="#" className="text-white text-decoration-none">Listview</a>
              </li>
              <li className="pt-2">
                <a href="#mapViewMenu" data-toggle="collapse" className="text-decoration-none dropdown-toggle text-white text-left  dropdown-menu-right" >Mapview</a>
                  <ul className="collapse list-unstyled ml-3" id="mapViewMenu">
                    <li className="pt-3">
                      <div className="text-white text-decoration-none" onClick={()=> props.history.push('/chillerRoom') }>Chiller Room</div>
                    </li>
                    <li className="pt-2">
                    <div className="text-white text-decoration-none" onClick={()=> props.history.push('/coolingTower') }>Cooling Tower</div>
                    </li>
                    <li className="pt-2">
                    <div className="text-white text-decoration-none" onClick={()=> props.history.push('/zonePump') }>Zone Pump</div>
                    </li>
                    <li className="pt-2">
                      <a href="#floor" data-toggle="collapse" aria-expanded="false" className="text-decoration-none dropdown-toggle text-white text-left  dropdown-menu-right">{SidebarLanguage[languageId].MV_Item}</a>
                      <ul className="collapse list-unstyled ml-3" id="floor">
                        <li className="pt-2">
                          <div className="text-white text-decoration-none" onClick={()=>props.history.push('/1stFloor')}>{SidebarLanguage[languageId].Secondary_Item1}</div>
                        </li>
                        <li className="pt-2">
                          <div className="text-white text-decoration-none" onClick={()=>props.history.push('/1stFloor-SMT')}>{SidebarLanguage[languageId].Secondary_Item2}</div>
                        </li>
                        <li className="pt-2">
                          <a href="#" className="text-white text-decoration-none">{SidebarLanguage[languageId].Secondary_Item3}</a>
                        </li>
                        <li className="pt-2">
                          <a href="#" className="text-white text-decoration-none">{SidebarLanguage[languageId].Secondary_Item4}</a>
                        </li>
                        <li className="pt-2">
                          <a href="#" className="text-white text-decoration-none" style={{ whiteSpace: 'nowrap' }}>{SidebarLanguage[languageId].Secondary_Item5}</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  
              {/* : null} */}

              </li>
            </ul>
            <li className="border-bottom pb-2 pt-2">
              <a href="#" className="text-white text-decoration-none">Analysis</a>
            </li>
            <ul className="list-unstyled ml-3">
              <li className="pt-2">
                <a href="#" className="text-white text-decoration-none">Data trend</a>
              </li>
              <li className="pt-2">
                <a href="#" className="text-white text-decoration-none">Chiller performance</a>
              </li>
            </ul>
            <li className="border-bottom pb-2 pt-2">
              <a href="#" className="text-white text-decoration-none">Report</a>
            </li>
            <ul className="list-unstyled ml-3">
              <li className="pt-2">
                <a href="#" className="text-white text-decoration-none">Data quality</a>
              </li>
              <li className="pt-2">
                <a href="#" className="text-white text-decoration-none">Daily activity</a>
              </li>
              <li className="pt-2">
                <a href="#" className="text-white text-decoration-none">Weekly performance</a>
              </li>
            </ul>
          </ul>

        </div>
      </nav>

    )
  }

  function menusidebar() {
    const IconClick = () => {
      props.history.push('/main')
    }
    return (
      <nav className="" style={{ minWidth: 60, maxWidth: 60, backgroundColor: '#32a3de' }}>
        <div className="">
          <div className="row justify-content-center mt-3 py-3" >
            <img src={Icon} alt="icon" style={{ height: '50px', width: '50px', cursor: 'pointer' }} onClick={IconClick} />
          </div>
        </div>
        {/* <div class="d-flex justify-content-center"><Toggle click={openHandler}></Toggle></div>  */}
        <div className="p-1 mt-5">
          {sidebarOpen ?

            <div className="row justify-content-center mt-5">
              <Toggle click={openHandler} sidebarOpen={sidebarOpen}></Toggle>
            </div>
            :
            null
          }
          <div className="row justify-content-center mt-3  py-3 ">
            <img src={solar_power_ui_icon} alt="icon" style={{ height: '45px', width: '45px' }} />
          </div>
          <div className="row justify-content-center mt-3  py-3">
            <img src={street_light_ui_icon} alt="icon" style={{ height: '45px', width: '45px' }} />
          </div>
          <div className="row justify-content-center mt-3  py-3">
            <img src={new_iotcomui_ui_icon} alt="icon" style={{ height: '45px', width: '45px' }} />
          </div>
          <div className="row justify-content-center mt-3  py-3">
            <img src={environmental_monitor_ui_icon} alt="icon" style={{ height: '45px', width: '45px' }} />
          </div>
        </div>
      </nav>
    )
  }

}

export default withRouter(Sidebar);

