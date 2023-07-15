import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home/Home';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/Signup/Signup';
import Shop from '../Pages/Shop/Shop';
import Dashboard from '../Pages/Dashboard/Dashboard';
import PrivateRouter from './PrivateRouter';
import MyCart from '../Pages/UserDashboard/MyCart/MyCart';
import OrderStatus from '../Pages/UserDashboard/OrderStatus/OrderStatus';
import Payment from '../Pages/UserDashboard/Payment/Payment';
import History from '../Pages/UserDashboard/History/History';
import ManageUser from '../Pages/AdminDashboard/ManageUser/ManageUser';
import ManageOrders from '../Pages/AdminDashboard/ManageOrders/ManageOrders';
import ManageProducts from '../Pages/AdminDashboard/ManageProducts/ManageProducts';
import AddProducts from '../Pages/AdminDashboard/AddProducts/AddProducts';

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
    },
    {
        path: "/dashboard",
        element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        children:[
            {
                path:"/dashboard/userCart",
                element:<PrivateRouter><MyCart></MyCart></PrivateRouter>
            },
            {
                path:"/dashboard/orderStatus",
                element:<PrivateRouter><OrderStatus></OrderStatus></PrivateRouter>
            },
            {
                path:"/dashboard/payment",
                element:<PrivateRouter><Payment></Payment></PrivateRouter>
            },
            {
                path:"/dashboard/paymentHistory",
                element:<PrivateRouter><History></History></PrivateRouter>
            },
            {
                path:"/dashboard/manageUser",
                element: <ManageUser></ManageUser>
            },
            {
                path:"/dashboard/manageOrder",
                element: <ManageOrders></ManageOrders>
            },
            {
                path:"/dashboard/manageProduct",
                element: <ManageProducts></ManageProducts>
            },
            {
                path:"/dashboard/addProduct",
                element: <AddProducts></AddProducts>
            },
        ]
    }
])

export default router;