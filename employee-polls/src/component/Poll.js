import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../action/questions";

const Poll = ({ questions, users, authedUser, dispatch }) => {
  const { id } = useParams();
  const question = questions[id];
  const user = users[question.author];

  const voted =
    question.optionOne.votes.includes(authedUser) ||
    question.optionTwo.votes.includes(authedUser);

  const handleClick = (answer) => {
    dispatch(handleAnswerQuestion({ authedUser, qid: id, answer }));
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h2>Poll by {question.author}</h2>
          <img
            src={user.avatarURL}
            className="rounded w-25 p-3"
            alt={question.author}
          />
          <h2>Would You Rather</h2>
          <div className="row text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-body">
                  <p>{question.optionOne.text}</p>
                  <button
                    onClick={() => {
                      handleClick("optionOne");
                    }}
                    disabled={voted}
                    type="button"
                    className="w-100 btn btn-sm btn-primary"
                  >
                    {voted ? question.optionOne.votes.length : "Click"}
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-body">
                  <p>{question.optionTwo.text}</p>
                  <button
                    disabled={voted}
                    onClick={() => {
                      handleClick("optionTwo");
                    }}
                    type="button"
                    className="w-100 btn btn-sm btn-primary"
                  >
                    {voted ? question.optionTwo.votes.length : "Click"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  return {
    questions,
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(Poll);
