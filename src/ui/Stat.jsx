const colors = {
  primary: "bg-primary-100 text-primary-700",

  green: "bg-green-100 text-green-700",

  blue: "bg-blue-100 text-blue-700",
};

function Stat({ icon, value, title, color = "primary" }) {
  return (
    <div className="dashboard-card">
      <div className="flex items-start justify-between">
        <div>
          <p className="dashboard-card__label">{title}</p>

          <p className="dashboard-card__value text-[rgb(var(--color-secondary-900))]">
            {value}
          </p>
        </div>

        <div
          className={`
            flex items-center justify-center
            w-11 h-11 rounded-xl
            ${colors[color]}
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default Stat;
