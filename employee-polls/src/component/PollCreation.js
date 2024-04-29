import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../action/questions";

const PollCreation = ({ dispatch, authedUser }) => {
  const navigate = useNavigate();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleAddQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: authedUser,
      })
    );
    navigate("/");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm">
          <h1>Would You Rather</h1>
          <h2>Create Your Own Poll</h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="mb-3">
              <label htmlFor="optionOne" className="form-label">
                First Option
              </label>
              <input
                value={optionOne}
                onChange={(e) => {
                  setOptionOne(e.target.value);
                }}
                type="text"
                className="form-control"
                id="optionOne"
                placeholder="Option One"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="optionTwo" className="form-label">
                Second Option
              </label>
              <input
                value={optionTwo}
                onChange={(e) => {
                  setOptionTwo(e.target.value);
                }}
                type="text"
                className="form-control"
                id="optionTwo"
                placeholder="Option Two"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(PollCreation);
