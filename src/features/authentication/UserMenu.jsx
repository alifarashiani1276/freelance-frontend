import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineClock,
  HiOutlineUserCircle,
  HiOutlineLogout,
  HiChevronDown,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { navigateByRole } from "../../utils/navigateByRole";
import useLogout from "./useLogout"; 

function UserMenu({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { isPending: isLoggingOut, logout } = useLogout();

  function getBasePath() {
    if (user?.role === "OWNER") return "/owner";
    if (user?.role === "FREELANCER") return "/freelancer";
    if (user?.role === "ADMIN") return "/admin";
    return "/";
  }

  const menuItems = [
  {
    label: "داشبورد",
    icon: HiOutlineViewGrid,
    color: "rgb(var(--menu-color-dashboard))",
    onClick: () => navigateByRole(user?.role, navigate),
  },
  {
    label: "سابقه",
    icon: HiOutlineClock,
    color: "rgb(var(--menu-color-history))",
    onClick: () => navigate(`${getBasePath()}/activity`),
  },
  {
    label: "پروفایل",
    icon: HiOutlineUserCircle,
    color: "rgb(var(--menu-color-profile))",
    onClick: () => navigate(`${getBasePath()}/profile`),
  },
];
  // بستن منو با کلیک بیرون
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="user-menu" ref={menuRef}>
      {/* دکمه کاربر */}
      <button
        className="user-menu__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="منوی کاربر"
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
          {/* هدر */}
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

          {/* آیتم‌های منو */}
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

                <Icon
                  size={20}
                  style={{
                    color: color,
                    strokeWidth: 2,
                  }}
                />
              </button>
            ))}
          </div>

          <div className="user-menu__divider" />

          {/* خروج */}
           <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            disabled={isLoggingOut}
            className="user-menu__item user-menu__item--danger"
          >
            <span>{isLoggingOut ? "در حال خروج..." : "خروج"}</span>
            <HiOutlineLogout size={20} style={{ color: "#EF4444", strokeWidth: 2 }} />
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
