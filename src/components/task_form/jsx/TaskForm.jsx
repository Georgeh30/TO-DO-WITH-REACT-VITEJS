import { useState } from 'react';

const TaskForm = (props) => {
    const { createTask } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ title, description });
        setTitle('');
        setDescription('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder='Escribe tu Tarea'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    autoFocus
                />
                <textarea placeholder='Escribe la descripcion'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <button>
                    Guardar
                </button>
            </form>
        </>
    );
}

export default TaskForm