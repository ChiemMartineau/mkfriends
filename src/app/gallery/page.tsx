import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import Link from "next/link";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default async function Gallery() {
  return (
    <>
      <TopNav />
      <GalleryGrid />
      {/* <main className="flex-1 max-w-md mx-auto w-full pb-24">
        <div className="grid grid-cols-2 gap-3 p-4">
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] shadow-sm transition-transform active:scale-[0.98] border-2 border-pale-green bg-white">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXaXn2qCGolnDfnKclj9_7Hp5lBpAb4Blx2CI0TJkfdY7LU9-XiJqL6joaCnmSxC5V4m-ihmttiBvsbT_i23lpBSYnytChrnYp_536lu3-Mk7XV7SH6kwqn-VEzzQD47GpCgW6izOBughaRCmhBa9t6ZiaKKdxFVmBRf1-Vr6QdqaeskUS7cVFdxHDCHSJE1yQk1jMVvmWbT2hL5SAfoi7KzwKI0B0h6F6bWEeavzCEU2KT9jx8QWydR-BxkUbn525166tFTFxuDt4")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-3.5 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-white text-base font-bold leading-tight line-clamp-1">
                  Sarah J.
                </p>
                <span className="text-primary font-black text-xs bg-white/90 px-1.5 py-0.5 rounded shadow-sm">
                  +50 pts
                </span>
              </div>
              <p className="text-gray-200 text-xs font-medium">
                10:30 AM • Today
              </p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] shadow-sm transition-transform active:scale-[0.98] border-2 border-pale-green bg-white">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqioE4rYJTlmy1QQm1FgshBHLtkhOMGs68fVDsQvbgu4tksZ1q5bimh4GoUQPYkbqwa8BDfWO5EQCTMYebAbhYV6Qhqg5pkLXR1tYBTXHi8uS5W87TfcAocHT6-FhaTrn16xT14QT6pIjwocHWRd5wnwJ9L3sJjapvzltILEKaemUFYWsvVC66GbPrEjeJ_6eYT9SrgxtzF3m18PKcmMUMjB35xGgAphOy-DIfmpeEj8edgZqGyYF9GkzC-fxeHTf2-M2BZqF05fxO")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-3.5 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-white text-base font-bold leading-tight line-clamp-1">
                  Mike T.
                </p>
                <span className="text-primary font-black text-xs bg-white/90 px-1.5 py-0.5 rounded shadow-sm">
                  +50 pts
                </span>
              </div>
              <p className="text-gray-200 text-xs font-medium">Yesterday</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] shadow-sm transition-transform active:scale-[0.98] col-span-2 border-2 border-pale-green bg-white">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzRvR5Pz4CocJkE1ii6W-nKFdN8xcHJKIA84ZBq0KaJuEcGm8Q7gD8llbvqED1LYcvAl3YPXa7Q-oe3n4M-qlMTx9BAc4MnlGZ8Qvkvro__fKYCNBQMvjpy8ZBmUQMcWocWAZJD9m872L71REMpfYQEnLVLORN_xhasrVmdqI6qBz5hrX-TfipLiotJ4YlOBw9eB4xcHzhQWXGlNtHQ3zAyy1ufq0DKgp4tFk-fuDGMoj56TkMp6yqtnBqtFf9E-URVHz0i3N6u8Xp")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-5 flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-white text-xl font-bold leading-tight">
                  Team Alpha
                </p>
                <p className="text-gray-200 text-sm font-medium">
                  Oct 24 • Hackathon Event
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/20 shadow-sm">
                <span className="text-primary text-sm font-bold">+150 pts</span>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] shadow-sm transition-transform active:scale-[0.98] border-2 border-pale-green bg-white">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwy5UOAFjiucin_W_04ijqDzTG6s2FWmlPhS5YGYSeHpMHGM9R7czaCh3g9Iv6z2LQqflYWWRzLOhVirZ3gBIyqtVjpafqAAO7Znq0K5gG2wK-o36QxpFwwE7smKZgvQio1imvcNiWFaYjDUbshTzHM105xnHpUuiXgQSs_Ok5sCZK4R2tluw_gZ2s_gZDJxxDak1yCDidvukpP5XC63e2X3fQCa1PpAB5eXSERYA7-PKqXW0PLWLuwOL4K8-xJr1JROHdVQdBO95j")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-3.5 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-white text-base font-bold leading-tight line-clamp-1">
                  Jessica K.
                </p>
                <span className="text-gray-400 bg-white/90 px-1.5 py-0.5 rounded shadow-sm text-xs font-bold italic">
                  Pending
                </span>
              </div>
              <p className="text-gray-200 text-xs font-medium">Oct 20</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] shadow-sm transition-transform active:scale-[0.98] border-2 border-pale-green bg-white">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVhrvszjsK7Zwu3JxM1IOWa_EdxMH3CqBBCjCZK8Sa0S5bHz3q_hesnxRa9637t9pFcxSzbMaUP10PypxMjnuLM1kuqtlwY4fY1Q4YabmCpVjWfCaNfIFQNxml8pdsd8Ki2GN_HY1fN2d5pReX6sA3AYqnAQi6FdOUmE2PKDEWVk3Qqtt6Q8nYli-tV0mzQUPy_GDXvhGxKDcDSUWMbfjiBDB_dBrToFQvJQ072d7D_Gm9v22n5B4XsixwRu128GTmrDrdjghprqPi")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-3.5 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-white text-base font-bold leading-tight line-clamp-1">
                  David L.
                </p>
                <span className="text-primary font-black text-xs bg-white/90 px-1.5 py-0.5 rounded shadow-sm">
                  +50 pts
                </span>
              </div>
              <p className="text-gray-200 text-xs font-medium">Oct 18</p>
            </div>
          </div>

          <div className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] shadow-sm transition-transform active:scale-[0.98] border-2 border-pale-green bg-white">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKBpF9yLFqgGbhcrdV-PEUH2x43_OT4TQEmNlRCPITM0PUeYYXrJWTR-HCobx1KLrGU69T8Jf3udd-AKlCNLe1Ww3MkQ7gyHDLQNjpVkxSsS9CxFGSoen3DWdtss_QP5FK2qVc3lcFqL85WTjzWW34o_893DKNqeOCFjkk2cajsY_vLBQOPt2Tc-5pHExa_gnqxbu8aDYkNf0oXwyNnTJJzZvvDe1g6aUCoeWBVqV4S4Pp9-24h6FEteSczUiTa94_0Czk77wHdQsx")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-3.5 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-white text-base font-bold leading-tight line-clamp-1">
                  Emily R.
                </p>
                <span className="text-primary font-black text-xs bg-white/90 px-1.5 py-0.5 rounded shadow-sm">
                  +50 pts
                </span>
              </div>
              <p className="text-gray-200 text-xs font-medium">Oct 15</p>
            </div>
          </div>

          <Link
            href="/picture"
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[3/4] shadow-sm transition-transform active:scale-[0.98] bg-white flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-pale-green"
          >
            <div className="bg-pale-green-light rounded-full p-3 mb-2">
              <span className="material-symbols-outlined text-3xl text-green-400">
                add_a_photo
              </span>
            </div>
            <p className="text-green-800 font-medium text-sm">
              Find more people!
            </p>
          </Link>
        </div>
      </main> */}
      <BottomNav />
    </>
  );
}
