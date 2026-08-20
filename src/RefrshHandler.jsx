import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function RefrshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      if (
        location.pathname === "/login" ||
        location.pathname === "/" ||
        location.pathname === "/signUp"     ) {
        navigate("/home", { replace: false });
      }
    }
  }, [location, navigate, setIsAuthenticated]);
  return null;
}
export default RefrshHandler;
