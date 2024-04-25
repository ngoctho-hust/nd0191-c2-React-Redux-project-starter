import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const AuthedRoute = ({ authedUser, children }) => {
  const redirectUrl = window.location.href
    .toString()
    .split(window.location.host)[1];

  return authedUser ? (
    children
  ) : (
    <Navigate to={`/login?redirectTo=${redirectUrl}`} />
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(AuthedRoute);
