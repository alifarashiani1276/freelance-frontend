import { HiEye, HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import Table from "../../ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import React, { useState } from "react";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import Toggle from "../../ui/Toggle";
import useChangeProjectStatus from "./useChangeProjectStatus";
import { Link } from "react-router-dom";
import Spinner from "../../ui/Spinner";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleting, removeProject } = useRemoveProject();
  const { isChangingStatus, changeStatus } = useChangeProjectStatus();

  const handleStatusChange = (checked) => {
    changeStatus({
      id: project._id,
      status: checked ? "OPEN" : "CLOSED",
    });
  };

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{project.category.title}</td>
      <td>{toPersianNumbersWithComma(project.budget)} تومان</td>
      <td>{toLocalDateShort(project.deadline)}</td>

      <td>
        <div className="table-tags">
          {project.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>

      <td>{project.freelancer?.name || "—"}</td>

      <td>
        <div className="flex items-center gap-2">
          <Toggle
            checked={project.status === "OPEN"}
            onChange={handleStatusChange}
            disabled={isChangingStatus}
            label={project.status === "OPEN" ? "باز" : "بسته"}
          />
          {isChangingStatus && <Spinner size={14} />}
        </div>
      </td>

      <td>
        <div className="table-actions">
          <>
            <button
              onClick={() => setIsEditOpen(true)}
              className="table-action-btn"
              aria-label="ویرایش"
            >
              <HiOutlinePencilSquare size={17} />
            </button>
            <Modal
              title={"ویرایش "}
              onClose={() => setIsEditOpen(false)}
              isOpen={isEditOpen}
            >
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>

          <>
            <button
              onClick={() => setIsDeleteOpen(true)}
              className="table-action-btn table-action-btn--danger"
              aria-label="حذف"
            >
              <HiOutlineTrash size={17} />
            </button>
            <Modal
              title={`حذف ${project.title}`}
              onClose={() => setIsDeleteOpen(false)}
              isOpen={isDeleteOpen}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
              />
            </Modal>
          </>
        </div>
      </td>
      <td style={{ textAlign: "center" }}>
        <Link
          to={`/owner/projects/${project._id}`}
          className={`table-action-btn ${isChangingStatus ? "pointer-events-none opacity-40" : ""}`}
          aria-label="مشاهده"
        >
          <HiEye size={17} />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
