import React from 'react';

const Tasks = ({ tasks, onCompleteTask }) => {
    return (
        <section className="tasks">
            <h2>Tasks</h2>
            <ul id="task-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input type="checkbox" onChange={() => onCompleteTask(index)} />
                        {task}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Tasks;
