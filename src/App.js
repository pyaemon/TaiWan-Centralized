import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Sidebar from './Features/Sidebar/Container/sidebarcontainer';
import './App.css';
import MainMenuContainer from './Pages/MainPage/container/maincontainer';
import ChillerPlant from './Pages/ChillerPlant/index'
import Login from './Pages/Login/index'
import MainNav from './Features/nav_1';


const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#ffff',
        padding: 30
    }
});

class PageApp extends React.Component {
//"Hello"
    state = { selectedItem: 'Tickets' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <Sidebar selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <MainNav title={selectedItem} />
                    <Switch>
                        <div id="page-content-wrapper" className="m-lg-4 m-sm-0 " style={{ width: '100%', padding: 0, minHeight: '100vh' }}>                           <Route path="/main" component={MainMenuContainer} className="mx-2 mt-4" />
                            <Route path="/chiller-plant" component={ChillerPlant} className="mx-2 mt-4" />
                            <Route path="/chillerRoom" component={ChillerPlant} className="mx-2 mt-4" />
                            <Route path="/coolingTower" component={ChillerPlant} className="mx-2 mt-4" />
                            <Route path="/zonePump" component={ChillerPlant} className="mx-2 mt-4" />
                            <Route path="/1stFloor" component={ChillerPlant} className="mx-2 mt-4" />
                            <Route path="/1stFloor-SMT" component={ChillerPlant} className="mx-2 mt-4" />
                        </div>
                    </Switch>
                </Column>

            </Row>
        );
    }
}

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} exact />
                    <Redirect to='/login' from='/' component={Login} exact />
                    <PageApp />

                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )

}

export default App;


