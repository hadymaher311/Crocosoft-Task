import React from "react";
import { Button, Spinner } from "react-bootstrap";

const LoadingButton = (props) => {
  const { children, isLoading, ...rest } = props;
  return (
    <Button {...rest} disabled={isLoading}>
      {isLoading && (
        <Spinner size="sm" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}{" "}
      {children}
    </Button>
  );
};

export default LoadingButton;
