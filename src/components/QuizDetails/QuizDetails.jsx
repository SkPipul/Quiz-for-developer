import React from 'react';
import Option from '../Option/Option';

const QuizDetails = ({quizAll, index}) => {
    const {question, options, correctAnswer} = quizAll;
    // console.log(quizAll);
    
    const handleAnswer = () => {
        console.log(correctAnswer);
    }

    function handleCorrect (answer) {
        // console.log(answer);
        if(correctAnswer === answer){
            console.log("done");
        }
        else{

        }
    }

    return (
        <div>
            <h4>Q:{index + 1} {question}</h4>
            <button onClick={handleAnswer}>show ans</button>
            {
                options.map(option => <Option
                    option={option}
                    correctAnswer={correctAnswer}
                    handleCorrect={handleCorrect}
                ></Option>)
            }
        </div>
    );
};

export default QuizDetails;