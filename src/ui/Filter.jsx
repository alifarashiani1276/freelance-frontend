import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(filterField) || options.at(0).value;

  function handleClick(optionValue) {
    const next = new URLSearchParams(searchParams);
    if (optionValue) {
      next.set(filterField, optionValue);
    } else {
      next.delete(filterField);
    }
    setSearchParams(next);
  }

  return (
    <div className="filter-group">
      <span className="filter-group__label">وضعیت:</span>
      <div className="filter-group__buttons">
        {options.map((item) => (
          <button
            type="button"
            key={item.value}
            onClick={() => handleClick(item.value)}
            className={`filter-chip ${
              value === item.value ? "filter-chip--active" : ""
            }`}
            aria-pressed={value === item.value}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
