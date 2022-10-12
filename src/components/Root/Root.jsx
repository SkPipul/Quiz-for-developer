import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Main/Main";
import QuizData from "../QuizData/QuizData";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
              path: '/',
              loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
              element: <Home></Home>,
            },
            {
              path: 'home',
              loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
              element: <Home></Home>
            },
            {
                path: '/quiz/:quizId',
                loader: ({params}) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
                },
                element: <QuizData></QuizData>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);

export default router;