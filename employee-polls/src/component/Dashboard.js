import { connect } from "react-redux";
import Question from "./Question";

const Dashboard = ({ questions, authedUser, users }) => {
  const doneQuestionIds = users[authedUser]
    ? Object.keys(users[authedUser].answers)
    : [];
  return (
    <>
      <div className="container">
        <h2 className="pb-2 border-bottom">New Questions</h2>
        <div className="row gap-2">
          {Object.values(questions)
            .filter((q) => !doneQuestionIds.includes(q.id))
            .map((question) => (
              <Question id={question.id} key={question.id} />
            ))}
        </div>
      </div>
      <div className="container">
        <h2 className="pb-2 border-bottom">Done</h2>
        <div className="row gap-2">
          {Object.values(questions)
            .filter((q) => doneQuestionIds.includes(q.id))
            .map((question) => (
              <Question id={question.id} key={question.id} />
            ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ questions, authedUser, users }) => ({
  authedUser,
  users,
  questions: Object.values(questions).sort((a, b) => b.timestamp - a.timestamp),
});

export default connect(mapStateToProps)(Dashboard);
