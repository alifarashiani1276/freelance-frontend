import React from "react";
import FilterDropDown from "../../../ui/FilterDropDown";
import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";

const sortOptions = [
  {
    label: "مرتب سازی (جدید ترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
];

const statusOptions = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];
function ProjectsHeader() {
  const { transformCategories } = useCategories();

  return (
    <div className="projects-header">
      <h1 className="projects-header__title">لیست پروژه‌ها</h1>
      <div className="projects-header__filters">
        <Filter filterField="status" options={statusOptions} />
        <FilterDropDown
          filterField="category"
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformCategories,
          ]}
        />
        <FilterDropDown filterField="sort" options={sortOptions} />
      </div>
    </div>
  );
}

export default ProjectsHeader;
