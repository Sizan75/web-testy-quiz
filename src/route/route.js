import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErroPage/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";


export const router= createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element:<Home></Home>

            },
            {
                path: 'quiz/:quizId',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
                element:<Quiz></Quiz>

            }
            ,
            {
                path: '/blog',
                element:<Blog></Blog>

            }
            ,
            {
                path: '/statistics',
                element:<Statistics></Statistics>
            }
        ]
    }
])