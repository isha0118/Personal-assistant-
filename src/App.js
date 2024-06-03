import React, { useState } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
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
    const { transcript, resetTranscript } = useSpeechRecognition();

    const fetchRecommendations = async () => {
        // Mock API call
        const response = await axios.get('https://api.example.com/recommendations');
        setRecommendations(response.data);
    };

    const handleVoiceCommand = (command) => {
        if (command.includes('add task')) {
            const task = command.replace('add task', '').trim();
            if (task) {
                setTasks([...tasks, task]);
            }
        } else if (command.includes('schedule appointment')) {
            const appointment = command.replace('schedule appointment', '').trim();
            if (appointment) {
                setAppointments([...appointments, appointment]);
            }
        } else if (command.includes('show recommendations')) {
            fetchRecommendations();
        }
    };

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

    const startListening = () => {
        SpeechRecognition.startListening();
    };

    const stopListening = () => {
        SpeechRecognition.stopListening();
        handleVoiceCommand(transcript);
        resetTranscript();
    };

    return (
        <div className="App">
            <Header />
            <Dashboard 
                onAddTask={addTask} 
                onScheduleAppointment={scheduleAppointment} 
                startListening={startListening} 
                stopListening={stopListening} 
                transcript={transcript}
            />
            <Tasks tasks={tasks} onCompleteTask={completeTask} />
            <Appointments appointments={appointments} onCancelAppointment={cancelAppointment} />
            <Recommendation recommendations={recommendations} />
        </div>
    );
}

export default App;
