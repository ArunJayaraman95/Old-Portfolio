import "./Schedule.css"
import React from "react";
import {Inject, ScheduleComponent, Week} from '@syncfusion/ej2-react-schedule'

const 

const Schedule = () => {

    private localData: classes = [
        {name: "Statistics", start: 1030, end: 1120, days:[1,3,5]}
    ]

    return (
        <div className="schedule">
            <ScheduleComponent>
                <Inject services = {[Week]}/>
            </ScheduleComponent>
        </div>
        /* <div className = "schedule">
            <div className = "calendarArea">
                <div className="dayLabel">Time</div>
                <div className="dayLabel">Sunday</div>
                <div className="dayLabel">Monday</div>
                <div className="dayLabel">Tuesday</div>
                <div className="dayLabel">Wednesday</div>
                <div className="dayLabel">Thursday</div>
                <div className="dayLabel">Friday</div>
                <div className="dayLabel">Saturday</div>
                
                <div className="calRowLabels">
                    <div className="timeLabel">7:00 AM</div>
                    <div className="timeLabel">8:00 AM</div>
                    <div className="timeLabel">9:00 AM</div>
                    <div className="timeLabel">10:00 AM</div>
                    <div className="timeLabel">11:00 AM</div>
                    <div className="timeLabel">12:00 PM</div>
                    <div className="timeLabel">1:00 PM</div>
                    <div className="timeLabel">2:00 PM</div>
                    <div className="timeLabel">3:00 PM</div>
                    <div className="timeLabel">4:00 PM</div>
                    <div className="timeLabel">5:00 PM</div>
                    <div className="timeLabel">6:00 PM</div>
                    <div className="timeLabel">7:00 PM</div>
                    <div className="timeLabel">8:00 PM</div>
                    <div className="timeLabel">9:00 PM</div>
                    <div className="timeLabel">10:00 PM</div>
                </div>


                <div className = "day" id = "sunday">
                    <div id="a">d</div>
                    <div id="b">d</div>

                </div>
                <div className = "day" id = "monday">
                </div>
                <div className = "day" id = "tuesday">
                    <div id="a">d</div>
                </div>
                <div className = "day" id = "wednesday">
                    <div id="a">d</div>
                </div>
                <div className = "day" id = "thursday">
                    <div id="a">d</div>
                </div>
                <div className = "day" id = "friday">
                    <div id="a">d</div>
                </div>
                <div className = "day" id = "saturday">
                    <div id="a">d</div>

                </div>


            </div>
            <div className="courseInfo">
                <div className="rotateCourse">
                    <button type = "button" className = "prevnext">Prev</button>
                    <div id="scheduleNumber">Schedule #1</div>
                    <button type = "button" className = "prevnext">Next</button>
                </div>
            </div>
        </div> */
    )
}

export default Schedule
