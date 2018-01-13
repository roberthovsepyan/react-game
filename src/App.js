import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Board from './components/Board';
import Header from './components/Header';
import {Instructions} from './components/Instructions';
import {store} from './index';
import {closeGameOver, closeGameCompleted} from './actions/utilities';

class App extends Component {

    componentDidMount () {
        //focus board immediately
        ReactDOM.findDOMNode(this.refs.board).focus();
    };

    handleGameOver () {
        store.dispatch(closeGameOver());
        ReactDOM.findDOMNode(this.refs.board).focus();
    };

    handleGameCompleted () {
        store.dispatch(closeGameCompleted());
        ReactDOM.findDOMNode(this.refs.board).focus();
    };

    render() {
        const style = {
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 40,
            width: 800,
        };

        const gameOver = <FlatButton label='OK' onClick={this.handleGameOver.bind(this)} keyboardFocused/>;
        const gameCompleted = <FlatButton label='OK' onClick={this.handleGameCompleted.bind(this)} keyboardFocused/>;

        return (
            <div style={style}>
                <Header/>
                <Board ref='board'/>
                <Instructions/>
                <Dialog title='Game Over!' actions={gameOver} open={this.props.utilities.isGameOver}
                        titleStyle={{color: '#311B92'}}>
                    Try again?
                </Dialog>
                <Dialog title='Congratulations!' actions={gameCompleted} open={this.props.utilities.isGameCompleted}
                        titleStyle={{color: '#311B92'}}>
                    You've completed the game. Play again?
                </Dialog>
            </div>
        );
    }
}

App = connect((state) => ({utilities: state.utilities}))(App);

export default App;
