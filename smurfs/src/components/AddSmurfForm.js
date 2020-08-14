import React, {useState} from 'react'

import { connect } from 'react-redux'
import { postSmurf } from '../utils/actions'


const initialformValues = {
    name: '',
    age: '',
    height: ''
}

export const AddSmurfForm = (props) => {
    const [formValues, setFormValues] = useState(initialformValues)

    const handleFormChange = e => {
        setFormValues(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newSmurf = {
            name:'smurf',
            age:'30',
            height:'6cm',
            id: "2"
        }
        console.log(newSmurf)
        props.postSmurf(newSmurf)
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

export default connect(null, {postSmurf})(AddSmurfForm);