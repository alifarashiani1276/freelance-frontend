import React, { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import CheckOTPForm from "./CheckOTPForm";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const { handleSubmit, register, getValues } = useForm();
  const { user } = useUser();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtp = async (data) => {
    try {
      const res = await mutateAsync({ phoneNumber: data.phoneNumber });
      toast.success(res.message);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            setStep={setStep}
            register={register}
            isPending={isPending}
            onSubmit={handleSubmit(sendOtp)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onResendOTP={() => sendOtp(getValues())}
            onBack={() => setStep((s) => s - 1)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div className="w-full ">{renderStep()}</div>
    </div>
  );
}

export default AuthContainer;
