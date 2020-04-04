import React, {Component} from 'react';
import BasicButtons from './BasicButtons';
import styles from './App.module.scss';

class App extends Component {
    render() {
        return (
            <div className={styles.page}>
                <h1>React Particle Effects</h1>
                <BasicButtons/>
            </div>
        );
    }
}

export default App;
