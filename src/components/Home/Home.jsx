import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const previousData = useLoaderData()
    const loaderData = previousData.data;
    console.log(loaderData);
    return (
        <div className='container'>
            <h1 className='my-5 text-success fw-bold'>You can improve your learning by doing this simple quiz which is help to grow your basic knowledge</h1>
            {
                loaderData.map(data => <Quiz
                key={data.id}
                data={data}
                ></Quiz>)
            }
        </div>
    );
};

export default Home;