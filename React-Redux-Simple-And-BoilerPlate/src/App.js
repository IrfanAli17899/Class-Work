import React, { Component } from 'react';
import logo from './logo.svg';
import store from "./basic";
import './App.css';
import { connect } from "react-redux"
import TodoAction from './store/Actions/todoActions';

// function UpdateTodo() {
//   return {
//     type: "ADD_TODO"
//   }
// }


class App extends Component {

  componentDidMount() {
    // console.log(this.props);
    this.props.getTodo();

  //  this.props.updateTodo({name:"Irfan Ali",password:"123"});
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps)
  }


  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}


function mapStateToProps(state) {
  return ({
    Todo: state.Todo.text
  })
}

function mapDispatchToProps(dispatch) {
  return {
    // updateTodo: (data) => dispatch(UpdateTodo(data))
    getTodo:(data)=>dispatch(TodoAction.getTodo(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;


//component--->action--->reducer-->store---->component