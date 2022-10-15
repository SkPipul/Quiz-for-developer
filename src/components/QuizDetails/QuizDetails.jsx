import React from 'react';
import Option from '../Option/Option';

const QuizDetails = ({quizAll}) => {
    const {question, options} = quizAll;
    console.log(quizAll);
    return (
        <div>
            <h4>Q: {question}</h4>
            {
                options.map(option => <Option
                    option={option}
                ></Option>)
            }
        </div>
    );
};

export default QuizDetails;