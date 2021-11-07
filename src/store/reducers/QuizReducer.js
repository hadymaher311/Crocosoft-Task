const QuizReducer = (state = {}, actions) => {
  switch (actions.type) {
    case "SET_QUIZ_DATA":
      return { ...state, data: actions.payload };

    default:
      return state;
  }
};

export default QuizReducer;
