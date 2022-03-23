import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from '../actions/taskAction'

function TaskForm(props) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const errorStyle = {
        color: 'red'
    }

    const runValidation = () => {
        if (title.trim().length == 0) {
            errors.title = 'Title can\'t be blank !'
        } else if (desc.trim().length == 0) {
            errors.desc = 'Task description can\'t not be blank !'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        runValidation()
        if (Object.keys(errors).length == 0) {
            const formData = {
                id: Date.now(),
                title: title,
                desc: desc,
                status: 'unstared'
            }
            dispatch(addTask(formData))

            setFormErrors({})
            setTitle('')
            setDesc('')
        } else {
            setFormErrors(errors)
        }
    }
    return (
        <form className='needs-validation' onSubmit={handleSubmit}>
            <div className='mb-3'>
                <input className='form-control' type='text' name='title' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                { formErrors.title && <span style={errorStyle}> { formErrors.title } </span> }
            </div>
            <div className='mb-3'>
                <textarea className='form-control' name='desc' placeholder='Description' value={desc} onChange={(e) => setDesc(e.target.value)} />
                { formErrors.desc && <span style={errorStyle}> { formErrors.desc } </span> }
            </div>

            <input className='btn btn-primary' type='submit' value='Add Task'/>
        </form>
    )
}

export default TaskForm