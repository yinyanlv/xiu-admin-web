import React, {Context} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import store from './store';
import {AppContext} from './AppContext';
import {NormalLayout} from 'src/layouts/NormalLayout';
import {TabsLayout} from 'src/layouts/TabsLayout';

const normalLayoutUrls = ['/login', 'login-hook'];

interface AppProps {
    [key: string]: any
}

class App extends React.Component<AppProps> {

    state = {
        isSideNavCollapsed: false,
        isShowNotice: false,
        toggleSideNav: () => {
            this.setState({
                isSideNavCollapsed: !this.state.isSideNavCollapsed
            });
        },
        controlNotice: (isShow: boolean) => {
            this.setState({
                isShowNotice: isShow
            });
        }
    };

    render() {
        return (
            <Provider store={store}>
                <AppContext.Provider value={this.state}>
                    <BrowserRouter>
                        <Switch>
                            <Route path={normalLayoutUrls}>
                                <NormalLayout/>
                            </Route>
                            <Route path={'/'}>
                                <TabsLayout/>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </AppContext.Provider>
            </Provider>
        );
    }
}

export default App;
