import Toggle from "../toggle/Toggle"
import "./Tools.css"
import React from "react";

const Tools = () => {

    const updateGrade = (e) => {
        e.preventDefault();
        let aTotal = document.getElementById("aTotal").value;
        let mTotal = document.getElementById("mTotal").value * 18;
        let expAvg = parseFloat(100 - document.getElementById("expAvg").value);
        let target = document.getElementById("target").value;
        let totalPoint = parseFloat(mTotal) + parseFloat(aTotal)
        // console.log("Mtotal " + mTotal);
        // console.log("Atotal " + aTotal); 600-54-36 = 600-90=510-50 = 460/18
        // console.log("Total " + totalPoint);
        // console.log("Ext " + expAvg);
        let remove = (100 - target) * 60 - totalPoint - expAvg * 2;
        console.log(remove);
        let avgRemaining = 100 - Math.round(remove*100/18)/100;
        document.getElementById("midterm").innerHTML = avgRemaining;
    }

    return (
        
        <div className = "tools">
            <Toggle/>
            <div className="algo-wrapper">
                <h1>Algorithm Design Grade Calculator</h1>
                <form onSubmit = {updateGrade}>
                    <div className="inputItem">
                        <h2 className = "inputTitle">Assignment Lost</h2>
                        <input className = "gradeInput" type = "number" step = "1" placeholder = "54"  id = "aTotal"/>
                    </div>
                    <div className="inputItem">
                        <h2 className = "inputTitle" >Midterm Lost</h2>
                        <input className = "gradeInput" type = "number" step = "1" placeholder = "1" id = "mTotal"/>
                    </div>
                    <div className="inputItem">
                        <h2 className = "inputTitle" >Exp Hw Grades (2 HW Left)</h2>
                        <input className = "gradeInput" type = "number" step = "1" placeholder = "75" id = "expAvg"/>
                    </div>
                    <div className="inputItem">
                        <h2 className = "inputTitle" >Target Score</h2>
                        <input className = "gradeInput" type = "number" step = "1" placeholder = "90" id = "target"/>
                    </div>
                    <button className = "gradeButton" text = "Submit">Calculate</button>
                </form>
                <div className="result">
                    You need an average of <span id = "midterm">x</span>% on your midterm and final to get an A
                </div>
            </div>
        </div>
    )
}

export default Tools
