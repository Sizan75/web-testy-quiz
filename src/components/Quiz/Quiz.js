import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    const {questions}=quiz

    console.log(questions);
    console.log(quiz);
    return (
        <div>
            
        </div>
    );
};

export default Quiz;