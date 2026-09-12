import React from "react";
import Stats from "./Stats";
import useOwnerProjects from "../projects/useOwnerProjects";
import Loading from "../../ui/Loading";
import DashboardHeader from "../../ui/DashboardHeader";

function DashboardLayout() {
  const { isLoading, isError, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader
        title={"داشبود کارفرما"}
        description={"پروژه های خود را مدیریت کنید"}
      />

      {isError ? (
        <p className="dashboard-table__empty">
          پروفایل شما هنوز توسط ادمین تایید نشده است.
        </p>
      ) : (
        <Stats projects={projects} />
      )}
    </div>
  );
}

export default DashboardLayout;
