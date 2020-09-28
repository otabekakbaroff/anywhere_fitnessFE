import React,{useState,useEffect} from 'react';
import axiosWithAuth from '../SingleComponents/axiosWithAuth'


function Myclasses(){
    const [classes,setClasses]=useState([]);
    const [instclass,setInstClass] = useState([]);
    useEffect(()=>{
        axiosWithAuth().get(`/api/access/${localStorage.getItem('id')}/classes`).then(res=>{
            setClasses(res.data.classes);
        })
        axiosWithAuth().get("/api/classes").then(res=>{
            const result = res.data.filter(function(word){
                return word.instructor_id === Number(localStorage.getItem('id'))
            })
            setInstClass(result)
        })
    },[])
    // function leave(e){
    //     console.log(e.target.id)
    //     axiosWithAuth().post('/api/access',{client_id:Number(localStorage.getItem('id')),class_id:e.target.id}).then(res=>{
    //         // setClasses(res.data);
    //         console.log(res)
    //     })
    // }
    if(localStorage.getItem("status") === "client"){
        return(
            <div className="class_content">
                <h1>My Classes</h1>
                {classes.map(clazz=>(
                        <div className="classCard" key={Math.random()*9999999}>
                        <p>{clazz.class_name}</p>
                        <p>{clazz.dateAndTime}</p>
                        <p>{clazz.description}</p>
                        <p>{clazz.duration}</p>
                        <p>{clazz.intensity}</p>
                        <p>{clazz.location}</p>
                        {/* <button onClick={leave} id={clazz.id}>Leave</button> */}
                        </div>
                    ))}
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>My Classes</h1>
                {instclass.map(clazz=>(
                        <div className="classCard" key={Math.random()*9999999}>
                            <p>{clazz.class_name}</p>
                            <p>{clazz.dateAndTime}</p>
                            <p>{clazz.description}</p>
                            <p>{clazz.duration}</p>
                            <p>{clazz.intensity}</p>
                            <p>{clazz.location}</p>
                        </div>
                    ))}
            </div>
        )
    }
}
export default Myclasses;