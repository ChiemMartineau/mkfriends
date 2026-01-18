import { auth0 } from "@/lib/auth0";
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import Profile from "@/components/Profile";
import { createTestUser } from "./actions";

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto bg-bg-melon">
      <div className="flex items-center justify-center p-6 pt-12 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-full bg-primary/10 text-primary">
            <img src="/logo_transparent.png" alt="MkFriends Logo" />
          </div>
          <h2 className="text-text-main text-xl font-bold tracking-tight">
            MkFriends
          </h2>
        </div>
      </div>

      <div className="px-6 py-2 flex justify-center w-full">
        <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden relative shadow-soft ring-1 ring-black/5 group">
          <div className="absolute inset-0 bg-gradient-to-t from-bg-melon/80 via-transparent to-transparent z-10"></div>
          <div
            className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCg5w1geepIRXgd1nDOob_FjqKW3zKnMsMxZJfRYn0Bbd9SjkHwgOpdt12sVsFfmYoUlwRkERiSv8PUjxoLlvYH3nWZqNmM-TDt_fESfV2koBXoe2l8GRqXWGPnAPgY9zK3YrHsXQBWoDKg7euBHKjMVAgD4N8HMm_KLvGfvPCyT5uGde5f2txKRNIXTFzWQdfP5SkznSyGrcLNcG2vq48OKMGbwmhs7RoryzJkIr7Wd0KFz0b4ckUA9LM3sl4ybJIXuCXPXXw9QBYO")',
            }}
          />
          <div className="absolute bottom-3 left-3 z-20 bg-white/90 backdrop-blur-md border border-white/50 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-secondary-dark text-[18px]">
              verified
            </span>
            <span className="text-text-main text-[11px] font-bold uppercase tracking-wider">
              Face ID Ready
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-8 pt-4 pb-2">
        <h1 className="text-text-main text-[28px] font-extrabold leading-tight text-center tracking-tight">
          Welcome Back!
        </h1>
        <p className="text-text-muted text-[15px] font-medium leading-relaxed pt-2 text-center">
          Log in to track your selfie score and connect with your team.
        </p>
      </div>

      <div className="flex flex-col gap-5 px-8 py-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-text-main text-sm font-bold pl-1">Email</span>
          <div className="relative group">
            <input
              className="w-full rounded-2xl bg-bg-surface border border-border-soft text-text-main placeholder-text-muted/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 h-14 pl-12 pr-4 transition-all shadow-sm"
              placeholder="name@example.com"
              type="email"
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted/70 group-focus-within:text-primary transition-colors">
              mail
            </span>
          </div>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-text-main text-sm font-bold pl-1">
            Password
          </span>
          <div className="relative group">
            <input
              className="w-full rounded-2xl bg-bg-surface border border-border-soft text-text-main placeholder-text-muted/60 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 h-14 pl-12 pr-12 transition-all shadow-sm"
              placeholder="••••••••"
              type="password"
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted/70 group-focus-within:text-primary transition-colors">
              lock
            </span>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary transition-colors"
              type="button"
            >
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
        </label>

        <div className="flex justify-end -mt-2">
          <a
            className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        <div className="flex gap-3 pt-2">
          <a
            href="/api/auth/login?returnTo=/home"
            className="flex-1 bg-primary hover:bg-primary-hover text-white font-bold text-lg h-14 rounded-2xl flex items-center justify-center shadow-glow transition-all active:scale-[0.98]"
          >
            Log In
          </a>

          <button className="size-14 shrink-0 bg-bg-surface border border-border-soft hover:border-primary/30 text-text-main rounded-2xl flex items-center justify-center transition-colors group shadow-sm">
            <span className="material-symbols-outlined text-[26px] text-text-muted group-hover:text-primary transition-colors">
              face
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-8 pb-8">
        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-border-soft"></div>
          <span className="flex-shrink-0 mx-4 text-text-muted text-xs font-semibold uppercase tracking-wider">
            Or continue with
          </span>
          <div className="flex-grow border-t border-border-soft"></div>
        </div>

        <button className="w-full h-14 rounded-2xl border border-secondary bg-secondary/10 hover:bg-secondary/20 text-text-main font-semibold flex items-center justify-center gap-3 transition-colors active:scale-[0.99]">
          <div className="w-5 h-5 bg-[#0077b5] rounded-sm flex items-center justify-center text-white shadow-sm">
            <span className="font-bold text-xs pb-0.5">in</span>
          </div>
          Sign in with LinkedIn
        </button>
      </div>

      <div className="mt-auto py-6 flex justify-center border-t border-border-soft/60 bg-white/30 backdrop-blur-sm">
        <p className="text-center text-text-muted text-sm font-medium">
          Don't have an account?{" "}
          <a className="text-primary font-bold hover:underline ml-1" href="#">
            Sign Up
          </a>
        </p>
        <LoginButton />
      </div>

      {/* Test User Creation Form */}
      <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
        <details className="group">
          <summary className="cursor-pointer text-sm font-bold text-gray-700 mb-3 hover:text-primary list-none flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] group-open:rotate-90 transition-transform">
              chevron_right
            </span>
            🧪 Test: Create User
          </summary>
          <form action={createTestUser} className="flex flex-col gap-3 mt-3">
            <input
              name="email"
              type="email"
              placeholder="Email *"
              required
              className="w-full rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3 text-sm"
            />
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="w-full rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3 text-sm"
            />
            <input
              name="profilePicture"
              type="url"
              placeholder="Profile Picture URL"
              className="w-full rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3 text-sm"
            />
            <input
              name="score"
              type="number"
              placeholder="Score (default: 0)"
              defaultValue="0"
              className="w-full rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3 text-sm"
            />
            <input
              name="group"
              type="text"
              placeholder="Group"
              className="w-full rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary h-10 px-3 text-sm"
            />
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover text-white font-semibold h-10 rounded-lg flex items-center justify-center transition-all active:scale-[0.98] text-sm"
            >
              Create Test User
            </button>
          </form>
        </details>
      </div>
    </div>
  );
}
