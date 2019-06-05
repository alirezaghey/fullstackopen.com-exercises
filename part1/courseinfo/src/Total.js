import React from 'react'

const Total = (props) => {
    return (
        <p>Number of exercises {props.exerciseNumbers[0] + props.exerciseNumbers[1] + props.exerciseNumbers[2]}</p>
    )

}

export default Total;