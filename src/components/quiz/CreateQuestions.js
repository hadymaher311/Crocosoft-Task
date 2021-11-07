import React from "react";
import { Button } from "react-bootstrap";
import Input from "../forms/Input";
import CreateAnswers from "./CreateAnswers";

const questionInstance = {
  text: "",
  answer_id: null,
  answers: [],
  feedback_false: "",
  feedback_true: "",
};

const CreateQuestions = (props) => {
  const { questions, setQuestions } = props;

  const setAnswers = (answers, index) => {
    questions[index].answers = answers;
    setQuestions(questions);
  };

  const addNewQuestion = () => {
    questions?.push(Object.assign({}, questionInstance));
    setQuestions(questions);
  };

  const removeQuestion = (index) => {
    questions.splice(index, 1);
    setQuestions(questions);
  };

  const handleInput = (event, index) => {
    const { name, value } = event.target;
    questions[index][name] = value;
    setQuestions(questions);
  };

  return (
    <div className="mt-3">
      <h6>Questions</h6>
      <div>
        {questions?.map((question, index) => (
          <div key={index} className="d-flex align-items-start mt-3">
            <div className="flex-grow-1">
              <Input
                label="Question title"
                size="lg"
                required
                name="text"
                value={question.text}
                onChange={(event) => handleInput(event, index)}
              />
              <Input
                label="Question right feedback"
                size="sm"
                required
                name="feedback_true"
                value={question.feedback_true}
                onChange={(event) => handleInput(event, index)}
              />
              <Input
                label="Question wrong feedback"
                size="sm"
                required
                name="feedback_false"
                value={question.feedback_false}
                onChange={(event) => handleInput(event, index)}
              />

              <CreateAnswers
                answers={question.answers}
                setAnswers={(answers) => setAnswers(answers, index)}
              />
            </div>
            <div className="mx-3">
              {index === questions.length - 1 && (
                <Button className="me-3" onClick={addNewQuestion}>
                  +
                </Button>
              )}
              <Button variant="danger" onClick={() => removeQuestion(index)}>
                -
              </Button>
            </div>
          </div>
        ))}

        {!questions?.length && (
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={addNewQuestion}>
              + Add new question
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateQuestions;
