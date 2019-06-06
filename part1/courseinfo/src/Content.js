
import React from 'react';

import Part from './Part';

const Content = (props) => {

    return (
        <>
        <Part part={props.parts[0].name} exerciseNumber={props.parts[0].exercises}/>
        <Part part={props.parts[1].name} exerciseNumber={props.parts[1].exercises}/>
        <Part part={props.parts[2].name} exerciseNumber={props.parts[2].exercises}/>
        
        </>
    )
}

export default Content;