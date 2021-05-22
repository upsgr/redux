import {addItem} from './types'

const initState = {
    todos: []
}

export const itemsReducer = (state = initState, action) => {
    switch (action.type) {
        case addItem:
            return {...state, todos: state.todos.concat(action.text)}

        default:
            return state
    }
}
