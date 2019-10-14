import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {AuthLayout} from 'src/layouts/AuthLayout';

interface AppProps {
    [key:string]: any
}

class App extends React.Component<AppProps> {

    render() {

        return (
            <Provider store={store}>
                <AuthLayout />
            </Provider>
        );
    }
}

export default App;
