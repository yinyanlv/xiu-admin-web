import React from 'react';
import {DatePicker} from 'antd';
import styles from './App.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            hello
            <DatePicker/>
        </div>
    );
};

export default App;
