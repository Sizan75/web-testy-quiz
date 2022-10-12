import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const QuizData = ({ questionData }) => {
    // console.log(questionData)
    const { options, question, correctAnswer, id } = questionData;
    
    const handleCorrectAnswer = (option) => {
       
        if (correctAnswer === option) {   
            toast.success("Answer is Correct");
        }
        else {
            toast.error("Answer is Wrong");
        }
    }
      const handleShowAnswer = (correctAnswer) => {
        const correctAns = correctAnswer;
        toast.success(correctAns);
    }

    return (
        <div>
            <div className='sm:flex items-center justify-center  '>
                <h1 className="text-gray-800 mb-4 dark:text-white font-sans font-medium text-xl pt-8 pl-8 mr-10">Question  : {question.substring(3, question.length - 4)}</h1>
                <Link>
                    <button onClick={() => handleShowAnswer(correctAnswer)}><FontAwesomeIcon icon={faEye} /></button>
                </Link>
            </div>
            <div className='grid sm:grid-cols-2 '>
                {
                    options.map(option => <div className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center" onClick={() => handleCorrectAnswer(option)}>

                        <input
                            type="radio"
                            name={id}
                            value={option}
                            className="ml-5 dark:bg-gray-800"
                        />
                        <label className="text-black dark:text-white text-lg ml-4">
                            {option}
                        </label>
                        <ToastContainer
                            position="top-center"
                            reverseOrder={false}
                            autoClose={4000}
                        />
                    </div>)
                }
            </div>
        </div>

    );
};

export default QuizData;