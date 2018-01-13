import React, {Component} from 'react';

import {store} from '../index';
import {changeEnemyY, changeEnemyVY} from '../actions/enemies';
import Loop from '../Loop';

class EnemyLong extends Component {
    constructor () {
        super();
        this.Loop = new Loop();
    };

    componentDidMount () {
        this.Loop.subscribe(this.loop);
        this.Loop.start();
    };

    componentWillUnmount () {
        this.Loop.stop();
    };

    loop = () => {
        //changing velocity
        if (this.props.y + 60 >= 400 || this.props.y <= 0) {
            store.dispatch(changeEnemyVY(this.props.id));
        }
        store.dispatch(changeEnemyY(this.props.id));
    };

    render () {
        const style={
            backgroundColor: '#880E4F',
            width: 20,
            height: 60,
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


export default EnemyLong;