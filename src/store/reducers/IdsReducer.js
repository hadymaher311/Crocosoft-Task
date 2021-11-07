const IdsReducer = (state = {}, actions) => {
  switch (actions.type) {
    case "SET_QUIZ_ID":
      return { ...state, quizId: actions.payload };
    
      case "SET_QUESTION_ID":
      return { ...state, questionId: actions.payload };

    case "SET_ANSWER_ID":
      return { ...state, answerId: actions.payload };

    default:
      return state;
  }
};

export default IdsReducer;
