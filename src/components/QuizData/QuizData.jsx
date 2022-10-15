import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const QuizData = () => {
    const quiz = useLoaderData();
    const quizQuestion = quiz.data.questions;
    console.log(quizQuestion);
    return (
        <div>
            {
                quizQuestion.map(quizAll => <QuizDetails
                    key={quizAll.id}
                    quizAll={quizAll}
                ></QuizDetails>)
            }
        </div>
    );
};

export default QuizData;