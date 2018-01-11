import {combineReducers} from 'redux';
import sprite from './sprite';
import enemies from './enemies';
import modals from './dialogs';

export const allReducers = combineReducers({
    sprite,
    enemies,
    modals
});