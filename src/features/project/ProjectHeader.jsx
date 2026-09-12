import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
  const moveBack = useMoveBack();

  return (
    <div className="mb-6">
      <button onClick={moveBack} className="btn--back mb-4">
        <HiArrowRight size={16} />
        بازگشت
      </button>
      <h1 className="text-xl font-bold" style={{ color: "#fafafa" }}>
        لیست درخواست‌های {project.title}
      </h1>
    </div>
  );
}

export default ProjectHeader;
