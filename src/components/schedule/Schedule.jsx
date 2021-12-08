import "./Schedule.css"

const Schedule = () => {
    return (
        <div className = "schedule">
            <div className = "calendarArea">d</div>
            <div className="courseInfo">
                <div className="rotateCourse">
                    <button type = "button">Prev</button>
                    <div id="scheduleNumber">Schedule #1</div>
                    <button type = "button">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Schedule
