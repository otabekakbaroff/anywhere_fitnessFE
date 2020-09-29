import React from 'react'
import Navbar from './header';
function Home(){
    return(
        <div>
            <Navbar/>
            <div className="HomePageImgs">
                <div className="middleImg"><p><b>Anywhere Fitness</b></p></div>
                <div className="chose"><p>Choose Your Instructors</p></div>
                <div className="workout"><p>Choose Your Passion</p></div>
                <div className="anywhere"><p>Do It Anytime</p></div>
                <div className="anytime"><p>Do It Anywhere</p></div>
            </div>
        </div>
        
    )
}
export default Home;