import { useState, useEffect } from 'react';

import TaskForm from '../components/task_form/jsx/TaskForm'
import TaskList from '../components/task_list/jsx/TaskList'

import { tasks as data } from '../api/tasks/js/tasks';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data)
    }, []) // indicamos que solo la primera vez que se renderiza 
           // este componente, se ejecute "useEffect"

    const createTask = (props) => {
        const { title, description } = props

        if (title === '' || description === '') {
            return;
        }

        setTasks([...tasks, {
            id: tasks.length,
            title,
            description
        }]);
    }

    const deleteTask = (props) => {
        const { taskId } = props

        setTasks(tasks.filter(task => task.id != taskId ));
    }

    return (
        <>
            <TaskForm createTask={createTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </>
    )
};

export default App
