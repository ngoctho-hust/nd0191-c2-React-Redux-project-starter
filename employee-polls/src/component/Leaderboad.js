import { connect } from "react-redux";

const Leaderboard = ({ users }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th scope="col">Users</th>
                <th scope="col">Answered</th>
                <th scope="col">Created</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <img
                      className="rounded-circle me-1"
                      width="24"
                      height="24"
                      src={user.avatarURL}
                      alt={user.id}
                    />
                    <p>
                      <span className="fw-bold">{user.name}</span>
                      <br />
                      {user.id}
                    </p>
                  </td>
                  <td>{Object.keys(user.answers).length}</td>
                  <td>{user.questions.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users: Object.values(users).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length
  ),
});

export default connect(mapStateToProps)(Leaderboard);
