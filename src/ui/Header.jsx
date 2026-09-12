import { HiMenuAlt2 } from "react-icons/hi";
import UserAvatar from "../features/authentication/UserAvatar";
import DarkModeToggle from "./DarkModeToggle";
import HeaderMenu from "./HeaderMenu";

function Header({ onMenuClick }) {
  return (
    <header className="app-header">
      <button
        className="app-header__mobile-menu-btn lg:hidden"
        onClick={onMenuClick}
        aria-label="منو"
      >
        <HiMenuAlt2 size={22} />
      </button>
      <UserAvatar />
      <div className="app-header__nav">
        <DarkModeToggle />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
