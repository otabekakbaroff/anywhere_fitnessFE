import React,{useState} from 'react';
import axiosWithAuth from '../../components/SingleComponents/axiosWithAuth'

function InstructorLogin(props){
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
      axiosWithAuth().post('/api/auth/instructor/login', login)
      .then(response=>{
          console.log(response);
          localStorage.setItem('token',response.data.token);
          localStorage.setItem('name',response.data.Welcome);
          localStorage.setItem('contactInfo',response.data.contactInfo);
          localStorage.setItem('title',response.data.status);
        //   props.history.push("/profile");
        //   window.reload(true);
      })
      .catch(err=>{
          console.log(err);
          props.history.push("/login/instructor");
          window.reload(true);
      })
    }
    return(
        <div className="clientRegister">
            <h2>Instructor Login</h2>
            <form onSubmit={LoginSubmit}>

                <input placeholder=" username" name="username" type="text" onChange={handleChange} id="username"/>

                <input placeholder=" password" name="password" type="password" onChange={handleChange} id="password"/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default InstructorLogin;