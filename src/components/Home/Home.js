import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizzes from '../Quizzes/Quizzes';
import Lottie from 'lottie-react'
import quizAnimation from '../../assets/quiz.json';

const Home = () => {
    // chatching data from loader 
    const quiz= useLoaderData();
    const {data}= quiz;
    

    return (
        <div >
          <div className='grid sm:grid-cols-2'> 
          <div >
                <h1 className="text-blue-800 mb-4 font-sans font-medium text-3xl pt-8 pl-8">Test Your Skill</h1>
                <h1 className="text-blue-800 mb-4 font-sans font-medium text-2xl pt-2 pl-8">Those quizes make your <br></br>knowledge stong.</h1>
            </div>
            
            {/* showing animation  */}
        <div className= ' relative lg:w-1/2 '>
          <div className='w-full  lg:w-4/5 lg:ml-auto h-64  sm:h-64'>
            <Lottie animationData={quizAnimation} loop={true} />
          </div>
      </div>
             </div>
        <div className='grid sm:grid-cols-2 gap-4 mt-20 sm:ml-40'>
            {
                // maping quiz data 
                data.map(quizzes =><Quizzes key={quizzes.id}
                quizzes={quizzes}></Quizzes> )
            }
        </div>
        </div>
    );
};

export default Home;