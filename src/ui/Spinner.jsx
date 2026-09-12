// src/ui/Spinner.jsx
function Spinner({ size = 16 }) {
  return (
    <div
      className="inline-block animate-spin rounded-full border-2 border-solid"
      style={{
        width: size,
        height: size,
        borderColor: "#2a2a2f",
        borderTopColor: "#3b82f6",
      }}
    />
  );
}

export default Spinner;