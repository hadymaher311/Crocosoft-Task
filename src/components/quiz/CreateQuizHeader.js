import React from "react";
import Input from "../forms/Input";

const CreateQuizHeader = (props) => {
  const {
    quizTitleProps,
    quizTitleError,
    quizTitleHelperText,
    quizDescriptionProps,
    quizDescriptionError,
    quizDescriptionHelperText,
    quizUrlProps,
    quizUrlError,
    quizUrlHelperText,
    quizScoreProps,
    quizScoreError,
    quizScoreHelperText,
  } = props;

  return (
    <div>
      <Input
        size="lg"
        type="text"
        label="Quiz title"
        {...quizTitleProps}
        autoFocus
        required
        error={quizTitleError}
        helperText={quizTitleHelperText}
      />
      <Input
        size="sm"
        type="text"
        label="Quiz description"
        {...quizDescriptionProps}
        required
        error={quizDescriptionError}
        helperText={quizDescriptionHelperText}
      />
      <Input
        size="sm"
        type="url"
        label="Quiz YouTube url"
        {...quizUrlProps}
        required
        error={quizUrlError}
        helperText={quizUrlHelperText}
      />
      <Input
        size="sm"
        type="number"
        label="Quiz Score"
        {...quizScoreProps}
        required
        error={quizScoreError}
        helperText={quizScoreHelperText}
      />
    </div>
  );
};

export default CreateQuizHeader;
