import { connect } from "react-redux";
import Question from "./Question";
import { useState } from "react";

const Dashboard = ({ questions, authedUser, users }) => {
  const [option, setOption] = useState("1");

  const doneQuestionIds = users[authedUser]
    ? Object.keys(users[authedUser].answers)
    : [];

  const displayedQuestions = Object.values(questions).filter((q) =>
    option === "1"
      ? !doneQuestionIds.includes(q.id)
      : doneQuestionIds.includes(q.id)
  );
  return (
    <>
      <div className="container">
        <h2 className="pb-2 border-bottom">
          <select
            onChange={(e) => {
              setOption(e.target.value);
            }}
            class="form-select form-select-lg mb-3"
            aria-label=".select option"
          >
            <option value="1">New Questions</option>
            <option value="2">Done</option>
          </select>
        </h2>
        <div className="row gap-2">
          {displayedQuestions.map((question) => (
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
