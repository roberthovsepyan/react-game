import React, {Component} from 'react';
import {connect} from 'react-redux';

import {store} from '../index';
import {addKey, disableKey, addBorder, removeBorder} from '../actions/sprite';
import {createEnemy} from '../actions/enemies';
import Sprite from './Sprite';
import EnemyStandard from './EnemyStandard';
import EnemyZigzag from './EnemyZigzag';

class Board extends Component {

    componentDidMount () {
        this.createEnemies();
    };

    createEnemies () {
        store.dispatch(createEnemy({x: 400, y: 0, vy: 1, speedY: 10, id: 'standard_1', level: 1}));
        store.dispatch(createEnemy({x: 200, startX: 200, y: 0, vy: 1, vx: 1, speedY: 5, speedX: 2, id: 'zigzag_1', level: 1}));
        store.dispatch(createEnemy({x: 300, startX:300, y: 0, vy: 1, vx: 1, speedY: 15, speedX: 5, id: 'zigzag_2', level: 2}));
        store.dispatch(createEnemy({x: 500, y: 0, vy: 1, speedY: 20, id: 'standard_2', level: 2}));
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
        store.dispatch(addBorder());
    };

    handleBlur () {
        store.dispatch(removeBorder());
    };

    renderEnemies () {
        let enemies=[];
        this.props.enemies.forEach((enemy) => {
            if (enemy.level===this.props.sprite.level) {
                if (enemy.id.split('_')[0] === 'standard') {
                    enemies.push(<EnemyStandard id={enemy.id} key={enemy.id} x={enemy.x} y={enemy.y}/>)
                }
                else if (enemy.id.split('_')[0] === 'zigzag') {
                    enemies.push(<EnemyZigzag id={enemy.id} key={enemy.id} x={enemy.x} y={enemy.y} startX={enemy.startX}/>)
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
            outline: this.props.sprite.outline,
            border: this.props.sprite.border
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
            <div style={style} tabIndex={0} onKeyDown={this.handleDown.bind(this)} onKeyUp={this.handleUp.bind(this)}
                 onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)}>
                <Sprite x={this.props.sprite.x} y={this.props.sprite.y} keys={this.props.sprite.keys} level={this.props.sprite.level}/>
                {this.renderEnemies()}
                <span style={nextLvlStyle}>{this.props.sprite.level===10 ? 'End' : 'Next Level'}</span>
            </div>
        )
    }
}

Board = connect((state) => ({sprite: state.sprite, enemies: state.enemies}))(Board);

export default Board;