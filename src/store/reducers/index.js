import { combineReducers } from "redux";
import IdsReducer from "./IdsReducer";
import QuizReducer from "./QuizReducer";

const AllReducers = combineReducers({
  quiz: QuizReducer,
  ids: IdsReducer,
});

export default AllReducers;
