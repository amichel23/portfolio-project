import React from "react";
import Image from './images/logos/logo.png';

const Nav = () => {
    return (
       <div>
           <nav>
                <div className="notes-container" >
                    <div>
                        <img src={Image} alt='logo' /> &nbsp;&nbsp;<p>Alex Michel II</p>
                    </div>
                    <div className="notes-info" >
                        <p>Projects</p>&nbsp;&nbsp;
                        <p>Work</p>&nbsp;&nbsp;
                        <p>Notes</p>&nbsp;&nbsp;
                    </div>
                </div>
           </nav>
       </div>
    )
}

export default Nav;