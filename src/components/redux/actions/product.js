import axios from 'axios'
require ('dotenv').config()

export const getProducts= (data) => {
    const data1 = data || ''
    return {
        type: 'GET_PRODUCTS',
        payload: axios({
            method: 'GET',
            url: `http://54.198.242.235/pos/product?category=${data1}`,
        })
    }
}

