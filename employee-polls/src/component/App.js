import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../action/shared";
import Dashboard from "./Dashboard";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import AuthedRoute from "./AuthedRoute";
import Login from "./Login";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <main>
      {props.authedUser && <Header />}
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
      </Routes>
    </main>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
