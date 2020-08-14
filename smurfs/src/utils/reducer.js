import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, POST_SMURF } from './actions'


const initialState = {
    smurfs: [],
    isLoading: false, 
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START: 
            return {
                ...state,
                isLoading: true
            }
        case FETCH_SMURF_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload
            }

        case POST_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }
        default: 
            return state         
    }
}