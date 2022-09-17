import TitleApp from '../components/title_app/jsx/TitleApp'
import TaskForm from '../components/task_form/jsx/TaskForm'
import TaskList from '../components/task_list/jsx/TaskList'

const App = () => {
    return (
        <>
            <main className='bg-neutral-800 h-screen'>
                <div className='p-10 pt-2 content-center'>
                    <TitleApp />
                    <TaskForm />
                    <TaskList />
                </div>
            </main>
        </>
    )
};

export default App
