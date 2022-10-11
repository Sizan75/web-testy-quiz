// import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const QuizData = ({questionData}) => {
    console.log(questionData)
    const {options, question, correctAnswer}= questionData;
    // const [correctAns, setCorrectAns]= useState([])

    const handleCorrectAnswer = (option) =>{
        if(correctAnswer === option){
            toast.success("Answer is Correct");

        }
        else{
            toast.error("Answer is Wrong");
    
        }
    }

    return (
        <div className='w-50% container'>
            <h1 className="text-gray-800 mb-4 dark:text-gray-300 font-sans font-medium text-xl pt-8 pl-8">Question: {question.substring(3, question.length-4)}</h1>
           <div className='grid grid-cols-2'>
           {
                options.map(option => <div className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center" onClick={()=> handleCorrectAnswer(option)}>
                    <input
                type="radio"
                name="answer"
                value={option}
                className="ml-5 dark:bg-gray-800"
            />
            <label className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                {option}
            </label>
            <ToastContainer  
            position="top-center"
            reverseOrder={false}/>
                     </div>)
            }
           </div>
        </div>
    );
};

export default QuizData;