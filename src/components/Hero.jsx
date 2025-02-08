import React from "react";
import {Link} from "react-router-dom";

const Hero = (props) => {
    return(
        <div className="text-center p-4 flex-shrink-0">
            <h5>Hello, I am Joel Gecale.</h5>
            <h5>I am a Web Developer.</h5>
            <h5 className="py-3">Welcome to my page!</h5>
            <Link to="/resume"><div className="btn mt-2 me-2">My Resume</div></Link>
            <div className="btn mt-2" onClick={() => props.handleClick(4)}>Contact Me</div>
        </div>
    );
}

export default Hero;