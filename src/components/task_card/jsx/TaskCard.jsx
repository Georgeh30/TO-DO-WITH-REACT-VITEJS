const TaskCard = (props) => {
    const { task } = props;

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    );
}

export default TaskCard;