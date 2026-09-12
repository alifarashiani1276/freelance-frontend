import useOwnerProjects from "../../features/projects/useOwnerProjects";
import useProposals from "../../features/proposals/useProposals";
import toLocalDateShort from "../../utils/toLocalDateShort";

const STATUS_LABELS = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

function OwnerActivity({ user }) {
  const { projects, isLoading, isError } = useOwnerProjects();

  if (isLoading)
    return (
      <p className="text-sm text-secondary-500">
        در حال دریافت سابقه فعالیت...
      </p>
    );
  if (isError || !projects)
    return (
      <div className="dashboard-table__empty">
        اطلاعات فعالیتی برای نمایش وجود ندارد.
      </div>
    );

  const activeCount = projects.filter((p) => p.status === "OPEN").length;
  const closedCount = projects.filter((p) => p.status === "CLOSED").length;

  return (
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <span className="dashboard-card__label">کل پروژه‌های ثبت‌شده</span>
        <strong className="dashboard-card__value">{projects.length}</strong>
      </div>
      <div className="dashboard-card">
        <span className="dashboard-card__label">پروژه‌های فعال</span>
        <strong className="dashboard-card__value">{activeCount}</strong>
      </div>
      <div className="dashboard-card">
        <span className="dashboard-card__label">پروژه‌های بسته‌شده</span>
        <strong className="dashboard-card__value">{closedCount}</strong>
      </div>
      <div className="dashboard-card">
        <span className="dashboard-card__label">عضو از</span>
        <strong className="dashboard-card__value">
          {toLocalDateShort(user.createdAt)}
        </strong>
      </div>
    </div>
  );
}

function FreelancerActivity({ user }) {
  const { proposals, isLoading, isError } = useProposals();

  if (isLoading)
    return (
      <p className="text-sm text-secondary-500">
        در حال دریافت سابقه فعالیت...
      </p>
    );
  if (isError || !proposals)
    return (
      <div className="dashboard-table__empty">
        اطلاعات فعالیتی برای نمایش وجود ندارد.
      </div>
    );

  const acceptedCount = proposals.filter((p) => p.status === 2).length;

  return (
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <span className="dashboard-card__label">کل پروپوزال‌های ارسالی</span>
        <strong className="dashboard-card__value">{proposals.length}</strong>
      </div>
      <div className="dashboard-card">
        <span className="dashboard-card__label">پروپوزال‌های پذیرفته‌شده</span>
        <strong className="dashboard-card__value">{acceptedCount}</strong>
      </div>
      <div className="dashboard-card">
        <span className="dashboard-card__label">عضو از</span>
        <strong className="dashboard-card__value">
          {toLocalDateShort(user.createdAt)}
        </strong>
      </div>
    </div>
  );
}

function UserActivity({ user }) {
  if (!user?.role) return null;

  const statusInfo = STATUS_LABELS[user.status] ?? STATUS_LABELS[1];

  return (
    <div>
      <div className="projects-header">
        <div>
          <h1 className="projects-header__title">سابقه فعالیت</h1>
          <p className="text-sm mt-1 text-secondary-400">
            خلاصه‌ای از فعالیت‌های شما در پلتفرم
          </p>
        </div>
        <span className={`badge ${statusInfo.className}`}>
          {statusInfo.label}
        </span>
      </div>

      {user.role === "OWNER" && <OwnerActivity user={user} />}
      {user.role === "FREELANCER" && <FreelancerActivity user={user} />}
      {user.role === "ADMIN" && (
        <div className="dashboard-table__empty">
          نمایش سابقه فعالیت برای نقش ادمین در دسترس نیست.
        </div>
      )}

      <div className="dashboard-table mt-6">
        <div className="dashboard-table__header">
          <h2 className="dashboard-table__title">جزئیات فعالیت</h2>
        </div>
        <div className="p-5">
          {user.role === "OWNER" && (
            <p className="text-sm leading-relaxed text-secondary-500">
              این خلاصه بر اساس پروژه‌هایی است که تا امروز به‌عنوان کارفرما ثبت
              کرده‌ای.
            </p>
          )}
          {user.role === "FREELANCER" && (
            <p className="text-sm leading-relaxed text-secondary-500">
              این خلاصه بر اساس پروپوزال‌هایی است که تا امروز به‌عنوان فریلنسر
              ارسال کرده‌ای.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserActivity;
