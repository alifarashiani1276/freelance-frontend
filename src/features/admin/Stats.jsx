import React from "react";
import {
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineBriefcase,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";

function Stats({ users, proposals, projects }) {
  return (
    <div className="dashboard-grid">
      <Stat
        color="primary"
        title="کاربران"
        value={toPersianNumbers(users)}
        icon={<HiOutlineUsers size={24} />}
      />

      <Stat
        color="green"
        title="درخواست ها"
        value={toPersianNumbers(proposals)}
        icon={<HiOutlineDocumentText size={24} />}
      />

      <Stat
        color="blue"
        title="پروژه ها"
        value={toPersianNumbersWithComma(projects)}
        icon={<HiOutlineBriefcase size={24} />}
      />
    </div>
  );
}

export default Stats;