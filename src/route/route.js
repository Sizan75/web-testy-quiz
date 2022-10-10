import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import Quiz from "../components/Quiz/Quiz";


export const router= createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Home></Home>

            },
            {
                path: 'quiz/:quizId',
                loader: async (params) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element:<Quiz></Quiz>

            }
        ]
    }
])