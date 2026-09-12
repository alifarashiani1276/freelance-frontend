import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({  isPending, register, onSubmit }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* برند */}
        <div className="auth-brand">
          <img src="/images/logo2.png" alt="کارجو" className="auth-logo" />
          <span className="auth-brand-name">خوش آمدید</span>
        </div>

        <h1 className="auth-title">ورود به حساب</h1>
        <p className="auth-subtitle">
          برای ادامه شماره موبایل خود را وارد کنید.
        </p>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <TextField
              label={"شماره موبایل: "}
              name="phoneNumber"
              placeholder="09123456789"
              register={register}
              dir="ltr"
            />
          </div>

          <div className="pt-1">
            {isPending ? (
              <Loading />
            ) : (
              <button className="group btn btn--primary" type="submit">
                <span className="relative z-10">ادامه</span>
                <div className="btnــshine" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SendOTPForm;