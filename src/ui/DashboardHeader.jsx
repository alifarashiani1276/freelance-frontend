import React from "react";

function DashboardHeader({title,description}) {
  return (
    <div className="mb-6">
      <h1 className="text-xl font-bold text-[rgb(var(--color-secondary-900))]">
       {title}
      </h1>

      <p className="mt-1 text-sm text-[rgb(var(--color-secondary-500))]">
      {description}
      </p>
    </div>
  );
}

export default DashboardHeader;
