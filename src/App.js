import React, { Component } from 'react';

import Board from './components/Board';
import Header from './components/Header';

class App extends Component {

    render() {
        const style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 100,
            width: 800,
        };

        return (
            <div style={style}>
                <Header/>
                <Board/>
            </div>
        );
    }
}

export default App;
