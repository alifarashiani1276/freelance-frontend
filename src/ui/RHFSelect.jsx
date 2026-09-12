import React from "react";

function RHFSelect({
  label,
  name,
  register,
  options,
  required,
  validationSchema,
  errors,
}) {
  return (
    <div className="space-y-2 mb-4">
      <label htmlFor={name} className="field-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <select
        id={name}
        {...register(name, validationSchema)}
        className={`textField__input ${
          errors?.[name] ? "textField__input--error" : ""
        }`}
      >
        <option value="">انتخاب کنید</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {errors?.[name] && (
        <p className="text-xs text-red-500 mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
}

export default RHFSelect;
