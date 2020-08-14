import React, {useState} from 'react'
import axios from 'axios'

import { postSmurf } from '../utils/actions'
import { connect } from 'react-redux'

const initialformValues = {
    name: '',
    age: '',
    height: '',
    id:Math.random()
}

const AddSmurfForm = (props) => {
    
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
    
        props.postSmurf(formValues)
        
        setFormValues(initialformValues)
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

export default connect(null, {postSmurf})(AddSmurfForm)