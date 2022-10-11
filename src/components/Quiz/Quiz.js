import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from '../QuizData/QuizData';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const {questions}=quiz
    
    
    
   
    return (
        <div>
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