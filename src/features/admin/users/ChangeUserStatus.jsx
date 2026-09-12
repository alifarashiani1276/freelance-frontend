import React from "react";
import RHFSelect from "../../../ui/RHFSelect";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import useChangeUserStatus from "./useChangeUserStatus";
import { useParams } from "react-router-dom";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

function ChangeUserStatus({onClose,userId}) {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const {changeUserStatus,isUpdating,isError} = useChangeUserStatus()
  const {id : projectId} = useParams();

  const onSubmit = (data) => {
    console.log(data,userId);
    
      changeUserStatus(
      {...data  ,id: userId},
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users",projectId] });
        },
      },
    ); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name={"status"}
          label={"تغییر وضعیت کاربر"}
          required
          options={options}
          register={register}
        />
        <button type="submit" className="btn btn--primary btn--sm mt-2">
          تایید
        </button>
      </form>
    </div>
  );
}

export default ChangeUserStatus;
