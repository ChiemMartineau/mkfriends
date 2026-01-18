"use client";
import { useState, useRef, useEffect } from "react";

export default function CreateGroup() {
  const [createClicked, setCreateClicked] = useState(false);
  const [groupName, setGroupName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (createClicked && inputRef.current) {
      inputRef.current.focus();
    }
  }, [createClicked]);

  return (
    <div className="mt-auto flex justify-center items-center">
      <div className="w-full">
        <div
          className={`relative transition-all duration-500 ${
            createClicked
              ? "bg-primary/10 border-primary p-6 scale-100 border-2"
              : "bg-white border-primary/30 border-dashed p-6 border-2 hover:border-primary hover:bg-primary/5"
          } rounded-2xl overflow-hidden`}
          style={{ minHeight: "100px" }}
        >
          <div className="flex items-center gap-4">
            <div
              className={`h-14 w-14 rounded-full flex items-center justify-center shadow-soft-pink transition-all duration-500 ${
                createClicked
                  ? "bg-primary text-white scale-110"
                  : "bg-primary/10 text-primary group-hover:scale-110"
              }`}
            >
              <span className="material-symbols-outlined text-[28px]">
                {createClicked ? "groups" : "add"}
              </span>
            </div>
            <div className="flex-1">
              {!createClicked ? (
                <button
                  className="text-left w-full bg-transparent border-none outline-none cursor-pointer"
                  onClick={() => setCreateClicked(true)}
                >
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">
                    Create a Team
                  </h3>
                  <p className="text-sm text-slate-400 font-medium">
                    Start fresh with your own rules
                  </p>
                </button>
              ) : (
                <form
                  className="flex items-center gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: Add group creation logic here
                  }}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    className="w-full px-3 py-2 rounded-lg border border-primary/40 focus:border-primary outline-none bg-white text-primary font-semibold transition-all duration-300 shadow-sm"
                    placeholder="Enter team name..."
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="ml-2 px-4 py-2 rounded-lg bg-primary text-white font-bold shadow-soft-pink hover:bg-primary/90 transition-colors"
                    disabled={!groupName.trim()}
                  >
                    Create
                  </button>
                </form>
              )}
            </div>
            {!createClicked && (
              <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                <span className="material-symbols-outlined text-primary text-2xl">
                  arrow_forward
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
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
