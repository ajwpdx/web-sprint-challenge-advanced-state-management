import React from 'react'

export const SmurfCard = (props) => {

    const { 
        smurf
    } = props
    return (
        <div className='smurf-card'>
            <h2>{smurf.name}</h2>
            <p>Age: {smurf.age}</p>
    <p>Height: {smurf.height}</p>
        </div>
    )
}



