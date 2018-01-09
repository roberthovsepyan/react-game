import React, {Component} from 'react';
import {connect} from 'react-redux';
import uniqueId from 'lodash.uniqueid';

import {store} from '../index';
import {changeEnemyY, changeEnemyVY, createEnemy} from '../actions/enemy';

let animation;

class Enemy extends Component {

    componentDidMount () {
        this.loop();
        store.dispatch(createEnemy(this.props.x, this.props.y));
    };

    componentWillReceiveProps (nextProps) {
        if (this.props.sprite.level !== nextProps.sprite.level) {
            store.dispatch(createEnemy(nextProps.x, nextProps.y));
        }
    };

    componentWillUnmount () {
        cancelAnimationFrame(animation);
    };

    loop () {
        if (this.props.enemy.y>380 || this.props.enemy.y<0) {store.dispatch(changeEnemyVY());}
        store.dispatch(changeEnemyY(this.props.speed));

        animation = requestAnimationFrame(this.loop.bind(this));
    };

    render () {
        const style={
            backgroundColor: 'black',
            width: 20,
            height: 20,
            position: 'absolute',
            top: this.props.enemy.y,
            left: this.props.enemy.x,
            borderRadius: 4,
            //transform: 'rotate(45deg)'
        };

        return (
            <span style={style} />
        );
    }
}

Enemy = connect((state) => ({enemy: state.enemy, sprite: state.sprite}))(Enemy);

export default Enemy;