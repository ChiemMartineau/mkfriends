"use client";

export type ProfileModalData = {
  id?: string;
  name: string;
  avatarUrl: string;
  groupName?: string;
  points?: number;
  linkedinUrl?: string;
  linkedinSummary?: string;
};

export default function ProfileModal({
  person,
  onClose,
}: {
  person: ProfileModalData | null;
  onClose: () => void;
}) {
  // useEffect(() => {
  //   if (person) document.body.style.overflow = "hidden";
  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [person]);

  if (!person) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-white shadow-2xl p-6 flex flex-col items-center text-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 size-9 flex items-center justify-center"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div
          className="size-20 rounded-full bg-center bg-cover border-2 border-primary shadow"
          style={{ backgroundImage: `url("${person.avatarUrl}")` }}
        />

        <div>
          <p className="text-xl font-bold text-slate-900">{person.name}</p>
          {person.groupName && (
            <p className="text-sm font-semibold text-primary mt-1">
              {person.groupName}
            </p>
          )}
        </div>

        {person.points !== undefined && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-pale-green-light px-3 py-1.5 rounded-full backdrop-blur-sm border border-pale-green">
            <span className="material-symbols-outlined text-primary text-[20px] fill-1">bolt</span>
            <p className="text-green-900 text-sm font-bold leading-normal tracking-[0.015em]">
              {person.points.toLocaleString()}
            </p>
          </div>
        )}

        <p className="text-sm text-slate-600 leading-relaxed">
          {person.linkedinSummary ?? "No description available."}
        </p>
      </div>
    </div>
  );
}