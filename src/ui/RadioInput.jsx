function RadioInput({ label, value, name, register, validationSchema, activeValue }) {
  return (
    <label
      htmlFor={value}
      className={`lable-radio ${activeValue === value ? "lable-radio--active" : ""}`}
    >
      <input
        type="radio"
        id={value}
        value={value}
        className="hidden"
        {...register(name, validationSchema)}
      />
      {label}
    </label>
  );
}

export default RadioInput;