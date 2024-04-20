import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../action/shared";
import Dashboard from "./Dashboard";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default connect()(App);
