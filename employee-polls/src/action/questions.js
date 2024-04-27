import { saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function answerQuestion({ author, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    author,
    qid,
    answer,
  };
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(answerQuestion(info));
      })
      .catch(() => {
        alert("Error when save question answer! Try again!");
      });
  };
}
