import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizData = () => {
    const quiz = useLoaderData();
    const quizData = quiz.data;
    console.log(quiz.data);
    const {id} = quizData;
    return (
        <div>
            <h1>quiz qiz quiz: {id}</h1>
        </div>
    );
};

export default QuizData;