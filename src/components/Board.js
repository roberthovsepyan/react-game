import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {store} from '../index';
import {addKey, disableKey, disableOutline} from '../actions/sprite';
import {createEnemy} from '../actions/enemies';
import Sprite from './Sprite';
import EnemyStandard from './EnemyStandard';
import EnemyZigzag from './EnemyZigzag';

class Board extends Component {

    //to focus the Board automatically
    componentDidMount () {
        this.focusDiv();
        this.createEnemies();
    };

    createEnemies () {
        store.dispatch(createEnemy({x: 400, y: 0, vy: 1, speedY: 10, id: 'standard_1', level: 1}));
        store.dispatch(createEnemy({x: 200, startX: 200, y: 0, vy: 1, vx: 1, speedY: 5, speedX: 2, id: 'zigzag_1', level: 1}));
        store.dispatch(createEnemy({x: 300, startX:300, y: 0, vy: 1, vx: 1, speedY: 15, speedX: 5, id: 'zigzag_2', level: 2}));
        store.dispatch(createEnemy({x: 500, y: 0, vy: 1, speedY: 20, id: 'standard_2', level: 2}));
    };

    focusDiv () {
        ReactDOM.findDOMNode(this.refs.board).focus();
    };

    handleDown (e) {
        //so that arrow keys don't scroll the page
        if (e.key==='ArrowUp' || e.key==='ArrowDown' || e.key==='ArrowLeft' || e.key==='ArrowRight') {
            e.preventDefault();
        }
        store.dispatch(addKey(e.key));
    };

    handleUp (e) {
        store.dispatch(disableKey(e.key));
    };

    handleFocus () {
        store.dispatch(disableOutline());
    };

    renderEnemies () {
        let enemies=[];
        this.props.enemies.forEach((enemy) => {
            if (enemy.level===this.props.sprite.level) {
                if (enemy.id.split('_')[0] === 'standard') {
                    enemies.push(<EnemyStandard id={enemy.id} key={enemy.id} x={enemy.x} y={enemy.y}
                                                spriteX={this.props.sprite.x} spriteY={this.props.sprite.y}/>)
                }
                else if (enemy.id.split('_')[0] === 'zigzag') {
                    enemies.push(<EnemyZigzag id={enemy.id} key={enemy.id} x={enemy.x} y={enemy.y} startX={enemy.startX}
                                              spriteX={this.props.sprite.x} spriteY={this.props.sprite.y}/>)
                }
            }
        });
        return enemies;
    };

    render () {
        const style = {
            backgroundColor: 'white',
            width: 800,
            height: 400,
            borderRadius: 4,
            position: 'relative',
            outline: this.props.sprite.outline
        };

        const nextLvlStyle = {
            position: 'absolute',
            width: 100,
            height: 40,
            top: 180,
            left: 700,
            backgroundColor: '#311B92',
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            borderRadius: 2
        };
        return (
            <div ref='board' style={style} tabIndex={0} onKeyDown={this.handleDown.bind(this)}
                 onKeyUp={this.handleUp.bind(this)} onFocus={this.handleFocus.bind(this)}>
                <Sprite x={this.props.sprite.x} y={this.props.sprite.y} keys={this.props.sprite.keys}/>
                {this.renderEnemies()}
                <span style={nextLvlStyle}>Next Level</span>
            </div>
        )
    }
}

Board = connect((state) => ({sprite: state.sprite, enemies: state.enemies}))(Board);

export default Board;