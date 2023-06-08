import { Navigate } from "react-router-dom";

function ProfilePage({ userInSession }) {
  if (!userInSession) {
    return <Navigate to="/" />;
  }
  return <h1>Hello {userInSession.name}</h1>;
}

export default ProfilePage;
