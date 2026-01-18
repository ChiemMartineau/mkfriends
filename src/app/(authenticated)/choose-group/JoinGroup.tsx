"use client";

import Fuse from 'fuse.js'

import { useMemo, useState, useEffect } from "react";

import { joinGroupAction } from "@/app/(authenticated)/choose-group/actions";

interface Group {
  _id: string;
  name: string;
  score: number;
}

interface JoinGroupProps {
  groups: Group[];
}

export default function JoinGroup({ groups }: JoinGroupProps) {
  const fuse = useMemo(() => new Fuse(groups, {
    keys: ['name'],
    threshold: 0.3,
  }), [groups]);

  const [value, setValue] = useState<string>('');
  const [results, setResults] = useState<Group[]>(groups);

  useEffect(() => {
    if (value.trim() === '') {
      setResults(groups);
      return;
    }
    const fuseResults = fuse.search(value);
    setResults(fuseResults.map(result => result.item));
  }, [value]);

  if (groups.length === 0) {
    return (
      <div>
        <p className="text-sm text-slate-400 px-2">No teams available yet.</p>
      </div>
    );
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
            onChange={(e) => setValue(e.target.value)}
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors">
            search
          </span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3 animate-fade-in-down">
        {results.slice(0, 3).map((group) => (
          <div
            key={group._id}
            className="w-full flex items-center justify-between p-3 rounded-2xl
                          bg-white border border-slate-100
                          hover:border-primary/50 hover:shadow-soft-pink
                          transition-all group active:scale-[0.99] text-left"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-rose-400 flex items-center justify-center text-white shadow-soft-pink shrink-0">
                <span className="material-symbols-outlined text-2xl">
                  groups
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-slate-800 font-bold group-hover:text-primary transition-colors">
                  {group.name}
                </span>
                <span className="text-slate-400 text-xs font-semibold">
                  Score: {group.score}
                </span>
              </div>
            </div>

            <form action={joinGroupAction}>
              <input
                type="hidden"
                name="groupId"
                value={group._id}
              />
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
      </div>
      {results.length >= 3 && (
        <p className="text-sm text-slate-400 px-2 py-5">Search for more...</p>
      )} 
      {results.length === 0 && value && (
        <p className="text-sm text-slate-400 px-2">No teams found</p>
      )}
    </div>
  );
}


