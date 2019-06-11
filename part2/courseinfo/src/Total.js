import React from 'react'

const Total = ({exercises}) => {
    return (
        <p><b>Total number of exercises</b> {exercises.reduce((acc,el) => acc+el, 0)}</p>
    )

}

export default Total;