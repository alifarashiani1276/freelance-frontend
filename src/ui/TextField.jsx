import React from "react";

function TextField({
  label,
  name,
  placeholder,
  dir = "rtl",
  type = "text",
  register,
  required,
  validationSchema,
  errors,
}) {
  return (
    <div className="space-y-2 mb-4">
      <label htmlFor={name} className="field-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        dir={dir}
        placeholder={placeholder}
        className={`textField__input ${
          errors?.[name] ? "textField__input--error" : ""
        }`}
      />

      {errors?.[name] && (
        <p className="text-xs text-red-500 mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
}

export default TextField;
