import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogout();

  return isPending ? (
    <Loading />
  ) : (
    <button
      onClick={logout}
      className="app-header__icon-btn app-header__icon-btn--danger"
      aria-label="خروج"
    >
      <HiArrowRightOnRectangle size={20} />
    </button>
  );
}

export default Logout;
