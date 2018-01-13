import React, {Component} from 'react';

import {store} from '../index';
import {changeEnemyY, changeEnemyVY} from '../actions/enemies';
import Loop from '../Loop';

class EnemyStandard extends Component {
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
        if (this.props.y + 20 >= 400 || this.props.y <= 0) {
            store.dispatch(changeEnemyVY(this.props.id));
        }
        store.dispatch(changeEnemyY(this.props.id));
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