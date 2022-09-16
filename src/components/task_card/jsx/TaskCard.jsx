const TaskCard = (props) => {
    const { task, deleteTask } = props;

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => deleteTask({ taskId:task.id })}>Eliminar Tarea</button>
        </div>
    );
}

export default TaskCard;