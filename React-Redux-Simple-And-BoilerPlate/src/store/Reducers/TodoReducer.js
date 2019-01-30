import TodoAction from "../Actions/todoActions";

function Todo(state = {
    Todo: "TODO_ONE"
}, action) {
    switch (action.type) {
        case TodoAction.GET_TODO:
            return {
                ...state,
                text: "TODO_ADDED"
            }
        case "DELETE_TODO":
            return {
                ...state,
                text: "TODO_DELETED"
            }
        default:
            return state

    }
}
export default Todo;