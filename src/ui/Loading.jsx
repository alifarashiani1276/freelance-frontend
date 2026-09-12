import { MutatingDots } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex flex-col items-center gap-3">
      <MutatingDots
        height="60"
        width="60"
        color="#846bbf"
        secondaryColor="#a78bda"
      />
      <p className="text-xs animate-pulse" style={{ color: "#71717a" }}>
        در حال ارسال...
      </p>
    </div>
  );
}

export default Loading;