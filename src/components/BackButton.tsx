"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
    >
      <span className="material-symbols-outlined text-[20px]">arrow_back</span>
    </button>
  );
}
