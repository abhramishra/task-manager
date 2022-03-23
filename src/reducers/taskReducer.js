const initialTask = []

const taskReducer = (state=initialTask, action) => {
    const payload = action.payload
    switch(action.type) {
        case 'ADD_TASK': {
            return [...state, {...action.payload}]
        }
        case 'EDIT_TASK': {
            const tasks = state.map(task => {
                            if (task.id == payload.id) {
                                return {...task, status: payload.status}
                            } else {
                                return task
                            }
                        })
            return tasks
        }
        default: { return [...state] }
    }
}

export default taskReducer