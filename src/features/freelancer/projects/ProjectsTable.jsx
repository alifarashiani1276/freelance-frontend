import React from "react";
import Loading from "../../../ui/Loading";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import useProjects from "../../../hooks/useProjects";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { projects, isLoading, isError } = useProjects();

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <p className="dashboard-table__empty">
        پروفایل شما هنوز توسط ادمین تایید نشده است.
      </p>
    );
  }

  if (!projects?.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th> پیشنهاد</th>
      </Table.Header>

      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
