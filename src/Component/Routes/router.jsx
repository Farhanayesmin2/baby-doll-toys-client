import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]


    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }




])
export default router;