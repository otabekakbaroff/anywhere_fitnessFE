import React,{useState} from 'react';
import axiosWithAuth from '../../components/SingleComponents/axiosWithAuth'
function ClientRegister(props){
    const [signup,setSignup]=useState({
        name:'',
        username:'',
        password:''
    });
    const handleChange=e=>{
        setSignup({
          ...signup,
          [e.target.name]:e.target.value
      }) 
    }
    const LoginSubmit=e=>{
        e.preventDefault();
        axiosWithAuth().post('/api/auth/client/register', signup)
        .then(response=>{
            console.log(response);
            localStorage.setItem('token',response.data.token);
            props.history.push("/register");
        })
        .catch(err=>{
            console.log(err);
            props.history.push("/register");
        })
      }
    return(
        <div className="clientRegister">
            <h2>Client Register</h2>
            <form onSubmit={LoginSubmit}>

                
                <input placeholder=" Name" name="name" type="text" onChange={handleChange} id="name"/>

       
                <input placeholder=" Username" name="username" type="text" onChange={handleChange} id="username"/>

                <input placeholder=" Password" name="password" type="password" onChange={handleChange} id="password"/>

                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default ClientRegister;