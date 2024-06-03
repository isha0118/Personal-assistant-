import React from 'react';
import icon from "/Users/isha/personal-assistant/src/vc.jpeg";
const Dashboard = ({ onAddTask, onScheduleAppointment, startListening, stopListening, transcript }) => {
    return (
        <section className="dashboard">
            <div className="overview">
                <h2>Today's Overview</h2>
                <div className="quick-actions">
                    <button onClick={onAddTask}>Add Task</button>
                    <button onClick={onScheduleAppointment}>Schedule Appointment</button>
                </div>
            </div>
            <div className="interaction">
                <button id="voice-command-btn" onMouseDown={startListening} onMouseUp={stopListening}>
                    <img src={icon} alt="Voice Command" height={25} width={25}/>
                </button>
                <input type="text" value={transcript} readOnly placeholder="Type your command..." />
            </div>
        </section>
    );
};

export default Dashboard;
