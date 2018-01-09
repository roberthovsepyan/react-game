import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {store} from '../index';
import {addKey, disableKey, disableOutline} from '../actions/sprite';
import Sprite from './Sprite';
import Enemy from './Enemy';

class Board extends Component {

    //to focus the Board automatically
    componentDidMount () {
        this.focusDiv();
    };

    focusDiv () {
        ReactDOM.findDOMNode(this.refs.board).focus();
    };

    handleDown (e) {
        store.dispatch(addKey(e.key));
    };

    handleUp (e) {
        store.dispatch(disableKey(e.key));
    };

    handleFocus () {
        store.dispatch(disableOutline());
    };

    renderEnemies () {
        if (this.props.sprite.level === 1) {
            return <Enemy x={400} y={0} speed={10}/>;
        }
        else if (this.props.sprite.level === 2) {
            return <Enemy x={300} y={0} speed={10}/>;
        }
    };

    render () {
        const style = {
            top: 100,
            left: 350,
            backgroundColor: 'white',
            width: 800,
            height: 400,
            borderRadius: 4,
            position: 'absolute',
            outline: this.props.sprite.outline
        };

        const nextLvlStyle = {
            position: 'absolute',
            width: 100,
            height: 40,
            top: 180,
            left: 700,
            backgroundColor: 'blue'
        };
        return (
            <div ref='board' style={style} tabIndex={0} onKeyDown={this.handleDown.bind(this)}
                 onKeyUp={this.handleUp.bind(this)} onFocus={this.handleFocus.bind(this)}>
                <Sprite/>
                {this.renderEnemies()}
                <span style={nextLvlStyle}>Next Level</span>
            </div>
        )
    }
}

Board = connect((state) => ({sprite: state.sprite}))(Board);

export default Board;