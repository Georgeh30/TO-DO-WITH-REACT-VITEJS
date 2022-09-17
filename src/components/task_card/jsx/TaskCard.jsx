import { useContext } from "react";
import { TaskContext } from "../../../contexts/task_context/jsx/TaskContext";

const TaskCard = (props) => {
    const { task } = props;
    const { deleteTask } = useContext(TaskContext);

    return (
        <div className="bg-gray-800 text-white">
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => deleteTask({ taskId:task.id })}>Eliminar Tarea</button>
        </div>
    );
}

export default TaskCard;