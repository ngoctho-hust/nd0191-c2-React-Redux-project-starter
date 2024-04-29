import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../action/authedUser";

const Header = ({ dispatch, authedUser }) => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-body-emphasis">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/leaderboard"
                className="nav-link px-2 link-body-emphasis"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link to="/add" className="nav-link px-2 link-body-emphasis">
                New
              </Link>
            </li>
          </ul>
          <div className="text-end">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="mdo"
              width="32"
              height="32"
              className="rounded-circle"
            />
            <span className="fw-bold"> {authedUser}</span>
            <button
              className="btn"
              onClick={() => {
                dispatch(setAuthedUser(null));
              }}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(Header);
