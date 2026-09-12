import React from "react";
import Table from "../../ui/Table";
import truncateText from "../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";

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

function ProposalRow({ proposal, index }) {
    const {status,description,duration,price} = proposal

  return (
    <Table.Row key={proposal._id}>
      <td className="td-fit">{index + 1}</td>
      <td className="td-fit" >{truncateText(description, 30)}</td>
      <td className="td-fit">{toPersianNumbers(duration)} روز</td>
      <td className="td-fit">
        {toPersianNumbersWithComma(price)} تومان
      </td>
      <td className="td-fit">
        {" "}
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
