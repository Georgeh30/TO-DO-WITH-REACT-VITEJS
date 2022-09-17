import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../../../api/tasks/js/tasks';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    const { children } = props;

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

    useEffect(() => {
        setTasks(data)
    }, []) // indicamos que solo la primera vez que se renderiza 
           // este componente, se ejecute "useEffect"

    return (
        <TaskContext.Provider value={{
            tasks, 
            createTask,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;