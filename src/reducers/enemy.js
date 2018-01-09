export default function (state={vy: 1}, action) {
    switch (action.type) {
        case 'CREATE_ENEMY':
            return {...state, x: action.payload.x, y: action.payload.y};
        case 'CHANGE_ENEMY_Y':
            return {...state, y: state.y+action.payload*state.vy};
        case 'CHANGE_ENEMY_VY':
            return {...state, vy: state.vy*-1};
        default:
            return state;
    }
}