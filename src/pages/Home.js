import React from "react";
import { Button, Container, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

const Home = (props) => {
  const { quizzes } = props;
  return (
    <div>
      <Container>
        <div className="mb-3 d-flex justify-content-end">
          <Button as="a" href={`/quiz/create`} variant="success">
            Create Quiz
          </Button>
        </div>

        <ListGroup>
          {quizzes.map((quiz, index) => (
            <ListGroup.Item
              key={index}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{quiz.title}</div>
                {quiz.description}
              </div>
              <div>
                <Button
                  as="a"
                  href={`/quiz/show/${quiz.id}`}
                  variant="info"
                  className="me-3"
                >
                  Show
                </Button>
                <Button as="a" href={`/quiz/edit/${quiz.id}`} variant="primary">
                  Edit
                </Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quizzes: state.quiz.data,
  };
};

export default connect(mapStateToProps)(Home);
