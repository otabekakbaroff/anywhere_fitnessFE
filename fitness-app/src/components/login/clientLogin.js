import React,{useState} from 'react';
import axiosWithAuth from '../../components/SingleComponents/axiosWithAuth'

function ClientLogin(props){
    const [login,setLogin]=useState({
        username:'',
        password:''
    });
    const handleChange=e=>{
      setLogin({
          ...login,
          [e.target.name]:e.target.value
      }) 
    }
    const LoginSubmit=e=>{
      e.preventDefault();
      axiosWithAuth().post('/api/auth/client/login', login)
      .then(response=>{
          console.log(response);
          localStorage.setItem('token',response.data.token);
          props.history.push("/profile");
          window.location.reload(true);
      })
      .catch(err=>{
          console.log(err);
          window.location.reload(true);
      })
    }
    return(
        <div className="clientRegister">
            <h2>Client Login</h2>
            <form onSubmit={LoginSubmit}>

                <input placeholder=" username" name="username" type="text" onChange={handleChange} id="username"/>

                <input placeholder=" password" name="password" type="password" onChange={handleChange} id="password"/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ClientLogin;