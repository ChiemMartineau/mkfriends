export default function PeopleRow({
  people,
  onPersonClick,
}: {
  people: Array<{ id: string; name: string; avatarUrl: string; isYou?: boolean; groupName?: string; points?: number, linkedinSummary?: string, linkedinUrl?: string }>;
  onPersonClick?: (person: { id: string; name: string; avatarUrl: string; isYou?: boolean; groupName?: string; points?: number, linkedinSummary?: string, linkedinUrl?: string }) => void;
}) {
  return (
    <div className="w-full mt-4">
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-1">
        {people.map((p) => (
          <button
            key={p.id}
            className="flex-shrink-0 flex flex-col items-center gap-1.5 focus:outline-none"
            onClick={() => onPersonClick?.(p)}
          >
            <div
              className={[
                "size-14 rounded-full bg-cover bg-center shadow-sm border-2",
                p.isYou ? "border-melon-green-light ring-2 ring-melon-green-light/60" : "border-white/70",
              ].join(" ")}
              style={{ backgroundImage: `url("${p.avatarUrl}")` }}
              aria-label={p.name}
              title={p.name}
            />
            <span
              className={[
                "text-xs font-semibold",
                p.isYou ? "text-white" : "text-white/80",
              ].join(" ")}
            >
              {p.name.trim().split(" ")[0]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
