import {
  HiOutlineViewGrid,
  HiOutlineCheckCircle,
  HiOutlineClipboardList,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumbers";


function Stats({ proposals }) {

  const numOfProposals = proposals.length;
  const numOfAcceptedProposals = proposals.filter((p) => p.status === 2).length;
  const balance = proposals.reduce(
    (acc, curr) => (curr.status === 2 ? curr.price + acc : acc),
    0,
  );
  return (
    <div className="dashboard-grid">
      <Stat
        color="primary"
        title="درخواست ها"
        value={toPersianNumbers(numOfProposals)}
        icon={<HiOutlineViewGrid size={24} />}
      />

      <Stat
        color="green"
        title="درخواست های تایید شده"
        value={toPersianNumbers(numOfAcceptedProposals)}
        icon={<HiOutlineCheckCircle size={24} />}
      />

      <Stat
        color="blue"
        title="کیف پول"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiOutlineClipboardList size={24} />}
      />
    </div>
  );
}

export default Stats;
