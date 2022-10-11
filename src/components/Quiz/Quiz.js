import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from '../QuizData/QuizData';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {questions,name}=quiz;
    
    return (
        <div>
             <h1 className="text-blue-800 mb-4 font-sans font-medium text-4xl pt-8 pl-8">Quiz of  {name}</h1>
            {
                questions.map(questionData => 
                    <QuizData
                    key={questionData.id}
                    questionData={questionData}                   
                    ></QuizData>
                    )
            }
        </div>
    );
};

export default Quiz;