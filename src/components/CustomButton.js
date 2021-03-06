import React from 'react';

const CustomButton = (props) => {
    return (
        <div>
            <button  onClick={props.onClick}>
                {
                    props.title
                }
            </button>
        </div>
    );
};

export default CustomButton;
