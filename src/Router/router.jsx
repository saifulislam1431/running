import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/Signup/Signup';
import Shop from '../Pages/Shop/Shop';

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement:<ErrorPage /> ,
        children:[
{
    path:"/",
    element:<Home></Home>
},
{
    path:"/signIn",
    element:<SignIn></SignIn>
},
{
    path:"/signUp",
    element:<SignUp></SignUp>
},
{
    path:"/shop",
    element:<Shop/>
}
        ]
    }
])

export default router;