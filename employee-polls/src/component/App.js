import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../action/shared";
import Dashboard from "./Dashboard";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import AuthedRoute from "./AuthedRoute";
import Login from "./Login";
import Poll from "./Poll";
import { LoadingBar } from "react-redux-loading-bar";

const App = (props) => {
  console.log(props);
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <main>
      {props.authedUser && <Header />}
      <LoadingBar />
      {props.loading === true ? null : (
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route
            path="/"
            element={
              <AuthedRoute>
                <Dashboard />
              </AuthedRoute>
            }
          />
          <Route
            path="/questions/:id"
            element={
              <AuthedRoute>
                <Poll />
              </AuthedRoute>
            }
          />
        </Routes>
      )}
    </main>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  loading: users === null,
});

export default connect(mapStateToProps)(App);
