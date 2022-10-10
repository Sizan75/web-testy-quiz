import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizzes';

const Home = () => {
    const quiz= useLoaderData();
    const {data}= quiz;
    console.log(data)

    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                data.map(quizzes =><Quizzes key={quizzes.id}
                quizzes={quizzes}></Quizzes> )
            }
        </div>
    );
};

export default Home;