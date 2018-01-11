import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    renderLevels () {
        let levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let display = [];
        levels.forEach((level) => {
            const style = {
                backgroundColor: this.props.sprite.level===level ? 'green' :'#311B92',
                marginRight: 5,
                padding: 5,
                color: 'white',
                borderRadius: 2,
                fontSize: 'large'
            };
            display.push(<span style={style} key={level}>{level}</span>);
        });
        return display;
    };

    render () {
        const style = {
            marginBottom: 30,
            textAlign: 'center',
        };

        const headingStyle = {
            marginBottom: 30,
            color: '#1A237E'
        };

        return (
            <div style={style}>
                <h1 style={headingStyle}>React Game</h1>
                {this.renderLevels()}
            </div>
        );
    }
}

Header = connect((state) => ({sprite: state.sprite}))(Header);

export default Header;