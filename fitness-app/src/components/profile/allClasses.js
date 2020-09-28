import React,{useState,useEffect} from 'react';
import axiosWithAuth from '../SingleComponents/axiosWithAuth'
function AllClasses(){
    const [classes,setClasses]=useState([]);
    useEffect(()=>{
        axiosWithAuth().get('/api/classes').then(res=>{
            setClasses(res.data);
        })
    },[])

    function join(e){
        console.log(e.target.id)
        axiosWithAuth().post('/api/access',{client_id:Number(localStorage.getItem('id')),class_id:e.target.id}).then(res=>{
            // setClasses(res.data);
            console.log(res)
        })
    }
    if(localStorage.getItem("status") === "client"){
        return(
            <div>
                <div className="class_content">
                    <h1>Classes</h1>
                    {classes.map(clazz=>(
                        <div className="classCard" key={Math.random()*9999999} >
                            <h3>{clazz.class_name}</h3>
                                <p>{clazz.description}</p>
                                <p>{clazz.duration}</p>
                                <p>{clazz.intensitity}</p>
                                <p>{clazz.location}</p>
                                <p>{clazz.dateAndTime}</p>
                                <p>{clazz.active}</p>
                                <button onClick={join} id={clazz.id}>Join</button>
                            </div>
                    ))}
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <div className="class_content">
                    <h1>Classes</h1>
                    {classes.map(clazz=>(
                        <div className="classCard" key={Math.random()*9999999}>
                            <h3>{clazz.class_name}</h3>
                                <p>{clazz.description}</p>
                                <p>{clazz.duration}</p>
                                <p>{clazz.intensitity}</p>
                                <p>{clazz.location}</p>
                                <p>{clazz.dateAndTime}</p>
                                <p>{clazz.active}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}


export default AllClasses;