import { useNavigate } from "react-router-dom";
import logOutIcon from "../../assets/icons/logout.svg";
import { useAuthContext } from "../../hooks/useAuthContext";

function Logout() {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={logOutIcon} alt="Logout" />
    </button>
  );
}

export default Logout;
