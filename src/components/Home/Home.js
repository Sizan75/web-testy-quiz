import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizzes';
import Lottie from 'lottie-react'
import quizAnimation from '../../assets/quiz.json';

const Home = () => {
    const quiz= useLoaderData();
    const {data}= quiz;
    

    return (
        <div>
            
            
        <div className= ' relative lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-80'>
            <Lottie animationData={quizAnimation} loop={true} />
          </div>
      </div>
      
    
           
        <div className='grid sm:grid-cols-2 gap-4 mt-24 ml-12'>
            {
                data.map(quizzes =><Quizzes key={quizzes.id}
                quizzes={quizzes}></Quizzes> )
            }
        </div>
        </div>
    );
};

export default Home;