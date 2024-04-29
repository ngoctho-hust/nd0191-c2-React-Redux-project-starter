import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addUserAnswer } from "./users";

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

export function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(answerQuestion(info));
        dispatch(addUserAnswer(info));
      })
      .catch(() => {
        alert("Error when save question answer! Try again!");
      });
  };
}

export function handleAddQuestion(info) {
  return (dispatch) => {
    return saveQuestion(info)
      .then((question) => {
        dispatch(addQuestion(question));
      })
      .catch(() => {
        alert("Error when save question! Try again!");
      });
  };
}
