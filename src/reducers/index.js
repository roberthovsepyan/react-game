import {combineReducers} from 'redux';
import sprite from './sprite';
import enemy from './enemy';

export const allReducers = combineReducers({
    sprite,
    enemy
});