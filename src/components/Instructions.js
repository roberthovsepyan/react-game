import React from 'react';
import Arrows from '../arrowKeys.png'

export const Instructions = () => {
    const style = {
        marginTop: 7,
        color: '#1A237E',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };
    const headingStyle = {
        marginRight: 20
    };

    return (
        <div style={style}>
            <h2 style={headingStyle}>Use Arrow Keys To Move</h2>
            <img src={Arrows} alt='Arrow Keys'/>
        </div>
    );
};