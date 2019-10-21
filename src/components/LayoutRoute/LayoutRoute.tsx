import React, {Component} from 'react';
import {Route} from 'react-router-dom';

const LayoutRoute = ({component: Component, layout: Layout, ...rest}: any) => {

    if (Layout === undefined) {
        Layout = (props: any) => (<>props.children</>);
    }

    return (
        <Route {...rest} render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )} />
    );
};

export default LayoutRoute;