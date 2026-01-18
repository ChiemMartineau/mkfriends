"use client";

export default function LoginButton({ className }: { className?: string }) {
  return (
    <a
      href="/auth/login?connection=linkedin"
      className={
        className ||
        "w-full h-14 rounded-2xl border border-secondary bg-secondary/10 hover:bg-secondary/20 text-text-main font-semibold flex items-center justify-center gap-3 transition-colors active:scale-[0.99]"
      }
    >
      <div className="w-5 h-5 bg-[#0077b5] rounded-sm flex items-center justify-center text-white shadow-sm">
        <span className="font-bold text-xs pb-0.5">in</span>
      </div>
      Sign in with LinkedIn
    </a>
  );
}
