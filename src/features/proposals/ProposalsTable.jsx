import React from "react";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import useProposals from "./useProposals";
import ProposalRow from "./ProposalRow";

function ProposalsTable() {
  const { isLoading, isError, proposals } = useProposals();

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <p className="dashboard-table__empty">
        پروفایل شما هنوز توسط ادمین تایید نشده است.
      </p>
    );
  }

  if (!proposals?.length) return <Empty resourceName="درخواست" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>

      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} proposal={proposal} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;