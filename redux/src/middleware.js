import { createStore,compose,applyMiddleware,bindActionCreators, combineReducers } from "redux";

const initialState = { 
    users: [
        { id: 1, name: "Karan" },
        { id: 2, name: "Milind" }
    ],
    tasks: [
        { title: "File the report" },
        { title: "Order more inventory" }
    ]
}

const ADD_TASK = 'ADD_TASK';
const ADD_USER = 'ADD_USER';

const addTask = (title) => ({ type: ADD_TASK, payload: title });
const addUser = (name) => ({ type: ADD_USER, payload: name });

const userReducer = (users = initialState.users, action) => {
    if(action.type == ADD_USER) {
        return [...users, action.payload]
    }
    return users;
}

const taskReducer = (tasks = initialState.tasks, action) => {
    if(action.type == ADD_TASK) {
        return  [...tasks, action.payload]
    }
    return tasks;
}

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

const subscriber = () => {
    console.log(store.getState());
}

const logMiddleware = store => next => action => {
    console.log('old state', store.getState());
    next(action);
    console.log('new state', store.getState());
}

const store = createStore(reducer, initialState, applyMiddleware(logMiddleware));
const actions = bindActionCreators({ addTask, addUser }, store.dispatch)
// store.subscribe(subscriber);
console.log(store);
actions.addUser({ id: 3, name: 'Manoj' });
actions.addTask({ title: 'Enjoy Party' });