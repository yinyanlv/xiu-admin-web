import React from 'react';
import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import 'mock';
import store from './store';
import history from './history';
import {AppContext} from './AppContext';
import {Auth} from 'src/components/Auth';

import {NormalLayout} from 'src/layouts/NormalLayout';
import {TabsLayout} from 'src/layouts/TabsLayout';

const normalLayoutUrls = ['/login', '/login-hook', '/404'];

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
                    <Router history={history}>
                        <Auth>
                            <Switch>
                                <Route path={normalLayoutUrls}>
                                    <NormalLayout/>
                                </Route>
                                <Route path={'/'}>
                                    <TabsLayout/>
                                </Route>
                            </Switch>
                        </Auth>
                    </Router>
                </AppContext.Provider>
            </Provider>
        );
    }
}

export default App;
