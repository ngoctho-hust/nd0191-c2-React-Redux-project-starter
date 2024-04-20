import { connect } from "react-redux";

const Dashboard = (props) => {
  console.log(props);

  return <div>Dashboard</div>;
};

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  ),
});

export default connect(mapStateToProps)(Dashboard);
