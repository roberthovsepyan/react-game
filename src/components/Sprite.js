import React, {Component} from 'react';
import {connect} from 'react-redux';

import {store} from '../index';
import {changeSpriteX, changeSpriteY, refreshSprite, changeLevel, refreshLevel} from '../actions/sprite';
import {openGameOver, openGameCompleted} from '../actions/dialogs';

let animation;

class Sprite extends Component {

    componentDidMount () {
        this.loop();
    };

    componentWillUnmount () {
        cancelAnimationFrame(animation)
    };

    loop () {
        //adding movement
        if (this.props.keys['ArrowRight'] && this.props.x<779) {store.dispatch(changeSpriteX(5))}
        if (this.props.keys['ArrowLeft'] && this.props.x>0) {store.dispatch(changeSpriteX(-5))}
        if (this.props.keys['ArrowDown'] && this.props.y<380) {store.dispatch(changeSpriteY(5))}
        if (this.props.keys['ArrowUp'] && this.props.y>0) {store.dispatch(changeSpriteY(-5))}

        //going to the next level
        if (this.props.x+20>700 && this.props.y+20>180 && this.props.y-20<220) {
            store.dispatch(refreshSprite());
            store.dispatch(changeLevel(1));
        }

        //completing the game
        if (this.props.level>10) {
            store.dispatch(openGameCompleted());
            store.dispatch(refreshSprite());
            store.dispatch(refreshLevel());
        }

        //adding collision
        this.props.enemies.forEach((enemy) => {
            if (this.props.level===enemy.level) {
                if (this.props.x+20>enemy.x && this.props.x-20<enemy.x &&
                    this.props.y+20>enemy.y && this.props.y-20<enemy.y) {
                    store.dispatch(openGameOver());
                    store.dispatch(refreshSprite());
                    store.dispatch(refreshLevel());
            }
        }});

        animation = requestAnimationFrame(this.loop.bind(this));
    };

    render () {
        const style={
            backgroundColor: 'green',
            width: 20,
            height: 20,
            position: 'absolute',
            top: this.props.y,
            left: this.props.x,
            borderRadius: 4
        };
        return (
            <span style={style}/>
        );
    }
}

Sprite = connect((state) => ({enemies: state.enemies}))(Sprite);

export default Sprite;