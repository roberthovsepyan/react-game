import {combineReducers} from 'redux';
import sprite from './sprite';
import enemies from './enemies';
import utilities from './utilities';

export const allReducers = combineReducers({
    sprite,
    enemies,
    utilities
});