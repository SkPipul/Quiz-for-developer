import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Main/Main";

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
              element: <Home></Home>
            },
        ]
    }
]);

export default router;