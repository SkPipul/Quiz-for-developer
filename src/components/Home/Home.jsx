import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const previousData = useLoaderData()
    const loaderData = previousData.data;
    console.log(loaderData);
    return (
        <div>
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