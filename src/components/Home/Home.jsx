import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);
    return (
        <div>
            <h1>this is home</h1>
        </div>
    );
};

export default Home;