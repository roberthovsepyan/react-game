export const changeEnemyY = (num) => {
    return {
        type: 'CHANGE_ENEMY_Y',
        payload: num
    }
};

export const changeEnemyVY = () => {
    return {
        type: 'CHANGE_ENEMY_VY',
    }
};

export const createEnemy = (x, y, speed) => {
    return {
        type: 'CREATE_ENEMY',
        payload: {x, y, speed}
    }
};