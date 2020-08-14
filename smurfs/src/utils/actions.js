import axios from 'axios'

export const {FETCH_SMURF_START} = 'FETCH_SMURF_START'
export const {FETCH_SMURF_SUCCESS} = 'FETCH_SMURF_SUCCESS'
export const {POST_SMURF} = 'POST_SMURF'

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START })

    axios
        .get('http://localhost:3333/smurfs')
        .then( res => {
            console.log(res)
            dispatch({ type:FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch( err => console.log(err))
}

export const postSmurf = (smurf) => dispatch => {
    // const newSmurf = { name: smurf.name, age: smurf.age, height: smurfHeight, id: Math.floor(Math.random() * 1000) + 1 }
    console.log('post')

    dispatch({ type: POST_SMURF, payload: smurf})
}