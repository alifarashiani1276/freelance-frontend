import {
  HiOutlineHome,
  HiOutlineFolder,
  HiOutlineClipboardList,
  HiOutlineUser,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Children, cloneElement, isValidElement } from "react";

function SideBar({ isOpen, onClose, children }) {
  return (
    <aside
      className={`app-sidebar fixed right-0 z-40 transition-transform duration-300 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="app-sidebar__nav">
        {Children.map(children, (child) =>
          isValidElement(child) ? cloneElement(child, { onClose }) : child,
        )}
      </nav>
    </aside>
  );
}

export default SideBar;

export function CustomNavLink({ to, children, onClose }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `app-sidebar__item ${isActive ? "app-sidebar__item--active" : ""}`
      }
      to={to}
      onClick={onClose}
    >
      {children}
    </NavLink>
  );
}
