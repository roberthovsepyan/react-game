import React, {Component} from 'react';

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
        if (this.props.keys['ArrowRight'] && this.props.x<779) {store.dispatch(changeSpriteX(5))}
        if (this.props.keys['ArrowLeft'] && this.props.x>0) {store.dispatch(changeSpriteX(-5))}
        if (this.props.keys['ArrowDown'] && this.props.y<380) {store.dispatch(changeSpriteY(5))}
        if (this.props.keys['ArrowUp'] && this.props.y>0) {store.dispatch(changeSpriteY(-5))}

        if (this.props.x+20>700 && this.props.y+20>180 && this.props.y-20<220) {
            store.dispatch(refreshSprite());
            store.dispatch(changeLevel(1));
        }

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


export default Sprite;