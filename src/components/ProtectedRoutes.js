import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserContext } from "../context";

const ProtectedRouted = () => {
  const { user, setUser } = useUserContext();
  const localUser =JSON.parse(localStorage.getItem("user"))
  // console.log("user :", localUser);
  const location = useLocation();
  if (!user && localUser) {
    setUser(localUser);
  }
  if (user === undefined) {
    return null; // or loading indicator/spinner/etc
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default ProtectedRouted;
