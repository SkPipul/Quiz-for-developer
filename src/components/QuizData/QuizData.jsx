import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const QuizData = () => {
    const quiz = useLoaderData();
    const quizQuestion = quiz.data.questions;
    // console.log(quizQuestion);
    return (
        <div>
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