import React, { useState } from "react";
import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  let editValues = {};
  const {
    title,
    description,
    budget,
    deadline,
    category,
    tags: prevTags,
  } = projectToEdit;
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(deadline ? new Date(deadline) : null);
  const [dateError, setDateError] = useState("");

  const { categories } = useCategories();
  
  const { isCreating, createProject } = useCreateProject();
  const { isEditing,editProject } = useEditProject();

  const onSubmit = (data) => {
    if (!date) {
      setDateError("انتخاب ددلاین ضروری است");
      return;
    }
    setDateError("");

    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject({id: editId,newProject}, {
        onSuccess : ()=>{
          onClose();
          reset();
        }
      } )
    } else {
      createProject(newProject, {
        onSuccess: () => {
          reset();
          onClose();
        },
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <TextField
          register={register}
          label={"عنوان پروژه"}
          name={"title"}
          placeholder={"طراحی سایت ....."}
          required
          validationSchema={{
            required: "این عنوان ضروری است",
            minLength: {
              value: 10,
              message: "طول عنوان کمتر از حد مجاز است",
            },
          }}
          errors={errors}
        />

        <TextField
          register={register}
          label={"توضیحات"}
          name={"description"}
          placeholder={"توضیحات...."}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "طول متن کمتر از حد مجاز است",
            },
          }}
          errors={errors}
        />

        <TextField
          register={register}
          label={"بودجه"}
          name={"budget"}
          placeholder={"مثلاً: 5000000"}
          type="number"
          required
          validationSchema={{
            required: "اعلام بودجه ضروری است",
          }}
          errors={errors}
        />
        <RHFSelect
          label="دسته بندی"
          required
          name="category"
          register={register}
          options={categories}
        />
        <div>
          <label className="field-label">تگ</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>
        <div>
          <DatePickerField
            data={date}
            setDate={(value) => {
              setDate(value);
              if (value) setDateError("");
            }}
            lable="ددلاین"
          />

          {dateError && (
            <p className="mt-1 text-xs text-red-400">{dateError}</p>
          )}
        </div>
        <button type="submit" className="btn btn--primary btn--sm mt-2">
          تایید
        </button>
      </form>
    </div>
  );
}

export default CreateProjectForm;
