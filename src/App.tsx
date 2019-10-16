import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import store from './store';
import {AuthLayout} from 'src/layouts/AuthLayout';

interface AppProps {
    [key:string]: any
}

class App extends React.Component<AppProps> {

    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path={""}>
                            <AuthLayout />
                        </Route>
                    </Switch>
                </BrowserRouter>

            </Provider>
        );
    }
}

export default App;
