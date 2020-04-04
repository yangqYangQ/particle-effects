import React, {Component} from 'react';
import BasicButtons from './BasicButtons';
import Draggable from './Draggable';
import styles from './App.module.scss';

class App extends Component {
    render() {
        return (
            <div className={styles.page}>
                <h1>React Particle Effects</h1>
                <div className="content">
                    <BasicButtons/>
                    <Draggable/>
                </div>
            </div>
        );
    }
}

export default App;
