import { useContext } from 'react';
import { TaskContext } from '../../../contexts/task_context/jsx/TaskContext';
import TaskCard from '../../task_card/jsx/TaskCard';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);
    
    if (tasks.length === 0) {
        return <h1>No existen tareas</h1>
    }

    return (
        <div>
            {
                tasks.map(task => 
                    (
                        <TaskCard key={task.id} task={task} />
                    )
                )
            }
        </div>
    )
};

export default TaskList