import React from 'react';
import icon from "/Users/isha/personal-assistant/src/vc.jpeg";
const Dashboard = ({ onAddTask, onScheduleAppointment }) => {
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
            <img src={icon} alt="Voice Command" width={20} height={20} />
                <input type="text" id="text-command-input" placeholder="Type your command..." />
            </div>
        </section>
    );
};

export default Dashboard;
