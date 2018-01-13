import React, {Component} from 'react';
import {connect} from 'react-redux';

import {store} from '../index';
import {addKey, disableKey} from '../actions/sprite';
import {addBorder, removeBorder} from '../actions/utilities';
import Sprite from './Sprite';
import EnemyStandard from './EnemyStandard';
import EnemyZigzag from './EnemyZigzag';
import EnemyLong from './EnemyLong';

class Board extends Component {
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
                else if (enemy.id.split('_')[0] === 'long') {
                    enemies.push(<EnemyLong id={enemy.id} key={enemy.id} x={enemy.x} y={enemy.y}/>)
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
            outline: this.props.utilities.outline,
            border: this.props.utilities.border
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

Board = connect((state) => ({sprite: state.sprite, enemies: state.enemies, utilities: state.utilities}))(Board);

export default Board;