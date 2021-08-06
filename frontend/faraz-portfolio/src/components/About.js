import React, {useState, useEffect} from 'react'
import styled, {css, keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrescription } from "@fortawesome/free-solid-svg-icons"
import './About.css'

const Card = () => {
    const capitalOneLink = <a className="cyan-text" href='https://www.capitalone.com/'>Capital One</a>
    return (
        <div className="card justify-content-center">
            <div className="card-body">
                <p className="card-text">I'm an iOS developer for {capitalOneLink} in Mclean, VA. I have a passion for creating robust and fluid UI for iOS devices.
                </p>
                <a className="btn btn-default btn-lg waves-effect waves-light">Download Resume</a>
            </div>
        </div>
    )
}

const SkillBars = ({info, percent}) => {
    const [bar, setBar] = useState(<div className="bars"></div>)
    const handleScroll = () => {
        if (window.scrollY > 700) {
            setBar(<StyledBar className="bars"></StyledBar>)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const progressLoad = keyframes`
    0% { width: 0; }
    100% { width: ${percent}; }
    `;

    const StyledBar = styled.div`
        background-color: whitesmoke;
        width : ${percent};
        animation: ${progressLoad} 1.5s ease-in-out;
        animation-fill-mode: both;
    `;

    return (
        <>
        <p className="bars-text mb-2 pl">{info} - {percent}</p>
        {bar}
        </>
    )
}

const Skills = () => {
    return (
        <div className="container pl-4">
            <hr class="ml-0 w-50 skills-div"></hr><h2 className="skills-title mb-4">Skills</h2>
            <SkillBars info="Swift" percent="90%"></SkillBars>
            <SkillBars info="C++" percent="80%"></SkillBars>
            <SkillBars info="React" percent="55%"></SkillBars>
            <SkillBars info="RxSwift" percent="70%"></SkillBars>
            <SkillBars info="Python" percent="75%"></SkillBars>
        </div>
    )
}

const About = () => {
    const capitalOneLink = <a className="red-text" href='https://www.capitalone.com/'>Capital One</a>
    
    return (
        <div className="about-wrapper">
            <div className="about-row">
                <div className="about-col info">
                    <div className="container">
                        <hr class="ml-0 w-50 info-div"></hr><p>About Me</p>
                        <br></br>
                        <h2 className="display-4 about">I'm an iOS developer for {capitalOneLink} in Mclean, VA.</h2>
                        <br></br>
                        <hr class="mr-4 w-50 info-div"></hr>
                        <h3 className="pr-2">I have a passion for creating robust and fluid UI for iOS devices.</h3>
                        <div className="container text-center py-4 mt-4">
                            <a href="https://drive.google.com/uc?export=download&id=1rAqM9McnVs2opQOguuUjjkQ3wxIX75fk">
                                <button type="submit" className="btn btn-lg resume">
                                <i class="fa fa-download"></i> Download Resume
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="about-col skills">
                    <Skills/>
                </div>
            </div>
        </div>
    )
}

// const About = () => {

//     return (
//             <div className="jumbotron jumbotron-fluid text-center">
//                 <div className="container">
//                     <h1 className="display-4">About Me</h1>
//                 </div>
//                 <div className="container">
//                 <hr className="my-4"></hr>

//                 <div className="row">
//                     <div className="col-sm">
//                         <div className="container-fluid">

//                         <ul className="list-group py-2 text-left">
//                             <li className="list-group-item display-4">
//                                 <i className="fab fa-swift amber-ic"></i> Swift
//                             </li>
//                             <li className="list-group-item display-4">
//                                 <FontAwesomeIcon className="pink-ic" icon={faPrescription} /> RxSwift
//                             </li>
//                             <li className="list-group-item display-4">
//                                 <i className="fab fa-cuttlefish dark-ic"></i> C++
//                             </li>
//                             <li className="list-group-item display-4">
//                                 <i className="fab fa-python blue-ic"></i> Python
//                             </li>
//                             <li className="list-group-item display-4">
//                                 <i className="fab fa-react cyan-ic"></i> React
//                             </li>
//                         </ul>
//                         </div> 
//                     </div>
//                     <div className="col-sm">
//                         <div className="container-fluid">
//                             <a href="#!">
//                                 <div className="mask rgba-white-slight waves-effect waves-light pb-2">
//                                     <img src="images/grad_pic.jpg" className="img-fluid rounded"></img>
//                                 </div>
//                             </a>
//                             <Card />
//                         </div>
//                     </div>
//                 </div>
//                 </div>
//         </div>
//     )
// }

export default About