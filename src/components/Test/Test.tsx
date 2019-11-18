import React from 'react';
import {Transition} from 'react-transition-group';
import styles from './Test.module.scss';

const duration = 3000;
const defaultStyle = {
    width: '200px',
    height: '200px',
    background: 'red',
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: {
        opacity: 0.5,
        background: 'black'
    },
    entered: {
        opacity: 1,
        background: 'green'
    },
    exiting: {
        opacity: 0
    },
    exited: {
        opacity: 0
    }
};

// timeout，设置entering、exiting状态持续时间，即使entering、exiting动画未结束，强制进入entered、exited状态
class Test extends React.PureComponent {
    state = {
        isShow: true
    };

    componentDidMount(): void {

        setTimeout(() => {
            this.setState({
                isShow: true
            });

            //
            // setTimeout(() => {
            //     this.setState({
            //         isShow: false
            //     });
            // }, 3000);
        }, 3000);
    }

    render() {
        return (
            <Transition in={this.state.isShow} timeout={1000} appear={true}>
                {
                    state => (
                        <div style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}>
                            test
                        </div>
                    )
                }
            </Transition>
        );
    }
}

export default Test;
