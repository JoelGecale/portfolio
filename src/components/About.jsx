import React from "react";
import FormTop from "./FormTop";
import { Link } from "react-router-dom";

const About = (props) => {
    return(
        <div className="form glass">
            <FormTop />
                <div className="content fadein">
                    <article className="p-5">
                    <h2 className="py-2 embossed">About Me</h2>
                    <hr />
                    <p>I am an experienced System Developer with around 15 years of experience in building desktop applications using VB.Net and SQL databases. I have developed business applications for the corporate companies that I had a chance to be part of.</p>
                    <p>As technology shifted towards the web, I’ve expanded my skills into full-stack web development, learning technologies like Node.JS and React. Now, I shifted to focus in creating web applications by combining it with the knowledge and experiences I gained throughout my career. My latest corporate job was as a MIS Manager which helped me gain more experience in handling cross-functional projects with other business departments.</p>
                    <p>If you have any similar requirements for your business, let's collaborate and build something amazing. I am looking forward to utilizing these experiences and skills to be able to contribute to your business needs.</p>
                    <p>You may check my <Link to="/resume" className="link">resume</Link> and <Link className="link" onClick={() => props.handleClick(3)}>projects</Link> list for additional details on my work history and sample works.</p>
                    <hr />
                </article>
            </div>
            <div className="form-bottom fixed-bottom"></div>
        </div>
    );
};

export default About;