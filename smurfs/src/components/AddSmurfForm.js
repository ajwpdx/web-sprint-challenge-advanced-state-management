import React, {useState} from 'react'

const initialformValues = {
    name: '',
    age: '',
    height: ''
}

export const AddSmurfForm = () => {
    const [formValues, setFormValues] = useState(initialformValues)

    const handleFormChange = e => {
        setFormValues(e.target.value)
    }

    return (  
            <form className = 'smurf-card'>
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