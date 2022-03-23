import React, {useState} from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { useSelector } from 'react-redux'

function TaskContainer(props) {
    const progress = ['unstared', 'in progress', 'completed']
    const [toggle, setToggle] = useState(false)
    const tasks = useSelector((state) => {
        return state.tasks
    })

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div className='container my-5'>
            <div className='jumbotron py-3'>
                <div className='row'>
                    <div className='col-md-2'>
                        <button className='btn btn-success m-3' onClick={handleToggle}> + </button>
                    </div>
                    <div className='col-md-10'>
                        <h2 className='display-4 text-center text-uppercase'>Task Manager</h2>
                    </div>
                </div>
                {
                    toggle && <TaskForm/> 
                }
                <div className='row'>
                {
                    progress.map((status,i) => {
                        const taskStatus = tasks.filter(task => task.status == status)
                        return (
                            <div key={i} className='col-md-3 card m-2 p-0'>
                                <TaskList tasks={taskStatus} status={status}/>
                            </div>
                        ) 
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default TaskContainer