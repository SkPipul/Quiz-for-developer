import React from 'react';
import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizDetails = ({ quizAll, index, quizName }) => {
    const { question, options, correctAnswer } = quizAll;
    // console.log(quizAll);

    const handleAnswer = () => {
        // console.log(correctAnswer);
        toast.success(correctAnswer, {
            position: "top-center"
        })

    }

    function handleCorrect(answer) {
        // console.log(answer);
        if (correctAnswer === answer) {
            // console.log("done");
            toast.success("Wow!! you choose the correct answer", {
                position: "top-center"
            })
        }
        else {
            toast.error('Ops! your answer is incorrect', {
                position: "top-center"
            })
        }
    }

    return (
        <div>
            <div className='container my-5'>
                <h4><span className='text-primary'>Q:{index + 1}</span> {question}</h4>
                <i onClick={handleAnswer} class="fa-solid fa-eye my-2 text-success"></i>
                <ToastContainer />
                {
                    options.map(option => <Option
                        key={option.id}
                        option={option}
                        correctAnswer={correctAnswer}
                        handleCorrect={handleCorrect}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;