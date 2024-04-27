import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Question = (props) => {
  return (
    <div className="card col-lg-3">
      <div className="card-body">
        <h5 className="card-title">{props.question.author}</h5>
        <p className="card-text">
          {new Date(props.question.timestamp).toDateString()}
        </p>
        <Link
          to={"/questions/" + props.question.id}
          className="btn btn-outline-success"
        >
          Show
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question,
  };
};

export default connect(mapStateToProps)(Question);
