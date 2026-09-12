import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

function Select({ value, onChange, options }) {
  return (
    <div className="relative inline-block">
      <select value={value} onChange={onChange} className="filter-select">
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <HiOutlineChevronDown
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400"
      />
    </div>
  );
}

export default Select;
