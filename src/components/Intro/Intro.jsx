import "./Intro.scss"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { init } from "ityped"; // To create animated crimson color text google ityped to understand more about it.
import { useEffect, useRef } from "react";

export default function Intro(){

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay :1500, // It will create a backDelay of 1.5 seconds.
            backSpeed :60, // THe speed of irasing 
            strings: ["Learner", "Web Dev", "Freelancer"],
        });
    },[]); // Learn How to use --> useEffect here it is being used for creating Animation inside SPAN in H3.
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/sampleMan1.png" alt="Img-file" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>Hi, there I'm</h2>
                <h1>Abhishek</h1>
                <h3><span ref={textRef}></span></h3>
                </div>
                <div class="loader">
                    <div class="box1"></div>
                    <div class="box2"></div>
                    <div class="box3"></div>
                </div>
                <div className="down">
                <a href="#portfolio">
                <KeyboardArrowDownIcon className="icon" fontSize="large"/>
            </a>
            </div>
            </div>
        </div>
    )
}