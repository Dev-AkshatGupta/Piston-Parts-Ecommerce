import "./ProfileCard.css";
import { logOut } from "Redux/Reducers-Redux/authSlice";
import { useDispatch } from "react-redux";
function ProfileCard({ userDetails }) {
  const dispatch = useDispatch();
  return (
    <div className="profile-card__main">
      <h3 className="profile-card__heading">Profile Details</h3>
      <p>
        <span className="profile-card__title font-weight-900 ">First Name</span>
        <span className="margin-l-1 ">{userDetails.firstName}</span>
      </p>
      <p>
        <span className="profile-card__title font-weight-900 ">Last Name</span>
        <span className="margin-l-1 ">{userDetails.lastName}</span>
      </p>
      <p>
        <span className="profile-card__title font-weight-900 ">email</span>
        <span className="margin-l-1 ">{userDetails.email}</span>
      </p>
      <div className="divider-2"></div>
      <button
        className="btn btn-error margin-1"
        onClick={() => {
          dispatch(logOut());
          window.location.reload(false);
        }}
      >
        Log Out
      </button>
    </div>
  );
}
export { ProfileCard };
