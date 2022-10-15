import React from 'react';
import './Option.css'

const Option = ({ option, handleCorrect }) => {
    // console.log(option);
    return (
            <div class="row gx-5 w-75 mx-auto">
                <div class="col">
                    <div class="p-3 border bg-light option">
                        <input className='mx-1' onClick={() => handleCorrect(option)} type="radio" id="child" name="age" value="child" />
                        <label for="child"><small>{option}</small></label>
                    </div>
                </div>
            </div>
    
            );
};

            export default Option;