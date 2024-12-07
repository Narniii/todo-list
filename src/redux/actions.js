export const ADD_TODO = 'add_todo';
export const REMOVE_TODO = 'remove_todo';
export const EDIT_TODO = 'edit_todo'


export const addToDo = (todo) => {
    return async dispatch => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        });
    }
}
export const removeTodo = (todo) => {
    return async dispatch => {
        dispatch({
            type: REMOVE_TODO,
            payload: todo
        });
    }
}
export const editTodo = (todo) => {
    return async dispatch => {
        dispatch({
            type: EDIT_TODO,
            payload: todo
        });
    }
}
