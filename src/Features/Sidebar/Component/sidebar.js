import React, { Fragment } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Chiller_Plant_Icon from '../../../Config/Images/chiller plant ui_icon.png';
import Icon from '../../../Config/Images/i4.PNG';
import solar_power_ui_icon from '../../../Config/Images/solar power ui_icon.png';
import street_light_ui_icon from '../../../Config/Images/street light ui_icon.png';
import new_iotcomui_ui_icon from '../../../Config/Images/new iotcomui ui_icon.png';
import environmental_monitor_ui_icon from '../../../Config/Images/environmental monitor ui_icon.png';
import IconBurger from '../../../Tools/iconBurger'
import { withRouter } from 'react-router-dom';
import { SidebarLanguage } from '../../../Languages/Util/sidebar.language';
import Toggle from '../../../Tools/toggle';

const styles = StyleSheet.create({
  burgerIcon: {
    cursor: 'pointer',
    position: 'absolute',
    left: 24,
    top: 34
  },
  container: {
    backgroundColor: '#32a3de',
    width: 255,
    paddingTop: 32,
    height: 'calc(100% - 32px)'
  },
  containerMobile: {
    transition: 'left 0.5s, right 0.5s',
    position: 'absolute',
    width: 255,
    height: 'calc(100% - 32px)',
    zIndex: 901
  },
  menucontainer: {
    backgroundColor: '#32a3de',
    width: 90,
    paddingTop: 32,
    height: 'calc(100% - 32px)'
  },
  menucontainerMobile: {
    transition: 'left 0.5s, right 0.5s',
    position: 'absolute',
    width: 90,
    height: 'calc(100% - 32px)',
    zIndex: 901
  },
  mainContainer: {
    height: '100%',
    minHeight: '100vh'
  },
  mainContainerMobile: {
    position: 'absolute',
    width: '100vw',
    minWidth: '100%',
    top: 0,
    left: 0
  },
  menuItemList: {
    marginTop: 52
  },
  outsideLayer: {
    position: 'absolute',
    width: '100vw',
    minWidth: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.50)',
    zIndex: 900
  },
  separator: {
    borderTop: '1px solid #DFE0EB',
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06
  },
  hide: {
    left: -255
  },
  show: {
    left: 0
  }
});

class SidebarComponent extends React.Component {

  state = { expanded: false };

  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false
    }
  }
  

  onItemClicked = (item) => {
    this.setState({ expanded: false });
    return this.props.onChange(item);
  }

  isMobile = () => window.innerWidth <= 768;

  toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

  renderBurger = () => {
    return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
    <IconBurger />
    </div>
  }

  openHandler = () => {
    if (!this.state.sidebarOpen) {
      this.setState({ sidebarOpen: true })
    } else {
      this.setState({ sidebarOpen: false })
    }
  }

  IconClick = () => {
    this.props.history.push('/main')

  }

  render() {
    const { expanded } = this.state;
    const {languageId} = this.props
    const isMobile = this.isMobile();

    return (
      <Fragment>
        {
          this.state.sidebarOpen === true ?
            <div style={{ position: 'relative' }}>
              <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile) }}>
                {(isMobile && !expanded) && this.renderBurger()}
                <Column className={css(styles.menucontainer)} breakpoints={{ 768: css(styles.menucontainerMobile, expanded ? styles.show : styles.hide) }}>
                  <div className="row justify-content-center mt-3 py-3" >
                    <img src={Icon} alt="icon" style={{ height: '50px', width: '50px', cursor: 'pointer' }} onClick={() => this.IconClick()} />
                  </div>
                  <Column className={css(styles.menuItemList)}>
                    <div className="p-1 mt-5">
                      {this.state.sidebarOpen ?

                        <div className="row justify-content-center mt-5">
                          <Toggle click={() => this.openHandler()} sidebarOpen={this.state.sidebarOpen}></Toggle>
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

                  </Column>
                </Column>
                {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
              </Row>
            </div>
            :
            <div style={{ position: 'relative' }}>
              <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile) }}>
                {(isMobile && !expanded) && this.renderBurger()}
                <Column className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                  <div className="row p-3 ">
                    <div className="col-3">
                      <a href="#" className="img logo rounded-circle mb-5"> <img src={Chiller_Plant_Icon} style={{ width: 50, height: 50 }} /> </a>
                    </div>
                    <div className="col-6 pt-1"><span className="font-weight-bolder text-dark" style={{ fontSize: 13 }}>Acbel Chillerplant UI</span></div>
                  </div>
                  <div className="d-flex justify-content-end"><Toggle click={this.openHandler}></Toggle></div>
                  <Column className={css(styles.menuItemList)}>
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
                              <div className="text-white text-decoration-none" onClick={() => this.props.history.push('/chillerRoom')}>Chiller Room</div>
                            </li>
                            <li className="pt-2">
                              <div className="text-white text-decoration-none" onClick={() => this.props.history.push('/coolingTower')}>Cooling Tower</div>
                            </li>
                            <li className="pt-2">
                              <div className="text-white text-decoration-none" onClick={() => this.props.history.push('/zonePump')}>Zone Pump</div>
                            </li>
                            <li className="pt-2">
                              <a href="#floor" data-toggle="collapse" aria-expanded="false" className="text-decoration-none dropdown-toggle text-white text-left  dropdown-menu-right">{SidebarLanguage[languageId].MV_Item}</a>
                              <ul className="collapse list-unstyled ml-3" id="floor">
                                <li className="pt-2">
                                  <div className="text-white text-decoration-none" onClick={() => this.props.history.push('/1stFloor')}>{SidebarLanguage[languageId].Secondary_Item1}</div>
                                </li>
                                <li className="pt-2">
                                  <div className="text-white text-decoration-none" onClick={() => this.props.history.push('/1stFloor-SMT')}>{SidebarLanguage[languageId].Secondary_Item2}</div>
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
                  </Column>
                </Column>
                {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
              </Row>
            </div>
        }
      </Fragment>

    );
  };
}

export default withRouter(SidebarComponent);