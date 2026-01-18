import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import LeaderboardList from "@/components/leaderboard/LeaderboardList";

export default async function Leaderboard() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-background-soft shadow-2xl">
      <TopNav />
      <main className="flex-1 flex flex-col pb-24">
        <section className="relative p-6 flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pastel-pink/20 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center gap-4 w-full">
            <div className="relative">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full size-28 border-4 border-white shadow-card"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAl0Vqax3vH-tiuI-sE4QPQcC0902OLQtsinkE4YLBcGZ9BvSCYMQGb9S015ftXMdySy4xlcuHf6KScq3vR0b1Z_Qy5BK3TYmkoJZpyyGk5q_PdX0oT0cLpp9A91DYMD6cJ4BnKRIqKjNqqooj7xLd9ztopaNqOoDi44yvK5yd3hPjMbf3CAdFkyvqIQnmYodOGsGs3ChVeWWTeYoEgeh9CYFhrO0D9m4I3koPXVEikrzg6nT-zponY6o8mF0n7kcZ9vHtyp0q6LTvO")',
                }}
              ></div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-text-dark mb-1">
                Team Spark
              </h1>
              <p className="text-text-muted text-sm font-medium">
                Est. 2023 • Los Angeles
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full mt-2">
              <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center border border-divider-green shadow-sm">
                <span className="text-2xl font-bold text-melon-green">#4</span>
                <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                  Rank
                </span>
              </div>
              <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center border border-pastel-pink/50 relative overflow-hidden group shadow-sm">
                <div className="absolute inset-0 bg-pastel-pink/5 group-hover:bg-pastel-pink/10 transition-colors"></div>
                <span className="text-2xl font-bold text-primary">12.4k</span>
                <span className="text-[10px] uppercase tracking-wider text-primary/80 font-bold">
                  XP Points
                </span>
              </div>
              <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center border border-divider-green shadow-sm">
                <span className="text-2xl font-bold text-melon-green">8</span>
                <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                  Members
                </span>
              </div>
            </div>
            {/* <button className="w-full mt-2 bg-pastel-pink hover:bg-[#FFABC0] text-text-dark font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md shadow-pastel-pink/30">
              <span className="material-symbols-outlined">person_add</span>
              <span>Invite Friends</span>
            </button> */}
          </div>
        </section>

        <LeaderboardList />
      </main>
      <BottomNav />
    </div>
  );
}
