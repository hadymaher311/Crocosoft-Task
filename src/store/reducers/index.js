import { combineReducers } from "redux";
import QuizReducer from "./QuizReducer";

const AllReducers = combineReducers({
  quiz: QuizReducer,
});

export default AllReducers;
