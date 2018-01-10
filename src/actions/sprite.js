export const addKey = (key) => {
    return {
        type: 'ADD_KEY',
        payload: key
    }
};

export const disableKey = (key) => {
    return {
        type: 'DISABLE_KEY',
        payload: key
    }
};

export const disableOutline = () => {
    return {
        type: 'DISABLE_OUTLINE'
    }
};

export const changeSpriteX = (num) => {
    return {
        type: 'CHANGE_SPRITE_X',
        payload: num
    }
};

export const changeSpriteY = (num) => {
    return {
        type: 'CHANGE_SPRITE_Y',
        payload: num
    }
};

export const refreshSprite = () => {
    return {
        type: 'REFRESH_SPRITE'
    }
};

export const changeLevel = (num) => {
    return {
        type: 'CHANGE_LEVEL',
        payload: num
    }
};

export const refreshLevel = () => {
    return {
        type: 'REFRESH_LEVEL'
    }
};