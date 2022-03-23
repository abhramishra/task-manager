import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { addTask } from './actions/taskAction'

const store = configureStore()



// store.subscribe(() => {
//   console.log(store.getState())
// })

// store.dispatch(addTask({ id: 1, title: 'first task', desc: 'first description !!' }))

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

