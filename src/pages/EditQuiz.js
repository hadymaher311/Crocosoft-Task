import { Form, FormikProvider, useFormik } from "formik";
import React from "react";
import { Alert, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import * as Yup from "yup";
import LoadingButton from "../components/forms/LoadingButton";
import {
  checkQuestionsValidation,
  generateAnswerId,
  generateQuestionId,
} from "../components/helpers";
import CreateQuestions from "../components/quiz/CreateQuestions";
import CreateQuizHeader from "../components/quiz/CreateQuizHeader";

const EditQuiz = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  // eslint-disable-next-line
  const quiz = props.quizzes.find((q) => q.id == id);

  const FormSchema = Yup.object().shape({
    quizTitle: Yup.string().required("Quiz title is required"),
    quizDescription: Yup.string().required("Quiz description is required"),
    quizUrl: Yup.string().url().required("Quiz url is required"),
    quizScore: Yup.number()
      .positive()
      .integer()
      .required("Quiz score is required"),
  });

  const formik = useFormik({
    initialValues: {
      quizTitle: quiz?.title,
      quizDescription: quiz?.description,
      quizUrl: quiz?.url,
      quizScore: quiz?.score,
      questions: quiz?.questions_answers,
    },
    validationSchema: FormSchema,
    enableReinitialize: true,
    onSubmit: (data, { setErrors }) => {
      const isValidQuestions = checkQuestionsValidation(data.questions);

      if (isValidQuestions) {
        const questions = data.questions.map((question) => {
          const answers = question.answers.map((answer) => ({
            ...answer,
            id: answer.id ?? generateAnswerId(),
          }));
          return {
            ...question,
            answers: answers,
            id: question.id ?? generateQuestionId(),
          };
        });
        props.setQuiz(
          props.quizzes?.map((q) => {
            // eslint-disable-next-line
            return q.id == quiz.id
              ? {
                  ...q,
                  title: data.quizTitle,
                  score: data.quizScore,
                  url: data.quizUrl,
                  description: data.quizDescription,
                  questions_answers: questions,
                }
              : q;
          })
        );

        navigate("/");

        return new Promise((resolve) => setTimeout(resolve, 0));
      } else {
        setErrors({
          questions:
            "You must make sure that all questions data are complete and valid",
        });
        return new Promise((resolve) => setTimeout(resolve, 0));
      }
    },
  });

  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    setValues,
  } = formik;

  return (
    <div>
      <Container>
        <h2>Create new quiz</h2>
        <FormikProvider value={formik}>
          <Form noValidate onSubmit={handleSubmit}>
            <CreateQuizHeader
              quizTitleProps={{ ...getFieldProps("quizTitle") }}
              quizTitleError={Boolean(touched.quizTitle && errors.quizTitle)}
              quizTitleHelperText={touched.quizTitle && errors.quizTitle}
              quizDescriptionProps={{ ...getFieldProps("quizDescription") }}
              quizDescriptionError={Boolean(
                touched.quizDescription && errors.quizDescription
              )}
              quizDescriptionHelperText={
                touched.quizDescription && errors.quizDescription
              }
              quizUrlProps={{ ...getFieldProps("quizUrl") }}
              quizUrlError={Boolean(touched.quizUrl && errors.quizUrl)}
              quizUrlHelperText={touched.quizUrl && errors.quizUrl}
              quizScoreProps={{ ...getFieldProps("quizScore") }}
              quizScoreError={Boolean(touched.quizScore && errors.quizScore)}
              quizScoreHelperText={touched.quizScore && errors.quizScore}
            />

            {errors.questions && (
              <Alert variant="danger" className="mt-3">
                {errors.questions}
              </Alert>
            )}

            <CreateQuestions
              questions={values.questions}
              setQuestions={(questions) =>
                setValues({ ...values, questions: questions })
              }
            />

            <LoadingButton
              type="submit"
              isLoading={isSubmitting}
              className="mt-3"
            >
              Save
            </LoadingButton>
          </Form>
        </FormikProvider>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quizzes: state.quiz.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setQuiz: (quizzes) =>
      dispatch({
        type: "SET_QUIZ_DATA",
        payload: quizzes,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditQuiz);
