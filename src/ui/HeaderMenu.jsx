import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineViewGrid,
  HiOutlineHome,
  HiOutlineUserCircle,
  HiOutlineLogout,
  HiChevronDown,
} from "react-icons/hi";
import useUser from "../features/authentication/useUser";
import useLogout from "../features/authentication/useLogout";

function getBasePath(role) {
  if (role === "OWNER") return "/owner";
  if (role === "FREELANCER") return "/freelancer";
  if (role === "ADMIN") return "/admin";
  return "/";
}

function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useUser();
  const { isPending: isLoggingOut, logout } = useLogout();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const basePath = getBasePath(user?.role);

  const menuItems = [
    {
      label: "داشبورد",
      icon: HiOutlineViewGrid,
      color: "#8B5CF6",
      onClick: () => navigate(`${basePath}/dashboard`),
    },
    {
      label: "صفحه اصلی",
      icon: HiOutlineHome,
      color: "#2563eb",
      onClick: () => navigate("/"),
    },
  ];

  return (
    <div className="user-menu" ref={menuRef}>
      <button
        className="user-menu__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="منو"
      >
        <HiOutlineUserCircle className="user-menu__trigger-icon" />
        <HiChevronDown
          className={`user-menu__trigger-arrow ${
            isOpen ? "user-menu__trigger-arrow--open" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="user-menu__panel">
          <div className="user-menu__header">
            <img
              src="/user.jpg"
              alt={user?.name}
              className="user-menu__header-avatar"
            />
            <div className="user-menu__header-info">
              <span className="user-menu__name">{user?.name}</span>
              <span className="user-menu__phone">{user?.phoneNumber}</span>
            </div>
          </div>

          <div className="user-menu__divider" />

          <div className="user-menu__items">
            {menuItems.map(({ label, icon: Icon, color, onClick }) => (
              <button
                key={label}
                onClick={() => {
                  onClick();
                  setIsOpen(false);
                }}
                className="user-menu__item"
              >
                <span>{label}</span>
                <Icon size={20} style={{ color, strokeWidth: 2 }} />
              </button>
            ))}
          </div>

          <div className="user-menu__divider" />

          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            disabled={isLoggingOut}
            className="user-menu__item user-menu__item--danger"
          >
            <span>{isLoggingOut ? "در حال خروج..." : "خروج"}</span>
            <HiOutlineLogout
              size={20}
              style={{ color: "#EF4444", strokeWidth: 2 }}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default HeaderMenu;
