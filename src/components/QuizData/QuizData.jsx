import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const QuizData = () => {
    const quiz = useLoaderData();
    const quizQuestion = quiz.data.questions;
    const quizName = quiz.data.name;
    // console.log(quizQuestion);
    // console.log(quiz);
    return (
        <div>
            <h2 className='text-primary mt-4'>Quiz of {quizName}</h2>
            {
                quizQuestion.map((quizAll, index) => <QuizDetails
                    key={quizAll.id}
                    quizAll={quizAll}
                    index={index}
                ></QuizDetails>)
            }
        </div>
    );
};

export default QuizData;