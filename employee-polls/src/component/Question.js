import { connect } from "react-redux";

const Question = (props) => {
  return (
    <div className="card col-lg-3">
      <div className="card-body">
        <h5 className="card-title">{props.question.author}</h5>
        <p className="card-text">
          {new Date(props.question.timestamp).toDateString()}
        </p>
        <a href="#" className="btn btn-outline-success">
          Show
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question,
  };
};

export default connect(mapStateToProps)(Question);
