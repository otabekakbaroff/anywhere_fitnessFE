import React, { useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom'
import axiosWithAuth from './axiosWithAuth';
const PrivateRoute = ({component:Component, ...rest}) =>{
    useEffect(() => {
        axiosWithAuth().get()
    .then(response=>{
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    }) 
    },[]);
    return (
        <Route {...rest} render={()=>{
            if(localStorage.getItem('token')){
             return <Component/>
            }else{
                return <Redirect to="/login"/>;
            }
        }}/>
    )
}

export default PrivateRoute;