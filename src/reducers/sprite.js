export default function (state={keys: {}, x: 0, y: 190, level: 1}, action) {
    switch (action.type) {
        case 'DISABLE_OUTLINE':
            return {...state, outline: 'none'};
        case 'ADD_KEY': {
            let keys = {...state.keys};
            keys[action.payload] = true;
            return {...state, keys: keys};
        }
        case 'DISABLE_KEY': {
            let keys = {...state.keys};
            keys[action.payload] = false;
            return {...state, keys: keys};
        }
        case 'CHANGE_SPRITE_X':
            return {...state, x: state.x+action.payload};
        case 'CHANGE_SPRITE_Y':
            return {...state, y: state.y+action.payload};
        case 'REFRESH_SPRITE':
            return {...state, x: 0, y: 190, keys: {}};
        case 'CHANGE_LEVEL':
            return {...state, level: state.level+action.payload};
        case 'REFRESH_LEVEL':
            return {...state, level: 1};
        default:
            return state;
    }
}