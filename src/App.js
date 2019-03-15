import React, { Component } from 'react';

import { IndexPage } from './pages/';

import styles from './App.scss';

class App extends Component {
    render() {
        return (
            <div className={ styles['root'] }>
                <IndexPage />
            </div>
        );
    }
}

export default App;