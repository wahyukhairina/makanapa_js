export const addCart = (data) => {
    return {
        type: 'ADD_CART',
        payload: data
    }
}

export const addQty = (cart) => {
    return {
        type: 'ADD_QTY',
        payload: cart
    }
}

export const removeItem = (id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: id
    }
}

export const removeCart = (cart) => {
    return {
        type: 'REMOVE_CART',
        payload: cart
    }
}