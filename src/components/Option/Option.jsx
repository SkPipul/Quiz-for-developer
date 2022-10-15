import React from 'react';

const Option = ({option, handleCorrect}) => {
    // console.log(option);
    return (
        <div>
            <input onClick={() => handleCorrect(option)} type="radio" />
            <small>{option}</small>
        </div>
    );
};

export default Option;