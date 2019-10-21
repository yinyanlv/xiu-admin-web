import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import store from './store';
import {NormalLayout} from 'src/layouts/NormalLayout';
import {TabsLayout} from 'src/layouts/TabsLayout';

const normalLayoutUrls = ['/login', 'login-hook'];

interface AppProps {
    [key:string]: any
}

class App extends React.Component<AppProps> {

    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={normalLayoutUrls}>
                            <NormalLayout />
                        </Route>
                        <Route path={'/'}>
                            <TabsLayout />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
