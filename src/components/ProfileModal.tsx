"use client";

import { useEffect } from "react";

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
    useEffect(() => {
    if (!person) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    // Optional: prevent layout shift when scrollbar disappears
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [person]);
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
        {person.linkedinUrl && (
  <a
    href={person.linkedinUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0077b5] hover:underline"
  >
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
    From LinkedIn
  </a>
)}
      </div>
    </div>
  );
}