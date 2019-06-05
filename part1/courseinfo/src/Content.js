
import React from 'react';

import Part from './Part';

const Content = (props) => {

    return (
        <>
        <Part part={props.parts[0]} exerciseNumber={props.exerciseNumbers[0]}/>
        <Part part={props.parts[1]} exerciseNumber={props.exerciseNumbers[1]}/>
        <Part part={props.parts[2]} exerciseNumber={props.exerciseNumbers[2]}/>
        
        </>
    )
}

export default Content;