export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const editTask = (data) => {
    console.log("Inside edit task action ", data)
    return {
        type: 'EDIT_TASK',
        payload: data
    }
}