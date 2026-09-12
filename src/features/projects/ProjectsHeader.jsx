import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";

function ProjectsHeader() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="dashboard-table__title">پروژه‌های شما</h2>
      <button
        className="btn btn--primary btn--sm w-40 sm:w-48 lg:w-52"
        onClick={() => setIsAddOpen(true)}
      >
        <HiOutlinePlus size={16} className="inline-block ml-1" />
        اضافه کردن پروژه
      </button>
      <Modal
        isOpen={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        title={"اضافه کردن پروژه جدید"}
      >
        <CreateProjectForm projectToEdit={{}} onClose={() => setIsAddOpen(false)} />
      </Modal>
    </div>
  );
}

export default ProjectsHeader;
