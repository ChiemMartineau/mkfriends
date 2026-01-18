"use client";

export default function LogoutButton() {
  return (
    <a
      href="/auth/logout"
      className="w-full block py-4 bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 font-bold rounded-2xl border border-slate-100 transition-all active:scale-[0.98] text-center"
    >
      Log Out
    </a>
  );
}
