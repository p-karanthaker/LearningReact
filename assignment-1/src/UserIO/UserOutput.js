import React from 'react';
import './UserIO.css';

const userOutput = (props) => {
    return (
        <div className='User'>
            <p>Paragraph for user: {props.username}</p>
            <p>Paragraph 2 for user: {props.username}</p>
        </div>
    );
};

export default userOutput;
