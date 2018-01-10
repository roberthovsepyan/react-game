export const changeEnemyY = (id) => {
    return {
        type: 'CHANGE_ENEMY_Y',
        payload: id
    }
};

export const changeEnemyX = (id) => {
    return {
        type: 'CHANGE_ENEMY_X',
        payload: id
    }
};

export const changeEnemyVY = (id) => {
    return {
        type: 'CHANGE_ENEMY_VY',
        payload: id
    }
};

export const changeEnemyVX = (id) => {
    return {
        type: 'CHANGE_ENEMY_VX',
        payload: id
    }
};

export const createEnemy = (enemy) => {
    return {
        type: 'CREATE_ENEMY',
        payload: enemy
    }
};