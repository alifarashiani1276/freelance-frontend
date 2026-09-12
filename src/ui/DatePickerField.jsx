import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

function DatePickerField({ lable, name, data, setDate, error }) {
  return (
    <div className="space-y-2 mb-4">
      <label htmlFor={name} className="field-label">
        {lable} <span className="text-error">*</span>
      </label>
     

      <DatePicker
        id={name}
        containerClassName="w-full"
        inputClass={`textField__input ${error ? "textField__input--error" : ""}`}
        className="bg-dark"
        calendarPosition="bottom-center"
        value={data}
        onChange={setDate}
        format="YYYY/MM/DD"
        locale={persian_fa}
        calendar={persian}
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

export default DatePickerField;
