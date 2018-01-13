const initialState = [
    {x: 350, y: 1, vy: 1, speedY: 8, id: 'standard_1', level: 1},
    {x: 250, y: 1, vy: 1, speedY: 8, id: 'standard_2', level: 2},
    {x: 500, y: 1, vy: 1, speedY: 10, id: 'standard_3', level: 2},
    {x: 200, startX: 200, y: 1, vy: 1, vx: 1, speedY: 5, speedX: 2, id: 'zigzag_1', level: 3},
    {x: 400, y: 1, vy: 1, speedY: 12, id: 'standard_4', level: 3},
    {x: 150, y: 1, vy: 1, speedY: 12, id: 'standard_5', level: 4},
    {x: 350, startX: 350, y: 1, vy: 1, vx: 1, speedY: 7, speedX: 3, id: 'zigzag_2', level: 4},
    {x: 500, y: 1, vy: 1,  speedY: 10, id: 'standard_6', level: 4},
    {x: 200, startX: 200, y: 1, vy: 1, vx: 1, speedY: 7, speedX: 3, id: 'zigzag_3', level: 5},
    {x: 400, y: 1, vy: 1, speedY: 6, id: 'long_1', level: 5},
    {x: 600, startX: 600, y: 1, vy: 1, vx: 1, speedY: 9, speedX: 4, id: 'zigzag_4', level: 5},
    {x: 150, y: 1, vy: 1, speedY: 8, id: 'long_2', level: 6},
    {x: 300, y: 1, vy: 1,  speedY: 12, id: 'standard_7', level: 6},
    {x: 450, startX: 450, y: 1, vy: 1, vx: 1, speedY: 10, speedX: 5, id: 'zigzag_5', level: 6},
    {x: 600, y: 1, vy: 1,  speedY: 12, id: 'standard_8', level: 6},
    {x: 150, startX: 150, y: 1, vy: 1, vx: 1, speedY: 11, speedX: 5, id: 'zigzag_6', level: 7},
    {x: 300, y: 1, vy: 1, speedY: 10, id: 'long_3', level: 7},
    {x: 450, startX: 450, y: 1, vy: 1, vx: 1, speedY: 12, speedX: 6, id: 'zigzag_7', level: 7},
    {x: 600, y: 1, vy: 1, speedY: 11, id: 'long_4', level: 7},
    {x: 100, y: 1, vy: 1,  speedY: 13, id: 'standard_9', level: 8},
    {x: 200, startX: 200, y: 1, vy: 1, vx: 1, speedY: 13, speedX: 6, id: 'zigzag_8', level: 8},
    {x: 325, y: 1, vy: 1, speedY: 12, id: 'long_5', level: 8},
    {x: 450, startX: 450, y: 1, vy: 1, vx: 1, speedY: 14, speedX: 7, id: 'zigzag_9', level: 8},
    {x: 600, y: 1, vy: 1,  speedY: 14, id: 'standard_10', level: 8},
    {x: 150, startX: 150, y: 1, vy: 1, vx: 1, speedY: 15, speedX: 7, id: 'zigzag_10', level: 9},
    {x: 250, y: 1, vy: 1,  speedY: 15, id: 'standard_11', level: 9},
    {x: 350, y: 1, vy: 1, speedY: 13, id: 'long_6', level: 9},
    {x: 450, y: 1, vy: 1,  speedY: 15, id: 'standard_12', level: 9},
    {x: 600, startX: 600, y: 1, vy: 1, vx: 1, speedY: 15, speedX: 7, id: 'zigzag_11', level: 9},
    {x: 100, y: 1, vy: 1,  speedY: 16, id: 'standard_13', level: 10},
    {x: 200, startX: 200, y: 1, vy: 1, vx: 1, speedY: 16, speedX: 8, id: 'zigzag_12', level: 10},
    {x: 300, y: 1, vy: 1, speedY: 14, id: 'long_7', level: 10},
    {x: 400, y: 1, vy: 1, speedY: 14, id: 'long_8', level: 10},
    {x: 500, startX: 500, y: 1, vy: 1, vx: 1, speedY: 16, speedX: 8, id: 'zigzag_13', level: 10},
    {x: 600, y: 1, vy: 1,  speedY: 16, id: 'standard_14', level: 10},
];


export default function (state=initialState, action) {
    switch (action.type) {
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