import React from "react";

export const CTX = React.createContext();

const initialState = {
  subjects: [],
  quizzes: [],
  quiz: {},
  options: [],
  total: [],
  answer: "",
  your_answer: [],
  total_score: 0,
  disabled: false,
  time_up: false,
  users: {},
  edit_user: {},
  test: null,
  search_keyword: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUBJECT":
      return {
        ...state,
        subjects: action.payload,
        disabled: false
      };
    case "FETCH_DATA_QUIZZES":
      return {
        ...state,
        subjects: state.subjects,
        quiz: action.payload,
        quizzes: action.quizzes,
        options: action.payload.options,
        total: action.total
      };
    case "YOUR_ANSWER":
      return {
        ...state,
        answer: action.payload
      };
    case "CLOSING_ANSWER":
      if (state.answer === state.quiz.answer) {
        return {
          ...state,
          total_score: state.total_score + 100,
          your_answer: [
            ...state.your_answer,
            state.answer
          ]
        };
      } else {
        return {
          ...state,
          total_score: state.total_score,
          your_answer: [
            ...state.your_answer,
            state.answer
          ]
        };
      }
    case "TIME_UP":
      return {
        ...state,
        disabled: true,
        time_up: action.payload
      };
    case "UPDATE_PARAMS":
      return {
        ...state,
        total_score: 0,
        your_answer: []
      };
    case "GET_BODY_REGISTER":
      return {
        ...state,
        users: action.payload
      };
    case "GET_BODY_EDIT":
      return {
        ...state,
        edit_user: action.payload
      };
    case "TEST":
      return {
        ...state,
        test: {
          ...action.payload
        }
      };
    case "SEARCH":
      // let keyword = action.payload;
      // const update_search = state.subjects.filter(subject => {
      //   return subject.subject.toLowerCase().search(keyword.toLowerCase()) !== -1;
      //   // return subject.subject.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      // });

      return {...state, search_keyword: action.payload};
    default:
      throw new Error();
  }
};

export default function Store({children}) {
  const state = React.useReducer(reducer, initialState);

  return (<CTX.Provider value={state}>{children}</CTX.Provider>)
}
