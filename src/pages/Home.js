import React from "react";
import { Badge, Button, Container, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = (props) => {
  const { quizzes } = props;
  return (
    <div>
      <Container>
        <div className="mb-3 d-flex justify-content-end">
          <Button as={Link} to={`/quiz/create`} variant="success">
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
                <div className="fw-bold">
                  {quiz.title} <Badge bg="primary">{quiz.score}</Badge>
                </div>
                {quiz.description}
                <p className="text-muted">
                  <a href={quiz.url}>{quiz.url}</a>
                </p>
              </div>
              <div>
                <Button
                  as={Link}
                  to={`/quiz/show/${quiz.id}`}
                  variant="info"
                  className="me-3"
                >
                  Show
                </Button>
                <Button
                  as={Link}
                  to={`/quiz/edit/${quiz.id}`}
                  variant="primary"
                >
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
