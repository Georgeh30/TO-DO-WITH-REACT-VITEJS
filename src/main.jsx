import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { TaskContextProvider } from './contexts/task_context/jsx/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TaskContextProvider>
            <App />
        </TaskContextProvider>
    </React.StrictMode>
);
