import React, {useState} from 'react'
import axios from 'axios'
import { postSmurf } from '../utils/actions'

export const POST_SMURF = 'POST_SMURF'

const initialformValues = {
    name: '',
    age: '',
    height: ''
}

export const postNewSmurf = (smurf) => dispatch => {
    axios
        .post('http://localhost:3333/smurfs', {
            ...smurf
        })
        .then( res => {
            console.log(res)
        })
        .catch( err => console.log(err))

    dispatch({ type: POST_SMURF, payload: smurf})
}


export const AddSmurfForm = (props) => {
    
    const [formValues, setFormValues] = useState(initialformValues)

    const handleFormChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newSmurf = {
            ...formValues,
            id: Math.floor(Math.random()*1000)+1
        }

        postNewSmurf(newSmurf)
        setFormValues(initialformValues)

        axios
        .post('http://localhost:3333/smurfs', {
            ...newSmurf
        })
        .then( res => {
            console.log(res)
        })
        .catch( err => console.log(err))
    }

    return (  
            <form className = 'smurf-card' onSubmit={handleSubmit}>
            <h2>Add a Smurf</h2>
                <label htmlFor='nameInput'>
                    <input
                    value={formValues.name}
                    placeholder='Add Smurf Name'
                    onChange={handleFormChange}
                    name='name'
                    id='nameInput'
                    />
                </label>
                <label htmlFor= 'ageInput'>
                    <input
                    value={formValues.age}
                    placeholder='add Smurf Age'
                    onChange={handleFormChange}
                    name='age'
                    id='ageInput'

                    />
                </label>
                <label htmlFor='heightInput'>
                    <input
                    value={formValues.height}
                    placeholder='add Smurf Height'
                    onChange={handleFormChange}
                    name='height'
                    id='heightInput'
                    />
                </label>
                <button>Add Smurf!</button>
            </form>
    )
}
