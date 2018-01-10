export default function (state=[], action) {
    switch (action.type) {
        case 'CREATE_ENEMY':
            return [...state, action.payload];
        case 'CHANGE_ENEMY_Y':
            return state.map((enemy) => {
                if (action.payload !== enemy.id) {
                    return enemy;
                }
                else {
                    return {...enemy, y: enemy.y+enemy.speedY*enemy.vy}
                }
            });
        case 'CHANGE_ENEMY_X':
            return state.map((enemy) => {
                if (action.payload !== enemy.id) {
                    return enemy;
                }
                else {
                    return {...enemy, x: enemy.x+enemy.speedX*enemy.vx}
                }
            });
        case 'CHANGE_ENEMY_VY':
            return state.map((enemy) => {
                if (action.payload !== enemy.id) {
                    return enemy;
                }
                else {
                    return {...enemy, vy: enemy.vy*-1}
                }
            });
        case 'CHANGE_ENEMY_VX':
            return state.map((enemy) => {
                if (action.payload !== enemy.id) {
                    return enemy;
                }
                else {
                    return {...enemy, vx: enemy.vx*-1}
                }
            });
        default:
            return state;
    }
}