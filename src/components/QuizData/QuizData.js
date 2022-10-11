import React from 'react';

const QuizData = ({questionData}) => {
    console.log(questionData)
    const {options, question}= questionData;

    return (
        <div>
            <h1>{question}</h1>
            {
                options.map(option => <div>{option} </div>)
            }
        </div>
    );
};

export default QuizData;