import React from 'react';
import { Link } from 'react-router-dom';

const Quizzes = ({ quizzes }) => {
    const { name, logo, total, id } = quizzes;
    return (
        <div className=''>
            <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-black-800 border-solid border-1 border-indigo-600  ">
                <Link to="/quiz">
                   <img src={logo} alt="" className=' p-8 rounded-t-lg' />
                </Link>
                <div class="px-5 pb-5">
                    <Link to="/quiz">
                        <h5 className="text-3xl font-bold text-gray-900 dark:text-white" >{name}</h5>
                    </Link>
                    <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">TotalQuiz: {total}</span>

                    <div className="flex justify-between items-center">
                        <Link to="/quiz" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start Quiz</Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Quizzes;