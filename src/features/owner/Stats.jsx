import {
  HiOutlineViewGrid,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbers } from "../../utils/toPersianNumbers";


function Stats({ projects }) {
  const numOfProjects = projects.length;

  const numOfAcceptedProposals = projects.filter((p) => p.status === 2).length;

  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0,
  );

  return (
    <div className="dashboard-grid">
      <Stat
        color="primary"
        title="پروژه‌ها"
        value={toPersianNumbers(numOfProjects)}
        icon={<HiOutlineViewGrid size={24} />}
      />

      <Stat
        color="green"
        title="پروپوزال‌های تایید شده"
        value={toPersianNumbers(numOfAcceptedProposals)}
        icon={<HiOutlineCheckCircle size={24} />}
      />

      <Stat
        color="blue"
        title="کل پروپوزال‌ها"
        value={toPersianNumbers(numOfProposals)}
        icon={<HiOutlineClipboardList size={24} />}
      />
    </div>
  );
}

export default Stats;
