import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import peopleImg from "../media/people.png";
import { setAuthedUser } from "../action/authedUser";

const Login = ({ dispatch, authedUser, users }) => {
  const [user, setUser] = useState(users ? Object.keys(users)[0] : undefined);

  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get("redirectTo");
  if (authedUser) {
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (users) {
      if (!!user) {
        dispatch(setAuthedUser(user));
      } else {
        alert("Select an user to login!");
      }
    }
  };

  return (
    <main>
      <div className="container text-center">
        <div className="row">
          <div className="col-sm">
            <h1>Employee Polls</h1>
            <img src={peopleImg} className="rounded" alt="Employee Polls" />
            <h2>Log In</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="user" className="form-label">
                  Select user to login
                </label>
                <select
                  onChange={(e) => {
                    setUser(e.target.value);
                  }}
                  class="form-select"
                  aria-label="Select User"
                >
                  {Object.keys(users).map((userId) => (
                    <option value={userId}>{userId}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});

export default connect(mapStateToProps)(Login);
