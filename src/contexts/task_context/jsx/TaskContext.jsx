import { createContext } from 'react'

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
    const { children } = props;
    let x = 20;

    return (
        <TaskContext.Provider value={x}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;