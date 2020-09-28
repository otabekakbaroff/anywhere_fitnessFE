import React,{useState} from 'react';
import axiosWithAuth from '../SingleComponents/axiosWithAuth'



function Createclass(){
    const [classState,setClassState] = useState({
        "class_name":"",
        "description":"",
        "duration":"",
        "intensity":"",
        "location":"",
        "dateAndTime":"",
        "instructor_id": Number(localStorage.getItem('id'))
    });
    const handleChange = (e) =>{
        setClassState({
            ...classState,
            [e.target.name]:e.target.value
        })
    }
    function create_class(e){
        axiosWithAuth().post('/api/classes', classState).then(res=>{
            console.log(res)
        })
    }
    return(
        <div>
            <h1>Create a Class</h1>
            <form>
                <input onChange={handleChange} name="class_name"placeholder="class name"/>
                <input onChange={handleChange} name="description" placeholder="description"/>
                <input onChange={handleChange} name="intensity" placeholder="intensity"/>
                <input onChange={handleChange} name="location" placeholder="location"/>
                <input onChange={handleChange} name="dateAndTime" placeholder="date and time"/>
                <button onClick={create_class}>Submit</button>
            </form>
        </div>
    )
}
export default Createclass;