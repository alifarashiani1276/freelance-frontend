import React from "react";
import Loading from "../../ui/Loading";
import Stats from "./Stats";
import useProposals from "../proposals/useProposals";
import DashboardHeader from "../../ui/DashboardHeader";

function DashboardLayout() {
  const { isLoading, isError, proposals } = useProposals();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader
        title={"داشبود فریلنسر"}
        description={"درخواست های خود را مدیریت کنید"}
      />

      {isError ? (
        <p className="dashboard-table__empty">
          پروفایل شما هنوز توسط ادمین تایید نشده است.
        </p>
      ) : (
        <Stats proposals={proposals} />
      )}
    </div>
  );
}

export default DashboardLayout;
