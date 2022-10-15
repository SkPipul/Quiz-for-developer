import React from 'react';

const Option = ({ option, handleCorrect }) => {
    // console.log(option);
    return (
        <div>
            <div class="row gx-5 w-50 mx-auto">
                <div class="col">
                    <div class="p-3 border bg-light">
                        <input className='mx-1' onClick={() => handleCorrect(option)} type="radio" id="child" name="age" value="child" />
                        <label for="child"><small>{option}</small></label>
                    </div>
                </div>
            </div>
                {/* <div>
                    <input className='mx-1' onClick={() => handleCorrect(option)} type="radio" id="child" name="age" value="child" />
                    <label for="child"><small>{option}</small></label>
                </div> */}
            </div>
            );
};

            export default Option;