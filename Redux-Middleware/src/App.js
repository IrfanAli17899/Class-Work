import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"
import todoAction from "./store/Action/todoAction";
import TodoMiddleware from "./store/Middleware/todoMiddleware";
import store from "./store/store";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      ques: [{
        test: [{
          key: "",
          questions: [{
            ques: "",
            propesedAns: {
              0: {
                ansNo: "",
                Ans: ""
              },
              1: {
                ansNo: "",
                Ans: ""
              }
            },
            correctAns: [ansNo, ansNo, "", ""],
            isMultiple: true
          }, {}, {}]
        }, {}]
      }, {}]
    }
  }

  componentDidMount() {
    this.props.getTodo()

  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      todos: nextProps.todos
    })
  }


  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        Hello World
        <ul>
          {todos.length && todos.map((todo, index) => {
            return (
              <li className="todo" key={index}>{todo.title}<br /><br /></li>
            )
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.TodoReducer.isLoading,
    isError: state.TodoReducer.isError,
    todos: state.TodoReducer.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTodo: (data) => dispatch(TodoMiddleware.getTodo(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

// export default App;


//component--->action--->reducer-->store---->component