import React, { useContext } from 'react';
import google from "../assets/icons/google.png";
import facebook from "../assets/icons/facebook.png";
import { UserAuth } from '../Auth/Auth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogIn = () => {
    const {facebookLog,googleLog} = useContext(UserAuth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    const handleGoogleLog=()=>{
        googleLog()
        .then(res=>{
            const loggedUser = res.user;
            Swal.fire({
                title: 'Success!',
                text: 'Sign In Successful ',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
              navigate(from , {replace:true})
        })
        .catch(error=>{
            Swal.fire({
                title: 'Error!',
                text: error.massage,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
    }
    const handleFacebookLog=()=>{
        facebookLog()
        .then(res=>{
            const loggedUser = res.user;
            navigate(from , {replace:true})
            Swal.fire({
                title: 'Success!',
                text: 'Sign In Successful ',
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        })
        .catch(error=>{
            Swal.fire({
                title: 'Error!',
                text: error.massage,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
    }


    return (
        <div className='text-center space-x-4 my-7'>
    <button onClick={handleGoogleLog}>
        <img src={google} alt="Google" />
    </button>
    <button onClick={handleFacebookLog}>
        <img src={facebook} alt="Google" />
    </button>
    </div>
    );
};

export default SocialLogIn;