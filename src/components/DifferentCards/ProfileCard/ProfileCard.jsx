import "./ProfileCard.css";
import { Link } from "react-router-dom";

function ProfileCard({ name }) {
  return (
    <div className="profile-card">
      <h1>User Profile</h1>

      <span>{name}</span>
      <Link
        className="btn btn-error"
        to="/"
        onClick={() => {
          localStorage.clear();
        }}
      >
        Log Out
      </Link>
    </div>
  );
}
export { ProfileCard };
