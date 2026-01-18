export default function PeopleList({
  people,
}: {
  people: Array<{ id: string; name: string; avatarUrl: string; isYou?: boolean }>;
}) {
  const visiblePeople = people.filter((p) => !p.isYou);

  if (visiblePeople.length === 0) return null;

  return (
    <div className="w-full mt-4">
      <div className="flex items-center justify-between mb-2 px-1">
        <p className="text-white/90 text-sm font-bold tracking-wide">
          People in this photo
        </p>
        <p className="text-white/60 text-xs font-semibold">
          {visiblePeople.length}
        </p>
      </div>

      <div className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md overflow-hidden">
        {visiblePeople.map((p, idx) => (
          <div
            key={p.id}
            className={[
              "flex items-center gap-3 px-4 py-3 transition-colors hover:bg-white/10",
              idx !== visiblePeople.length - 1
                ? "border-b border-white/10"
                : "",
            ].join(" ")}
          >
            <div
              className="size-12 rounded-full bg-cover bg-center shadow-sm border-2 border-white/60 shrink-0"
              style={{ backgroundImage: `url("${p.avatarUrl}")` }}
              aria-label={p.name}
              title={p.name}
            />
            <span className="text-white font-semibold leading-tight">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
