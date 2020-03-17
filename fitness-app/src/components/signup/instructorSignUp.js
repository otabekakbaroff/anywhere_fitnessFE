import React,{useState} from 'react';
import axiosWithAuth from '../../components/SingleComponents/axiosWithAuth'
function InstructorRegister(props){
    const [signup,setSignup]=useState({
        name:'',
        status:'',
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
        axiosWithAuth().post('/api/auth/instructor/register', signup)
        .then(response=>{
            console.log(response);
            localStorage.setItem('token',response.data.token);
            props.history.push("/signup");
        })
        .catch(err=>{
            console.log(err);
            props.history.push("/signup");
        })
      }
    return(
        <div className="instructorRegister">
            <h2>Instructor Register</h2>
            <form onSubmit={LoginSubmit}>
        
                <input placeholder=" Name" name="name" type="text" onChange={handleChange} id="name"/>
               
                <input placeholder=" status" name="status" type="text" onChange={handleChange} id="status"/>

                <input placeholder=" username" name="username" type="text" onChange={handleChange} id="username"/>
               
                <input placeholder=" password" name="password" type="password" onChange={handleChange} id="password"/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default InstructorRegister;