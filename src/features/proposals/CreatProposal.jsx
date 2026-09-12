import React from "react";
import { useForm } from "react-hook-form";
import Spinner from "../../ui/Spinner";
import TextField from "../../ui/TextField";
import useCreateProposal from "./useCreateProposals";

function CreateProposal({ projectId, onClose }) {
  const { creatProposal, isCreating } = useCreateProposal();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newProposal = { ...data, projectId };
    creatProposal(newProposal, {
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          register={register}
          label={"توضیحات"}
          name={"description"}
          placeholder={"این پروژه در مورد......"}
          type="text"
          required
          validationSchema={{
            required: "توضیحات ضروری است",
          }}
          errors={errors}
        />
        <TextField
          register={register}
          label={"مدت زمان"}
          name={"duration"}
          placeholder={"تعداد روز ها را حتما با حروف لاتین وارد کنید"}
          type="number"
          required
          validationSchema={{
            required: "اعلام مدت زمان ضروری است",
          }}
          errors={errors}
        />
        <TextField
          register={register}
          label={"قیمت"}
          name={"price"}
          placeholder={"قیمت را به تومان وارد کنید"}
          type="number"
          required
          validationSchema={{
            required: "اعلام قیمت ضروری است",
          }}
          errors={errors}
        />
        <button
          type="submit"
          className="btn btn--primary btn--sm mt-2"
          disabled={isCreating}
        >
          {isCreating ? <Spinner /> : "تایید"}
        </button>
      </form>
    </div>
  );
}

export default CreateProposal;
