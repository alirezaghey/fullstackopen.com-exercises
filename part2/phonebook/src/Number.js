import React from 'react';

const Number = ({number}) => {
    return (
        <div>
            {number.name}: {number.phone}
        </div>
    );
};

export default Number;