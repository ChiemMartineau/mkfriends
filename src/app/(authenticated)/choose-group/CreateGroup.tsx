"use client";
import { useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

import { createGroupAction } from "@/app/(authenticated)/choose-group/actions";

export default function CreateGroup() {
  const [groupName, setGroupName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="mt-auto flex justify-center items-center">
      <div className="w-full">
        <div className="relative transition-all duration-500 bg-white border-primary/30 border-dashed p-6 border-2 hover:border-primary hover:bg-primary/5 rounded-2xl overflow-hidden" style={{ minHeight: "100px" }}>
          <div className="flex items-center gap-4">
            <div
              className="h-14 w-14 rounded-full flex items-center justify-center shadow-soft-pink transition-all duration-500 bg-primary text-white scale-110"
            >
              <span className="material-symbols-outlined text-[28px]">
                groups
              </span>
            </div>
            <div className="flex-1">
              <form className="flex items-center gap-2" action={createGroupAction}>
                <input
                  ref={inputRef}
                  type="text"
                  className="w-full px-3 py-2 rounded-lg border border-primary/40 focus:border-primary outline-none bg-white text-primary font-semibold transition-all duration-300 shadow-sm"
                  placeholder="Enter team name..."
                  value={groupName}
                  name="groupName"
                  required
                  onChange={(e) => setGroupName(e.target.value)}
                />
                <SubmitButton disabled={!groupName.trim()} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="ml-2 px-4 py-2 rounded-lg bg-primary text-white font-bold shadow-soft-pink hover:bg-primary/90 transition-colors"
      disabled={disabled || pending}
    >
      {pending ? "Creating..." : "Create"}
    </button>
  );
}

// Add this to your global CSS or Tailwind config for the fade-in animation if you want to use it:
// .animate-fade-in {
//   animation: fadeIn 0.5s ease;
// }
// @keyframes fadeIn {
//   from { opacity: 0; transform: scale(0.95); }
//   to { opacity: 1; transform: scale(1); }
// }
