import React from "react";
import "./Intro.css"
import BlenderLogo from "../../img/Blender Logo.png"

const Intro = () => {
    return (
        <div className = "i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className = "i-intro">Hello, my name is</h2>
                    <h1 className = 'i-name'>Arun Jayaraman</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Mathematics</div>
                            <div className="i-title-item">Computer Science</div>
                            <div className="i-title-item">Programmer</div>
                            <div className="i-title-item">3D Animator</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I am a Math and Computer Science student at Wayne State University.
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={BlenderLogo} alt="Profile" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
