import { useState, useContext } from 'react';
import { TaskContext } from '../../../contexts/task_context/jsx/TaskContext';

const TaskForm = () => {
    const { createTask } = useContext(TaskContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ title, description });
        setTitle('');
        setDescription('');
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'>Create a new task:</h1>
                <input placeholder='Escribe tu Tarea'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2"
                    autoFocus
                />
                <textarea placeholder='Escribe la descripcion'
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-slate-300 p-3 w-full mb-2"
                    value={description}
                />
                <button
                    className='bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400 rounded-md'
                >
                    Guardar
                </button>
            </form>
        </div>
    );
}

export default TaskForm