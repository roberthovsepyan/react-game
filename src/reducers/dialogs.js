export default function (state={isGameOver: false, isGameCompleted: false}, action) {
    switch (action.type) {
        case 'CLOSE_GAME_OVER':
            return {...state, isGameOver: false};
        case 'OPEN_GAME_OVER':
            return {...state, isGameOver: true};
        case 'CLOSE_GAME_COMPLETED':
            return {...state, isGameCompleted: false};
        case 'OPEN_GAME_COMPLETED':
            return {...state, isGameCompleted: true};
        default:
            return state;
    }
}