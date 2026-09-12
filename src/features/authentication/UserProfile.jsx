import { useState } from "react";
import useUpdateProfile from "../../features/authentication/useUpdateProfile";

const ROLE_LABELS = {
  OWNER: "کارفرما",
  FREELANCER: "فریلنسر",
  ADMIN: "ادمین",
};

function UserProfile({ user }) {
  const { editProfile, isUpdating } = useUpdateProfile();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    biography: user?.biography || "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    editProfile(formData);
  }

  if (!user) {
    return (
      <div className="dashboard-table__empty">اطلاعات پروفایل پیدا نشد.</div>
    );
  }

  return (
    <div>
      <div className="projects-header">
        <h1 className="projects-header__title">پروفایل کاربری</h1>
        <span className="badge badge--primary">
          {ROLE_LABELS[user.role] || user.role}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="dashboard-table p-5 space-y-4">
        <div>
          <label className="field-label">نام و نام خانوادگی</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="textField__input"
          />
        </div>

        <div>
          <label className="field-label">ایمیل</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="textField__input"
          />
        </div>

        <div>
          {/* شماره موبایل غیرقابل‌ویرایش گذاشته شد چون همون شناسه‌ی ورود/OTP هست؛
              اگه لازمه قابل‌تغییر باشه بگو تا یه فلوی تایید جدا براش بسازیم */}
          <label className="field-label">شماره موبایل</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            disabled
            className="textField__input"
          />
        </div>

        <div>
          <label className="field-label">بیوگرافی</label>
          <input
            type="text"
            name="biography"
            maxLength={30}
            value={formData.biography}
            onChange={handleChange}
            placeholder="مثلاً: طراح رابط کاربری"
            className="textField__input"
          />
        </div>

        <button
          type="submit"
          disabled={isUpdating}
          className="btn btn--primary btn--sm"
        >
          {isUpdating ? "در حال ذخیره..." : "ذخیره تغییرات"}
        </button>
      </form>
    </div>
  );
}

export default UserProfile;
