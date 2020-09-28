import React,{useState,useEffect} from 'react';
import axiosWithAuth from '../SingleComponents/axiosWithAuth'
function AllClasses(){
    const [classes,setClasses]=useState([]);
    useEffect(()=>{
        axiosWithAuth().get('/api/classes').then(res=>{
            let result = res.data.map(cs=>{
                console.log(cs)
                return cs
            })
            console.log(result)
            setClasses(res.data);
        })
    },[])
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
                            <p>Instructor Name here</p>
                        </div>
                ))}
            </div>
        </div>
    )
}


export default AllClasses;