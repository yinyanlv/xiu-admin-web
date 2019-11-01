import React from 'react';
import {Switch} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import styles from  './NormalLayout.module.scss';

import {routes} from './routes';

class NormalLayout extends React.Component {
    render() {
        return (
            <Switch>
                {
                    renderRoutes(routes)
                }
            </Switch>
        );
    }
}

export default NormalLayout;
