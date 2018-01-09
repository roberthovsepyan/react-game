import React, {Component} from 'react';
import {connect} from 'react-redux';

import {store} from '../index';
import {changeSpriteX, changeSpriteY, refreshSprite, changeLevel} from '../actions/sprite';

let animation;

class Sprite extends Component {

    componentDidMount () {
        this.loop();
    };

    componentWillUnmount () {
        cancelAnimationFrame(animation)
    };

    loop () {
        if (this.props.sprite.keys['ArrowRight'] && this.props.sprite.x<779) {store.dispatch(changeSpriteX(5))}
        if (this.props.sprite.keys['ArrowLeft'] && this.props.sprite.x>0) {store.dispatch(changeSpriteX(-5))}
        if (this.props.sprite.keys['ArrowDown'] && this.props.sprite.y<380) {store.dispatch(changeSpriteY(5))}
        if (this.props.sprite.keys['ArrowUp'] && this.props.sprite.y>0) {store.dispatch(changeSpriteY(-5))}

        if (this.props.sprite.x+20>700 && this.props.sprite.y+20>180 && this.props.sprite.y-20<220) {
            store.dispatch(refreshSprite());
            store.dispatch(changeLevel(1));
        }

        if (this.props.sprite.x+20>this.props.enemy.x && this.props.sprite.x-20<this.props.enemy.x &&
            this.props.sprite.y+20>this.props.enemy.y && this.props.sprite.y-20<this.props.enemy.y) {
            alert('Game over');
            store.dispatch(refreshSprite());
        }

        animation = requestAnimationFrame(this.loop.bind(this));
    };

    render () {
        const style={
            backgroundColor: 'green',
            width: 20,
            height: 20,
            position: 'absolute',
            top: this.props.sprite.y,
            left: this.props.sprite.x,
            borderRadius: 4
        };
        return (
                <span style={style}/>
        );
    }
}

Sprite = connect((state) => ({sprite: state.sprite, enemy: state.enemy}))(Sprite);

export default Sprite;