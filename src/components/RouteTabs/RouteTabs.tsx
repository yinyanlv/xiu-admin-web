import React from 'react';
import {Tabs} from 'antd';
import {Link, Route} from "react-router-dom";
import styles from './RouteTabs.module.scss';

interface RouteTabsProps {
    items: any[]
}

class RouteTabs extends React.Component<RouteTabsProps> {

    onEdit = (targetKey, action) => {
        console.log(targetKey);
        console.log(action);
    };

    render() {
        const items = this.props.items;

        return (
            <Tabs type={'editable-card'}
                  style={{
                      marginTop: '12px'
                  }}
                  onEdit={this.onEdit}
            >
                {
                    items.map((item) =>{
                        return (
                            <Tabs.TabPane closable tab={<Link to={item.path}>{item.title}</Link>} key={item.key}>
                                <Route path={item.path} exact>
                                    <item.component />
                                </Route>
                            </Tabs.TabPane>
                        );
                    })
                }
            </Tabs>
        );
    }
}

export default RouteTabs;
