import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Main = () => {
    const location = useLocation();
    const loginPath = location.pathname.includes("signIn");
    const registerPath = location.pathname.includes("signUp");
    return (
        <div>
            <Navbar />
            <Outlet />
            {registerPath || loginPath || <Footer />}
        </div>
    );
};

export default Main;