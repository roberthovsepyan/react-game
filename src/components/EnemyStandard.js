import React, {Component} from 'react';

import {store} from '../index';
import {changeEnemyY, changeEnemyVY} from '../actions/enemies';

let animation;

class EnemyStandard extends Component {

    componentDidMount () {
        this.loop();
    };

    componentWillUnmount () {
        cancelAnimationFrame(animation);
    };

    loop () {
        if (this.props.y > 380 || this.props.y < 0) {
            store.dispatch(changeEnemyVY(this.props.id));
        }
        store.dispatch(changeEnemyY(this.props.id));

        animation = requestAnimationFrame(this.loop.bind(this));
    };

    render () {
        const style={
            backgroundColor: 'black',
            width: 20,
            height: 20,
            position: 'absolute',
            top: this.props.y,
            left: this.props.x,
            borderRadius: 4,
        };

        return (
            <span style={style} />
        );
    }
}


export default EnemyStandard;