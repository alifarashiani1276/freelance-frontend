import RadioInput from "../../ui/RadioInput";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCompleteProfile from "./useCompleteProfile";
import { navigateByRole } from "../../utils/navigateByRole";

const ROLE_OPTIONS = [
  { label: "کارفرما", value: "OWNER" },
  { label: "فریلنسر", value: "FREELANCER" },
];

function CompleteProfileForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const role = watch("role");
  const { isCompleting, completeProfileAsync } = useCompleteProfile();

  const onSubmit = async (data) => {
    try {
      const { user } = await completeProfileAsync(data);
      navigateByRole(user, navigate, toast);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="auth-brand">
        <img src="/images/logo2.png" alt="کارجو" className="auth-logo" />
        <span className="auth-brand-name">کارجو</span>
        <div className="auth-brand-sep" />
      </div>

      <h1 className="auth-title">تکمیل پروفایل</h1>
      <p className="auth-subtitle">اطلاعات خود را وارد کنید.</p>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="name"
          placeholder="علی فراشیانی"
          dir="rtl"
          register={register}
          required
          validationSchema={{
            required: "نام الزامیه",
            minLength: { value: 5, message: "نام باید حداقل ۵ کاراکتر باشه" },
          }}
          errors={errors}
          label="نام و نام خانوادگی"
        />

        <TextField
          name="email"
          placeholder="email123@gmail.com"
          dir="ltr"
          type="email"
          register={register}
          required
          validationSchema={{
            required: "ایمیل الزامیه",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "ایمیل وارد شده معتبر نیست",
            },
          }}
          errors={errors}
          label="ایمیل"
        />

        <div>
          <label className="field-label">نقش شما</label>
          <div className="grid grid-cols-2 gap-3 mt-1">
            {ROLE_OPTIONS.map((option) => (
              <RadioInput
                key={option.value}
                label={option.label}
                value={option.value}
                name="role"
                register={register}
                validationSchema={{ required: "انتخاب نقش الزامیه" }}
                activeValue={role}
              />
            ))}
          </div>

          {errors.role && (
            <p className="text-xs text-red-500 mt-1">{errors.role.message}</p>
          )}
        </div>

        <div className="pt-2">
          <button
            className="group btn btn--primary"
            type="submit"
            disabled={isCompleting}
          >
            <span className="relative z-10">
              {isCompleting ? "در حال ارسال..." : "تایید و ادامه"}
            </span>
            <div className="btnــshine" />
          </button>
        </div>
      </form>
    </>
  );
}

export default CompleteProfileForm;