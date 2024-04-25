import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import peopleImg from "../media/people.png";
import { setAuthedUser } from "../action/authedUser";

const Login = ({ dispatch, authedUser, users }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = urlParams.get("redirectTo");
  if (authedUser) {
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (users) {
      const user = Object.values(users).find(
        (user) => user.id === username && user.password === password
      );

      if (!!user) {
        dispatch(setAuthedUser(user.id));
      } else {
        alert("Wrong username or password!");
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
                  User
                </label>
                <input
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="user"
                  placeholder="User"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
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
