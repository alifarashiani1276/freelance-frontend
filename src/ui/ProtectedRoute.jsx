import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated, isAuthorized, isApproved, isVerified } =
    useAuthorize();

  useEffect(() => {
    if (isLoading) return; // 👈 فقط خارج شو، JSX برنگردون

    if (!isAuthenticated) {
      toast.error("لطفاً ابتدا وارد حساب کاربری خود شوید.");
    } else if (!isVerified) {
      toast.error("پروفایل شما هنوز تایید نشده است.");
    } else if (!isAuthorized) {
      toast.error("شما مجاز به دسترسی به این بخش نیستید.");
    } else if (!isApproved) {
      toast.error("حساب شما هنوز توسط ادمین تایید نشده است.");
    }
  }, [isLoading, isAuthenticated, isVerified, isAuthorized, isApproved]);

  // 👇 چک واقعی isLoading باید اینجا (بیرون از useEffect) باشه که رندر بشه
  if (isLoading) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  if (!isVerified) {
    return <Navigate to="/not-access" replace />;
  }

  if (!isAuthorized) {
    return <Navigate to="/not-access" replace />;
  }

  if (!isApproved) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
