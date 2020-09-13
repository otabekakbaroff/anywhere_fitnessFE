import React,{useState,useEffect} from 'react';
import axiosWithAuth from '../../components/SingleComponents/axiosWithAuth'
function InstructorRegister(props){
    useEffect(() => {
        let client = document.getElementById('register-client');
        let instructor = document.getElementById('register-instructor');
        instructor.style.backgroundColor="#e26b6b";
        instructor.style.color="white";
        client.style.backgroundColor="white";
        client.style.color="black";
    },[]);
    const [signup,setSignup]=useState({
        firstname:'',
        lastname:'',
        status:'',
        username:'',
        password:''
    });
    const handleChange=e=>{
        setSignup({
          ...signup,
          [e.target.name]:e.target.value
      })
      console.log(signup) 
    }
    const [errorMessage,setErrorMessage]=useState('');
    const validation=e=>{
        e.preventDefault();
        if(signup.username.length>=5 && signup.password.length>=5 && signup.firstname.length>1 && signup.lastname.length>1&& signup.password && signup.status){
            LoginSubmit()
        }else{
            setErrorMessage('Invalid input, please follow the guide!')
            alert("Guide: Username and password has to have 5 characters or more, first and last game has to have at least 2 characters or more, profession can't be empty");
        }
    }
    const LoginSubmit=e=>{
        axiosWithAuth().post('/api/auth/instructor/register', signup)
        .then(response=>{
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('firstname',signup.firstname);
            localStorage.setItem('lastname',signup.lastname);
            localStorage.setItem('status', 'instructor');
            axiosWithAuth().get("/api/instructors").then(res=>{
                localStorage.setItem('id',res.data.length);
            })
            props.history.push("/profile");
            window.location.reload(true);
        })
        .catch(err=>{
            console.log(err);
            alert("Error: username is already taken, or the server is down");
            setErrorMessage("Server Issue, please try again")
        })
      }
    return(
        <div className="instructorRegister">
            <h2>Instructor Register</h2>
            <form onSubmit={validation}>
   
                <input placeholder=" First name" name="firstname" type="text" onChange={handleChange} id="firstname"/>

                <input placeholder=" Last name" name="lastname" type="text" onChange={handleChange} id="lastname"/>

                <input placeholder=" Profession" name="status" type="text" onChange={handleChange} id="status"/>

                <input placeholder=" Username" name="username" type="text" onChange={handleChange} id="username"/>

                <input placeholder=" Password" name="password" type="password" onChange={handleChange} id="password"/>

                <div><p className="errorMessage">{errorMessage}</p></div>

                <button type="submit">Sign Up</button>
                
                <div>Already have Account? Login <a href="http://localhost:3000/login/instructor">here</a></div>

            </form>
        </div>
    )
}

export default InstructorRegister;