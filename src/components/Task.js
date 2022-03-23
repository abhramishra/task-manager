import React from 'react'
import { useDispatch } from 'react-redux'
import { editTask } from '../actions/taskAction'
function Task(props) {
    const TASK_STATUS = ['unstared', 'in progress', 'completed']
    const dispatch = useDispatch()
    const { task } = props
    const handleStatusChange = (e) => {
        const data = {
            id: task.id,
            status: e.target.value
        }
        console.log("Inside select change ", data)
        dispatch(editTask(data))
    }
    return (
        <div>
            <form onChange={handleStatusChange}>
                <select className='' defaultValue={task.status}>
                    {
                        TASK_STATUS.map((status,i) => {
                            return <option key={i} value={status}>{status}</option>
                        })
                    }
                </select>
            </form>
            <h2 className='card-title mt-3 text-uppercase px-2'>{ task.title }</h2>
            <p className='card-text mb-3 text-muted font-weight-bold px-2'>{ task.desc }</p>
        </div>
    )
}

export default Task