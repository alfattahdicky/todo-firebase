import { Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
  let auth = JSON.parse(localStorage.getItem("auth"));
  return (
    auth.registered ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoute;
