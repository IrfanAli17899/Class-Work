class TodoAction {

    static TODO_GET = "TODO_GET"
    static TODO_GET_SUCCESSFULL = "TODO_GET_SUCCESSFULL"
    static TODO_GET_FAILED = "TODO_GET_FAILED"


    static getTodo(data) {
        return {
            type: this.TODO_GET
        }
    }


    static getTodoSuccessfull(data) {
        return {
            type: this.TODO_GET_SUCCESSFULL,
            data: data.todos
        }
    }

    static getTodoFailed(data) {
        return {
            type: this.TODO_GET_FAILED
        }
    }
}

export default TodoAction;