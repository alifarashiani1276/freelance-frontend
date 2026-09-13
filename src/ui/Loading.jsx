function Loading() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-12 w-12">
        {/* Soft glow behind the spinner */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 opacity-20 blur-md" />

        {/* Track */}
        <div className="absolute inset-0 rounded-full border-4 border-zinc-200" />

        {/* Spinning gradient arc */}
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
          style={{
            borderTopColor: "#846bbf",
            borderRightColor: "#a78bda",
          }}
        />

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-[#846bbf] animate-pulse" />
        </div>
      </div>

      <p className="text-xs font-medium animate-pulse" style={{ color: "#71717a" }}>
        در حال ارسال...
      </p>
    </div>
  );
}

export default Loading;