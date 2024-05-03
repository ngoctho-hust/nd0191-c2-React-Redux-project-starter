import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../action/questions";
import Error404 from "./Error404";

const Poll = ({ questions, users, authedUser, dispatch }) => {
  const { id } = useParams();
  const question = questions[id];

  if (!authedUser || !question || !id) {
    return <Error404 />;
  }

  const user = users[question.author];

  const votedOptionOne = question.optionOne.votes.includes(authedUser);
  const votedOptionTwo = question.optionTwo.votes.includes(authedUser);
  const voted = votedOptionOne || votedOptionTwo;

  const getVoteInfo = (option) => {
    const numOptionOneVotes = question.optionOne.votes.length;
    const numOptionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = numOptionOneVotes + numOptionTwoVotes;

    if (option === 1) {
      const optionOnePerc = (100 * numOptionOneVotes) / totalVotes;
      return `${numOptionOneVotes} (${optionOnePerc.toFixed(2)}%)`;
    }
    if (option === 2) {
      const optionTwoPerc = (100 * numOptionTwoVotes) / totalVotes;
      return `${numOptionTwoVotes} (${optionTwoPerc.toFixed(2)}%)`;
    }
    return;
  };

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
                    className={
                      "w-100 btn btn-sm" +
                      (votedOptionOne ? " btn-primary" : " btn-outline-primary")
                    }
                  >
                    {voted ? getVoteInfo(1) : "Click"}
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
                    className={
                      "w-100 btn btn-sm" +
                      (votedOptionTwo ? " btn-primary" : " btn-outline-primary")
                    }
                  >
                    {voted ? getVoteInfo(2) : "Click"}
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
