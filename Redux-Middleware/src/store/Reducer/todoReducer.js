
import TodoAction from "../Action/todoAction";
function TodoReducer(state = {
    isLoading: false,
    isError: false,
    todos:[],
    errorMessage: "",
    successMessage: ""
}, action) {

    switch (action.type) {
        case TodoAction.TODO_GET:
            return {
                ...state,
                isLoading: true,
            }
        case TodoAction.TODO_GET_SUCCESSFULL:
            return {
                ...state,
                isLoading: false,
                todos:action.data,
                isError: false
            }
        case TodoAction.TODO_GET_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default:
        return state;
    }

}


export default TodoReducer;