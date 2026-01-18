"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function SearchGroup({ teams }: { teams: any[] }) {
  const [value, setValue] = useState("");

  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().startsWith(value.toLowerCase()),
  );

  function addTeamAndRedirect(teamId: string) {
    // DB logic
    console.log("Added to team " + teamId);
    redirect("/home");
  }

  return (
    <div>
      <div className="relative z-20 mb-2">
        <div className="relative group">
          <input
            className="w-full bg-white border-2 border-slate-100 rounded-2xl pl-12 pr-4 py-4
                       text-slate-700 font-bold
                       focus:ring-4 focus:ring-primary/10 focus:border-primary
                       outline-none transition-all shadow-input
                       placeholder:text-slate-300 placeholder:font-medium"
            placeholder="Search for a team..."
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors">
            search
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-3 animate-fade-in-down">
          {filteredTeams.map((team) => (
            <div
              key={team.name}
              className={`w-full flex items-center justify-between p-3 rounded-2xl
                          bg-white border border-slate-100
                          ${team.hoverBorder} ${team.hoverShadow}
                          transition-all group active:scale-[0.99] text-left`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-12 w-12 rounded-xl bg-linear-to-br ${team.gradient}
                              flex items-center justify-center text-white ${team.shadow} shrink-0`}
                >
                  <span className="material-symbols-outlined text-2xl">
                    {team.icon}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-slate-800 font-bold group-hover:text-primary transition-colors">
                    {team.name}
                  </span>
                  <span className="text-slate-400 text-xs font-semibold">
                    {team.rank}
                  </span>
                </div>
              </div>

              <form action={addTeamAndRedirect.bind(null, team.name)}>
                <button
                  type="submit"
                  className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center
               text-slate-300 group-hover:bg-primary group-hover:text-white
               transition-colors border border-slate-100 group-hover:border-primary"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    add
                  </span>
                </button>
              </form>
            </div>
          ))}

          {filteredTeams.length === 0 && value && (
            <p className="text-sm text-slate-400 px-2">No teams found</p>
          )}
        </div>
      </div>
    </div>
  );
}
