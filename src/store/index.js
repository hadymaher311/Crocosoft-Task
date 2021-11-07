import { createStore } from "redux";
import AllReducers from "./reducers";
const quizes = require("../data/quizes.json");

const initialStates = {
  quiz: {
    data: [quizes],
  },
  ids: {
    quizId: 30,
    questionId: 56,
    answerId: 131,
  },
};

const store = createStore(
  AllReducers,
  initialStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
