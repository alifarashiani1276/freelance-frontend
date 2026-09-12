import React, { useState } from "react";
import Table from "../../../ui/Table";
import truncateText from "../../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/toPersianNumbers";
import Modal from "../../../ui/Modal";
import { HiOutlineAdjustments } from "react-icons/hi";
import ChangeUserStatus from "./ChangeUserStatus";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در اتتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function UsersRow({ user, index }) {
  const [open, setOpen] = useState(false);

  const { status, name, role, phoneNumber, email } = user;
  return (
    <Table.Row key={user._id}>
      <td className="td-fit">{index + 1}</td>
      <td className="td-fit">{name}</td>
      <td className="td-fit">{email}</td>
      <td className="td-fit">{phoneNumber}</td>
      <td className="td-fit">{role}</td>
      <td className="td-fit">
        {" "}
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td className="td-fit">
        <button
          onClick={() => setOpen(true)}
          className="user-status-btn"
          aria-label="تغییر وضعیت کاربر"
        >
          <HiOutlineAdjustments size={18} />
        </button>
      </td>

      <Modal
        title="تغییر وضعیت کاربر"
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <ChangeUserStatus onClose={() => setOpen(false)} userId={user._id} />
      </Modal>
    </Table.Row>
  );
}

export default UsersRow;
