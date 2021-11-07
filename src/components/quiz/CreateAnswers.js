import React from "react";
import { InputGroup, Button } from "react-bootstrap";
import Input from "../forms/Input";

const answerInstance = {
  is_true: false,
  text: "",
};

const CreateAnswers = (props) => {
  const { answers, setAnswers } = props;

  const addNewAnswer = () => {
    answers?.push(Object.assign({}, answerInstance));
    setAnswers(answers);
  };

  const removeAnswer = (index) => {
    answers.splice(index, 1);
    setAnswers(answers);
  };

  const handleInput = (event, index) => {
    const { name, value } = event.target;
    answers[index][name] = value;
    setAnswers(answers);
  };

  const handleRadio = (event, index) => {
    const newAnswers = answers.map((answer) => ({ ...answer, is_true: false }));
    newAnswers[index].is_true = true;
    setAnswers(newAnswers);
  };

  return (
    <div className="mt-3">
      <h6>Answers</h6>
      {answers?.map((answer, index) => (
        <div key={index} className="d-flex align-items-start">
          <div className="flex-grow-1">
            <InputGroup>
              <InputGroup.Radio
                aria-label="Radio button for following text input"
                checked={answer.is_true}
                onChange={(event) => handleRadio(event, index)}
              />
              <Input
                aria-label="Text input with radio button"
                label="Answer"
                required
                name="text"
                value={answer.text}
                onChange={(event) => handleInput(event, index)}
                valid={answer.is_true}
                validFeedback="This is the correct answer"
              />
            </InputGroup>
          </div>
          <div className="mx-3">
            {index === answers.length - 1 && (
              <Button className="me-3" onClick={addNewAnswer}>
                +
              </Button>
            )}
            <Button variant="danger" onClick={() => removeAnswer(index)}>
              -
            </Button>
          </div>
        </div>
      ))}
      {!answers?.length && (
        <div className="d-grid gap-2">
          <Button variant="primary" onClick={addNewAnswer}>
            + Add new answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default CreateAnswers;
