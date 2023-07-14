import React, { useContext } from 'react';
import { UserAuth } from '../Auth/Auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';
import Swal from 'sweetalert2';

const PrivateRouter = ({children}) => {
    const {user , loading} = useContext(UserAuth);
    const navigate = useNavigate();
    const location = useLocation();
    if(user){
        return children;
    }
    if(loading){
        return <Loading />
    }
    if(!user){
        Swal.fire({
            title: 'Error!',
            text: 'Please sign in first',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          return <Navigate to="/signIn" state={{from: location}} replace />
    }
    
};

export default PrivateRouter;