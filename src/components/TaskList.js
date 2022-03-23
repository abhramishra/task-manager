import React from 'react'
import Task from './Task'
import { useSelector, useDispatch } from 'react-redux'

function TaskList(props) {
    const {tasks, status} = props
    // const tasks = useSelector((state) => {
    //     return state.tasks
    // } )
    return (
        <div>
            {
                <>
                    <div className='card-header text-center text-uppercase font-weight-bold'>
                        { status } - {tasks.length}
                    </div>
                    {
                        tasks.map(task => {
                            return <Task key={task.id} task={task} />
                        })
                    }
                </>
            }
        </div>
    )
}

export default TaskList