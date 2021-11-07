import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  const { label, helperText, error, valid, validFeedback, ...rest } = props;
  return (
    <Form.Group className="flex-grow-1">
      <Form.Control
        placeholder={label}
        isInvalid={error}
        isValid={valid}
        {...rest}
      />
      {valid && (
        <Form.Control.Feedback type="valid">
          {validFeedback}
        </Form.Control.Feedback>
      )}
      {error && (
        <Form.Control.Feedback type="invalid">
          {helperText}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};

export default Input;
