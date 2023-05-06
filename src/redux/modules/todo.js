// action value
const SELECT_TODO = "todo/SELECT_TODO"
const ADD_TODO = "todo/ADD_TODO"
const DELETE_TODO= "todo/DELETE_TODO"
const CHANGE_STATE = "todo/CHANGE_STATE"

// action creator
export const selectTodo = (payload) => {
    return {
        type: SELECT_TODO,
        payload
    }
}

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const changeState = (payload) => {
    return {
        type: CHANGE_STATE,
        payload
    }
}



// initial state
// const INITIAL_STATE = {
//     todos: [ ],
//     todo: {
//         id: 0,
//         title: "",
//         body: "",
//         isDone: false
//     }

// }
const INITIAL_STATE = []

// reducer
const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case SELECT_TODO:
        //     return {...state, todo: state.todos.filter(todo => todo.id === action.payload)[0]}
        // case ADD_TODO:
        //     return {...state, todos: [...state.todos, action.payload]}
        // case DELETE_TODO:
        //     return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        // case CHANGE_STATE:
        //     const thisTodo = state.todos.find(todo => todo.id === action.payload)
        //     const exceptThisTodo = state.todos.filter(todo => todo.id !== action.payload)
        //     thisTodo.isDone = !thisTodo.isDone
        //     return {...state, todos: [...exceptThisTodo, thisTodo]}
        case ADD_TODO:
            return [...state, action.payload]
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case CHANGE_STATE:
            const thisTodo = state.find(todo => todo.id === action.payload)
            const exceptThisTodo = state.filter(todo => todo.id !== action.payload)
            thisTodo.isDone = !thisTodo.isDone
            return [...exceptThisTodo, thisTodo]
        default: return state
    }
}

export default todoReducer