import React from "react";
import Loading from "../../../ui/Loading";
import useUsers from "../useUsers";
import Empty from "../../../ui/Empty";
import Table from "../../../ui/Table";
import UsersRow from "./UsersRow";

function UserTable() {
  const { isLoading, isError, users } = useUsers();

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <p className="dashboard-table__empty">
       دریافت اطلاعات با خطا مواجه شد.
      </p>
    );
  }

  if (!users?.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>شماره مویابل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {users.map((user, index) => (
          <UsersRow key={user._id} user={user} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default UserTable;
