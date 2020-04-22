import React,{useState,useEffect} from 'react';
import axiosWithAuth from '../../components/SingleComponents/axiosWithAuth'
function ClientRegister(props){
    useEffect(() => {
        let client = document.getElementById('register-instructor');
        let instructor = document.getElementById('register-client');
        instructor.style.backgroundColor="#e26b6b";
        instructor.style.color="white";
        client.style.backgroundColor="white";
        client.style.color="black";
    },[]);
    const [signup,setSignup]=useState({
        firstname:'',
        lastname:'',
        username:'',
        password:''
    });
    const handleChange=e=>{
        setSignup({
          ...signup,
          [e.target.name]:e.target.value
      }) 
    }
    const [errorMessage,setErrorMessage]=useState('');
    const validation=e=>{
        e.preventDefault();
        if(signup.username.length>5 && signup.firstname.length>1 && signup.lastname.length>1&& signup.password){
            LoginSubmit()
        }else{
            setErrorMessage('Invalid input, please follow the guide!')
            alert("Guide: Username and password has to have 5 characters or more, first and last game has to have at least 2 characters or more");
        }
    }
    const LoginSubmit=e=>{
        axiosWithAuth().post('/api/auth/client/register', signup)
        .then(response=>{
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('firstname',signup.firstname);
            localStorage.setItem('lastname',signup.lastname);
            localStorage.setItem('status', 'client');
            axiosWithAuth().get("/api/clients").then(res=>{
                localStorage.setItem('id',res.data.length)
            })
            props.history.push("/profile");
            window.location.reload(true)
        })
        .catch(err=>{
            console.log(err);
            alert("Error: username is already taken, or the server is down");
            setErrorMessage("Server Issue, please try again")
        })
      }
    return(
        <div className="clientRegister">
            <h2>Client Register</h2>
            <form onSubmit={validation}>

                
                <input placeholder=" First name" name="firstname" type="text" onChange={handleChange} id="firstname"/>

                <input placeholder=" Last name" name="lastname" type="text" onChange={handleChange} id="lastname"/>

                <input placeholder=" Username" name="username" type="text" onChange={handleChange} id="username"/>

                <input placeholder=" Password" name="password" type="password" onChange={handleChange} id="password"/>

                <div><p className="errorMessage">{errorMessage}</p></div>

                <button type="submit">Sign Up</button>

                <div>Already have Account? Login <a href="http://localhost:3000/login/client">here</a></div>

            </form>
        </div>
    )
}

export default ClientRegister;