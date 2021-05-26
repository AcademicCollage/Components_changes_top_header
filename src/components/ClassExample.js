import React from 'react';

const ClassExample = (props) => {
    return (
        <div style={props.style}>
            {
                props.index
            }

        </div>
    );
};

export default ClassExample;
