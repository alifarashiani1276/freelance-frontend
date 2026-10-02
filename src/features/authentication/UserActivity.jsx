import {
  HiOutlineViewGrid,
  HiOutlineLightningBolt,
  HiOutlineArchive,
  HiOutlineCalendar,
  HiOutlineClipboardList,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import useOwnerProjects from "../../features/projects/useOwnerProjects";
import useProposals from "../../features/proposals/useProposals";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbers } from "../../utils/toPersianNumbers";

const STATUS_LABELS = [
  { label: "رد شده", className: "badge--danger" },
  { label: "در انتظار تایید", className: "badge--secondary" },
  { label: "تایید شده", className: "badge--success" },
];

/*
  رنگ آیکون‌ها از متغیرهای CSS خود پروژه خوانده می‌شن
  (همونایی که توی لایت و دارک مود مقدارشون عوض می‌شه)
  برای همین خودکار از دارک مود پیروی می‌کنن.
*/
const ACCENTS = {
  indigo: "--menu-color-dashboard",
  amber: "--menu-color-history",
  emerald: "--menu-color-profile",
  blue: "--color-primary-900",
};

function ActivityCard({ title, value, icon, accent = "indigo", small = false }) {
  const accentVar = ACCENTS[accent];

  return (
    <div
      className="flex items-center justify-between gap-3 transition-shadow duration-200 hover:shadow-md"
      style={{
        background: "rgb(var(--surface-1))",
        border: "1px solid rgb(var(--border-default))",
        borderRadius: "var(--radius-lg)",
        padding: "20px",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div className="min-w-0">
        <p
          className="mb-2 text-xs"
          style={{ color: "rgb(var(--color-secondary-500))" }}
        >
          {title}
        </p>
        <p
          className={`font-bold leading-tight ${small ? "text-xl" : "text-3xl"}`}
          style={{ color: "rgb(var(--color-secondary-900))" }}
        >
          {value}
        </p>
      </div>

      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{
          background: `rgba(var(${accentVar}), 0.14)`,
          color: `rgb(var(${accentVar}))`,
        }}
      >
        {icon}
      </div>
    </div>
  );
}

function ActivityGrid({ children }) {
  return (
    <div
      className="mb-8 grid gap-4"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
    >
      {children}
    </div>
  );
}

function ActivityMessage({ children }) {
  return (
    <div
      className="py-12 text-center text-sm"
      style={{ color: "rgb(var(--color-secondary-500))" }}
    >
      {children}
    </div>
  );
}

function OwnerActivity({ user }) {
  const { projects, isLoading, isError } = useOwnerProjects();

  if (isLoading)
    return <ActivityMessage>در حال دریافت سابقه فعالیت...</ActivityMessage>;
  if (isError || !projects)
    return (
      <ActivityMessage>اطلاعات فعالیتی برای نمایش وجود ندارد.</ActivityMessage>
    );

  const activeCount = projects.filter((p) => p.status === "OPEN").length;
  const closedCount = projects.filter((p) => p.status === "CLOSED").length;

  return (
    <ActivityGrid>
      <ActivityCard
        title="کل پروژه‌های ثبت‌شده"
        value={toPersianNumbers(projects.length)}
        icon={<HiOutlineViewGrid size={24} />}
        accent="indigo"
      />
      <ActivityCard
        title="پروژه‌های فعال"
        value={toPersianNumbers(activeCount)}
        icon={<HiOutlineLightningBolt size={24} />}
        accent="emerald"
      />
      <ActivityCard
        title="پروژه‌های بسته‌شده"
        value={toPersianNumbers(closedCount)}
        icon={<HiOutlineArchive size={24} />}
        accent="amber"
      />
      <ActivityCard
        title="عضو از"
        value={toLocalDateShort(user.createdAt)}
        icon={<HiOutlineCalendar size={24} />}
        accent="blue"
        small
      />
    </ActivityGrid>
  );
}

function FreelancerActivity({ user }) {
  const { proposals, isLoading, isError } = useProposals();

  if (isLoading)
    return <ActivityMessage>در حال دریافت سابقه فعالیت...</ActivityMessage>;
  if (isError || !proposals)
    return (
      <ActivityMessage>اطلاعات فعالیتی برای نمایش وجود ندارد.</ActivityMessage>
    );

  const acceptedCount = proposals.filter((p) => p.status === 2).length;

  return (
    <ActivityGrid>
      <ActivityCard
        title="کل پروپوزال‌های ارسالی"
        value={toPersianNumbers(proposals.length)}
        icon={<HiOutlineClipboardList size={24} />}
        accent="indigo"
      />
      <ActivityCard
        title="پروپوزال‌های پذیرفته‌شده"
        value={toPersianNumbers(acceptedCount)}
        icon={<HiOutlineCheckCircle size={24} />}
        accent="emerald"
      />
      <ActivityCard
        title="عضو از"
        value={toLocalDateShort(user.createdAt)}
        icon={<HiOutlineCalendar size={24} />}
        accent="blue"
        small
      />
    </ActivityGrid>
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
          <p
            className="mt-1 text-sm"
            style={{ color: "rgb(var(--color-secondary-500))" }}
          >
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
        <ActivityMessage>
          نمایش سابقه فعالیت برای نقش ادمین در دسترس نیست.
        </ActivityMessage>
      )}

      <div className="dashboard-table mt-6">
        <div className="dashboard-table__header">
          <h2 className="dashboard-table__title">جزئیات فعالیت</h2>
        </div>
        <div className="p-5">
          {user.role === "OWNER" && (
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgb(var(--color-secondary-600))" }}
            >
              این خلاصه بر اساس پروژه‌هایی است که تا امروز به‌عنوان کارفرما ثبت
              کرده‌ای.
            </p>
          )}
          {user.role === "FREELANCER" && (
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgb(var(--color-secondary-600))" }}
            >
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