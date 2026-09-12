import React from "react";
import ProposalsTable from "../features/proposals/ProposalsTable";

function Proposals() {
  return (
    <div>
      <h1
        className="text-xl font-bold mb-6"
        style={{ color: "rgb(var(--color-secondary-900))" }}
      >
        {" "}
       لیست پروپوزال ها
      </h1>
      <ProposalsTable />
    </div>
  );
}

export default Proposals;
