import React,{useState,useEffect} from 'react';
import axiosWithAuth from '../../components/SingleComponents/axiosWithAuth'

function InstructorLogin(props){
    useEffect(() => {
        let client = document.getElementById('login-client');
        let instructor = document.getElementById('login-instructor');
        instructor.style.backgroundColor="#e26b6b";
        instructor.style.color="white";
        client.style.backgroundColor="white";
        client.style.color="black";
    },[]);
    const [login,setLogin]=useState({
        username:'',
        password:''
    });
    const [errorMessage,setErrorMessage]=useState('');

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
          localStorage.setItem('firstname',response.data.Welcome);
          localStorage.setItem('lastname',response.data.lastname);
          localStorage.setItem('contactInfo',response.data.contactInfo);
          localStorage.setItem('id',response.data.id)
          localStorage.setItem('title',response.data.status);
          localStorage.setItem('status', 'instructor');
          props.history.push("/profile/classes");
          axiosWithAuth().get('/api/instructors').then(res=>{
            console.log(res)
            localStorage.setItem('id', res.data[res.data.length-1].id)
        })
          window.location.reload(true);
      })
      .catch(err=>{
        console.log(err)
        setErrorMessage('Check Your Credentials')
      })
    }
    return(
        <div className="clientRegister">
            <h2>Instructor Login</h2>
            <form onSubmit={LoginSubmit}>

                <input placeholder=" username" name="username" type="text" onChange={handleChange} id="username"/>

                <input placeholder=" password" name="password" type="password" onChange={handleChange} id="password"/>

                <div  className="errorMessage">{errorMessage}</div>
                
                <button type="submit">Log In</button>

                <div>Don't Have an account? register <a href="http://localhost:3000/register/instructor">here</a></div>
            </form>
        </div>
    )
}

export default InstructorLogin;