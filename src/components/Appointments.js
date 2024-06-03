import React from 'react';

const Appointments = ({ appointments, onCancelAppointment }) => {
    return (
        <section className="appointments">
            <h2>Appointments</h2>
            <ul id="appointment-list">
                {appointments.map((appointment, index) => (
                    <li key={index}>
                        {appointment}
                        <button onClick={() => onCancelAppointment(index)}>Cancel</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Appointments;
