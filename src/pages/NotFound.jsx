import { HiArrowRight, HiOutlineExclamationTriangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
 const moveBack =   useMoveBack();

  return (
    <div className="complete-profile">
      <div className="auth-card text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#2a2a2f] bg-[#111113]">
          <HiOutlineExclamationTriangle className="text-[#846bbf]" size={42} />
        </div>

        <h1 className="auth-title text-4xl font-black mb-2">404</h1>

        <h2 className="auth-title mb-3">صفحه مورد نظر پیدا نشد</h2>

        <p className="auth-subtitle mb-8">
          ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه‌ای که به دنبال آن
          هستید حذف شده باشد.
        </p>

        <button
          onClick={moveBack}
          className="group btn btn--secondary flex items-center justify-center gap-2"
        >
          <HiArrowRight size={18} />
          <span>بازگشت به صفحه قبل</span>
          <div className="btnــshine" />
        </button>
      </div>
    </div>
  );
}

export default NotFound;
