import { HiOutlineInbox } from "react-icons/hi";

function Empty({ resourceName }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/60 px-6 py-12 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
        <HiOutlineInbox size={28} className="text-zinc-400" />
      </div>

      <p className="text-sm font-medium text-zinc-500">
        {resourceName} یافت نشد
      </p>
    </div>
  );
}

export default Empty;