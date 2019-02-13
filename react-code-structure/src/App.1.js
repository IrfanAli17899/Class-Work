import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    users: [{ id: 0, name: "admin", pass: "admin" },
    { id: 1, name: "irfan", pass: "irfan" },
    { id: 2, name: "aamir", pass: "aamir" }],
    isAuth: false,
    currentUser: null,
    courses: [{ id: 0, title: "React" },
    { id: 1, title: "Kubernetes" },
    { id: 2, title: "NodeJS" },
    { id: 2, title: "UX design" }],
    quiz: [{
      id: 0,
      courseID: 0,
      quiz_title: "React quiz 1",
      questions: [{
        id: 0,
        question: "what is true about react",
        answers: [{ id: 0, answer: "React is framework" },
        { id: 1, answer: "React is machine language" },
        { id: 2, answer: "React is JS library" }],
        correctAns: [2],
        multipleAns: true
      },
      {
        id: 1,
        question: "Data in React is?",
        answers: [{ id: 0, answer: "BiDirectional" },
        { id: 1, answer: "UniDirectional" }],
        correctAns: [1],
        multipleAns: false
      }],
      proctKey: null
    },
    {
      id: 1,
      courseID: 0,
      quiz_title: "React quiz 2",
      questions: [{
        id: 0,
        question: "what is true about react",
        answers: [{ id: 0, answer: "React is framework" },
        { id: 1, answer: "React is machine language" },
        { id: 2, answer: "React is JS library" }],
        correctAns: [2],
        multipleAns: true
      },
      {
        id: 1,
        question: "Data in React is?",
        answers: [{ id: 0, answer: "BiDirectional" },
        { id: 1, answer: "UniDirectional" }],
        correctAns: [1],
        multipleAns: false
      }],
      proctKey: null
    },
    {
      id: 2,
      courseID: 2,
      quiz_title: "NodeJS quiz 1",
      questions: [{
        id: 0,
        question: "what is true about react",
        answers: [{ id: 0, answer: "React is framework" },
        { id: 1, answer: "React is machine language" },
        { id: 2, answer: "React is JS library" }],
        correctAns: [2],
        multipleAns: true
      },
      {
        id: 1,
        question: "Data in React is?",
        answers: [{ id: 0, answer: "BiDirectional" },
        { id: 1, answer: "UniDirectional" }],
        correctAns: [1],
        multipleAns: false
      }],
      proctKey: null
    },
    ],
    userAllowedQuizs: [{
      id: 0,
      userID: 0,
      courseID: [0, 1],
      quizID: [{
        id: 0,
        marks: null
      }
        , {
        id: 1,
        marks: null
      }]
    },
    {
      id: 1,
      userID: 1,
      courseID: [1],
      quizID: [{
        id: 0,
        marks: null
      }
        , {
        id: 1,
        marks: null
      }]
    }]
  }

  render() {
    return (
      <div>
        {
          this.state.quiz.map(
            qs => {
              return (
                <div key={qs.id}>
                  <h1>{qs.quiz_title}</h1>
                  {
                    qs.questions.map(q => {
                      return (
                        <span key={q.id}>
                          <h3>
                            {q.question}
                          </h3>
                          <ol>
                            {
                              q.answers.map(ans => {
                                return (
                                  <li key={ans.id}>
                                    {ans.answer}
                                  </li>
                                )
                              })
                            }
                          </ol>
                        </span>
                      )
                    })}
                </div>
              )
            })
        }
      </div>
    );
  }
}

export default App;
