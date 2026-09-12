import useOwnerProjects from "./useOwnerProjects";
import Table from "../../ui/Table";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import ProjectRow from "./ProjectRow";

function ProjectTable() {
  const { isLoading, isError, projects } = useOwnerProjects();

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
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>

      <Table.Body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProjectTable;
