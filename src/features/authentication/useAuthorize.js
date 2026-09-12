import { useLocation } from "react-router-dom";
import useUser from "./useUser";

function useAuthorize() {
  const { isLoading, user } = useUser();
  const { pathname } = useLocation();

  let isAuthenticated = false;
  if (user) isAuthenticated = true;

  let isAuthorized = false;
  let isVerified = false;
  if (user && Number(user.status) === 2) isVerified = true;

  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const desiredRole = pathname.split("/").at(1);

  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAuthorized = true;
  }

  // کاربر باید status === 2 (تایید شده توسط ادمین) داشته باشه
  const isApproved = user?.status === 2;

  return {
    isLoading,
    user,
    isAuthenticated,
    isAuthorized,
    isApproved,
    isVerified,
  };
}

export default useAuthorize;
