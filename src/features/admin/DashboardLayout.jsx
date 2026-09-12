import DashboardHeader from "../../ui/DashboardHeader";
import useProposals from "../proposals/useProposals";
import useProjects from "../../hooks/useProjects";
import Loading from "../../ui/Loading";
import useUsers from "./useUsers";
import Stats from "./Stats";

function DashboardLayout() {
  const { isLoading: isLoading1, isError: isError1, proposals } = useProposals();
  const { isLoading: isLoading2, isError: isError2, projects } = useProjects();
  const { isLoading: isLoading3, isError: isError3, users } = useUsers();

  const isLoading = isLoading1 || isLoading2 || isLoading3;
  const isError = isError1 || isError2 || isError3;

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <div className="dashboard-table__empty">
        مشکلی در دریافت اطلاعات داشبورد پیش آمد. لطفاً صفحه را رفرش کنید.
      </div>
    );
  }

  return (
    <div>
      <DashboardHeader title={"داشبورد ادمین"} description={"مدیریت وبسایت"} />
      <Stats users={users.length} proposals={proposals.length} projects={projects.length}  />
    </div>
  );
}

export default DashboardLayout;