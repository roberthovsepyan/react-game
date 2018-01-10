import {combineReducers} from 'redux';
import sprite from './sprite';
import enemies from './enemies';

export const allReducers = combineReducers({
    sprite,
    enemies
});