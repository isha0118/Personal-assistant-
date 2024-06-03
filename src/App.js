import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Tasks from './components/Tasks';
import Appointments from './components/Appointments';
import Recommendation from './components/Recommendation';
import './styles.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [recommendations, setRecommendations] = useState(["Recommendation 1", "Recommendation 2"]);

    const addTask = () => {
        const task = prompt("Enter a new task:");
        if (task) {
            setTasks([...tasks, task]);
        }
    };

    const scheduleAppointment = () => {
        const appointment = prompt("Enter a new appointment:");
        if (appointment) {
            setAppointments([...appointments, appointment]);
        }
    };

    const completeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const cancelAppointment = (index) => {
        setAppointments(appointments.filter((_, i) => i !== index));
    };

    return (
        <div className="App">
            <Header />
            <Dashboard onAddTask={addTask} onScheduleAppointment={scheduleAppointment} />
            <Tasks tasks={tasks} onCompleteTask={completeTask} />
            <Appointments appointments={appointments} onCancelAppointment={cancelAppointment} />
            <Recommendation recommendations={recommendations} />
        </div>
    );
}

export default App;
