import React from 'react';

const validateText = (props) => {
    const output = props.textLength < 5 ? "Text too short" : "Text long enough";
    
    return (
        <p>{output}</p>
    );
}

export default validateText;
