const initialState = {
    products: []
}

const product = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_PRODUCTS_REJECTED' :
            return {
                ...state,
                isLoading: true
            }
        case 'GET_PRODUCTS_FULFILLED' :
            return {
                ...state,
                isLoading: false,
                products: action.payload.data.result
            }
        default:
            return state
    }
}

export default product