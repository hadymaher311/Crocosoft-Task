import store from "../../store";

export const checkQuestionsValidation = (questions) => {
  return (
    questions?.length &&
    !questions?.filter(
      (question) =>
        question.text === "" ||
        question.feedback_false === "" ||
        question.feedback_true === "" ||
        question.answers?.length === 0 ||
        question.answers?.filter((answer) => answer.text === "").length ||
        question.answers?.every((answer) => answer.is_true === false)
    ).length
  );
};

export const generateQuizId = () => {
  const { QuizId } = store.getState().ids;
  store.dispatch({ type: "SET_QUIZ_ID", payload: QuizId + 1 });
  return QuizId;
};

export const generateQuestionId = () => {
  const { questionId } = store.getState().ids;
  store.dispatch({ type: "SET_QUESTION_ID", payload: questionId + 1 });
  return questionId;
};

export const generateAnswerId = () => {
  const { answerId } = store.getState().ids;
  store.dispatch({ type: "SET_ANSWER_ID", payload: answerId + 1 });
  return answerId;
};
