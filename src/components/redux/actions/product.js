import axios from 'axios'
require ('dotenv').config()

export const getProducts= (data) => {
    return {
        type: 'GET_PRODUCTS',
        payload: axios({
            method: 'GET',
            url: `http://localhost:3006/product?limit=6`,
        })
    }
}

