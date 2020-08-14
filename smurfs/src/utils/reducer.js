import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, POST_SMURF } from './actions'


const initialState = {
    smurfs: [{"name":"Brainey","age":200,"height":"5cm","id":0}],
    isLoading: false, 
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START: 
            return {
                state
            }
        case FETCH_SMURF_SUCCESS: 
            return {
                state
            }
        case POST_SMURF:
            return {
                state
            }
        default: 
            return state         
    }
}