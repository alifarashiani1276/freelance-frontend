import React from "react";
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(filterField) || "";

  function handleChange(e) {
    const next = new URLSearchParams(searchParams);
    if (e.target.value) {
      next.set(filterField, e.target.value);
    } else {
      next.delete(filterField);
    }
    setSearchParams(next);
  }

  return <Select value={value} onChange={handleChange} options={options} />;
}

export default FilterDropDown;
