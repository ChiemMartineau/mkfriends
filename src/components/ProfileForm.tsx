"use client";

import { useState } from "react";
import { updateProfileAction } from "@/app/(authenticated)/profile/actions";

export default function ProfileForm({ initialLinkedinUrl }: { initialLinkedinUrl: string }) {
  const [linkedinUrl, setLinkedinUrl] = useState(initialLinkedinUrl);
  const hasChanged = linkedinUrl !== initialLinkedinUrl;
  const isValid = linkedinUrl.trim().length > 0;
  const canSave = hasChanged && isValid;

  return (
    <form action={updateProfileAction} className="flex flex-col gap-5">
      <div className="group">
        <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
          LinkedIn URL
        </label>
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0077b5] pointer-events-none">
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
          </div>
          <input
            className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-4 py-3.5 text-slate-700 font-bold focus:ring-2 focus:ring-[#0077b5]/20 focus:border-[#0077b5] outline-none transition-all shadow-card placeholder:text-slate-300 placeholder:opacity-60"
            placeholder="https://linkedin.com/in/"
            type="url"
            name="linkedinUrl"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!canSave}
        className={`w-full py-4 font-bold rounded-2xl shadow-md transition-all ${
          canSave
            ? "bg-primary hover:bg-primary-hover text-white shadow-primary/30 active:scale-[0.98] cursor-pointer"
            : "bg-slate-200 text-slate-400 cursor-not-allowed"
        }`}
      >
        Save Changes
      </button>
    </form>
  );
}
