import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import OtpInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";
import Loading from "../../ui/Loading";
import { navigateByRole } from "../../utils/navigateByRole";

function CheckOTPForm({ phoneNumber, onResendOTP, onBack }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({ mutationFn: checkOtp });

  const checkOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({ otp, phoneNumber });
      toast.success(message);

      if (!user?.isActive) {
        return navigate("/complete-profile");
      }

      if (user?.status !== 2) {
        toast("حساب شما هنوز فعال نشده است. لطفا منتظر بمانید تا حساب شما توسط ادمین تایید شود.")
        navigate("/");
        return;
      }

      navigateByRole(user?.role,navigate)

    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (time === 0) return;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const handleResendOTP = () => {
    setTime(5);
    onResendOTP();
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* برند */}
        <div className="auth-brand">
          <img src="/images/logo2.png" alt="کارجو" className="auth-logo" />
          <span className="auth-brand-name">کارجو</span>
        </div>

        <h1 className="auth-title">تایید شماره موبایل</h1>
        <p className="auth-subtitle">کد ۶ رقمی ارسال شده را وارد کنید.</p>

        {/* badge شماره */}
        <div className="auth-phone-badge">
          <span>کد به {phoneNumber} ارسال شد</span>
        </div>

        <form onSubmit={checkOTPHandler}>
          <OtpInput
            value={otp}
            onChange={(value) => setOtp(value.replace(/\D/g, ""))}
            numInputs={6}
            inputType="tel"
            containerStyle="flex justify-center gap-1 sm:gap-2 direction-ltr"
            renderInput={(props) => (
              <input
                {...props}
                inputMode="numeric"
                pattern="[0-9]*"
                className="otpInput"
              />
            )}
          />

          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button
                disabled={otp.length !== 6}
                className="group btn btn--primary mt-6"
                type="submit"
              >
                <span className="relative z-10">تایید کد</span>
                <div className="btnــshine" />
              </button>
            )}
          </div>
        </form>

        {/* footer actions */}
        <div className="auth-actions">
          <button
            type="button"
            onClick={onBack}
            className="btn--resend flex items-center gap-1"
          >
            <HiArrowRight size={13} />
            ویرایش شماره
          </button>

          {time > 0 ? (
            <span className="auth-timer">
              ارسال مجدد تا <span>{time}</span> ثانیه
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResendOTP}
              className="btn--resend"
            >
              ارسال مجدد کد
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckOTPForm;