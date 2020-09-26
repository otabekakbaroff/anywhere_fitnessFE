import React from 'react';
import {Link} from 'react-router-dom';
function Navbar(){
    function sayHello(){
        let open = document.querySelectorAll(".nav .anchor-tags a")
        if (open[0].className === 'close'){
            for(let i = 0; i < open.length; i++){
                open[i].className = 'open'
            }
        }else{
            for(let i = 0; i < open.length; i++){
                open[i].className = 'close'
            }
        }
    }
    return(
        <div>
            <div className="nav">
                <div className="anchor-tags">
                    <Link to="/" className="close">Home</Link>
                    <Link to="/about" className="close">About</Link>
                    <Link to="/register/client" className="close">Sign Up</Link>
                    <Link to="/login/client" className="close">Login</Link>
                </div>
            </div>
            <div id="sandwich" onClick={sayHello}>
                    <div id="layerOne"></div>
                    <div id="layerTwo"></div>
                    <div id="layerThree"></div>
            </div>
        </div>
    )
}
export default Navbar;