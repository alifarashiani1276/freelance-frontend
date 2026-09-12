import { useState } from "react";
import Table from "../../../ui/Table";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreatProposal";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectRow({ project, index }) {
  const { status } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row key={project._id}>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 30)}</td>
      <td>{toPersianNumbersWithComma(project.budget)} تومان</td>
      <td>{toLocalDateShort(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td className="td-fit">
        <button onClick={() => setOpen(true)} className="btn-icon-accent">
          <MdAssignmentAdd size={18} />
        </button>

        <Modal
          isOpen={open}
          title={`ثبت پیشنهاد روی پروژه ${project.title}`}
          onClose={() => setOpen(false)}
        >
            <CreateProposal projectId={project._id} onClose={()=>setOpen(false)} />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
