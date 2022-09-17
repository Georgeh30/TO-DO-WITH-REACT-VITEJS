import { useContext } from 'react';
import { TaskContext } from '../../../contexts/task_context/jsx/TaskContext';
import TaskCard from '../../task_card/jsx/TaskCard';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);
    
    if (tasks.length === 0) {
        return (
            <div className='max-w-md mx-auto'>
                <h1 
                    className='text-orange-500 text-2xl text-center bg-orange-200 rounded-md pt-1 pb-2 drop-shadow-2xl border-2 border-orange-500'
                >
                    THERE ARE NO TASKS
                </h1>
            </div>
            
        )
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
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