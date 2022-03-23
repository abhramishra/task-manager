import { createStore, combineReducers } from 'redux'
import taskReducer from '../reducers/taskReducer'
const configureStore = () => {
    const store = createStore(combineReducers({
        tasks: taskReducer
    }))
    return store
}

export default configureStore