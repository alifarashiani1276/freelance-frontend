import React from "react";
import UserTable from "../features/admin/users/UserTable";

function Users() {
  return (
    <div>
      <h1
        className="text-xl font-bold mb-6"
        style={{ color: "rgb(var(--color-secondary-900))" }}
      >
        {" "}
        کاربران
      </h1>
      <UserTable />
    </div>
  );
}

export default Users;
