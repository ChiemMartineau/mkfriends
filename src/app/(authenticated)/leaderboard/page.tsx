import BottomNav from "@/components/BottomNav";
import TopNav from "@/components/TopNav";
import LeaderboardList from "@/components/leaderboard/LeaderboardList";
import TeamMembersSection from "@/components/teamMembers/TeamMembersSection";
import { PLAYER_STATS } from "@/components/playerStats";
import Logo from "@/components/leaderboard/Logo";

export default async function Leaderboard() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-background-soft shadow-2xl">
      <TopNav title={"Leaderboard"} />
      <main className="flex-1 flex flex-col pb-24">
        <section className="relative p-6 flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pastel-pink/20 blur-[60px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col items-center gap-4 w-full">
            {/* <div className="flex items-center justify-center size-16 rounded-full bg-primary/10 text-primary">
              <img src="/mkfriends.png" alt="MkFriends Logo" />
            </div> */}
            <Logo />
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-text-dark mb-1">
                {PLAYER_STATS.teamName}
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-3 w-full mt-2">
              <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center border border-divider-green shadow-sm">
                <span className="text-2xl font-bold text-melon-green">
                  #{PLAYER_STATS.teamRank}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-text-muted font-bold">
                  Rank
                </span>
              </div>
              <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center border border-pastel-pink/50 relative overflow-hidden group shadow-sm">
                <div className="absolute inset-0 bg-pastel-pink/5 group-hover:bg-pastel-pink/10 transition-colors"></div>
                <span className="text-2xl font-bold text-primary">
                  {PLAYER_STATS.points.toLocaleString()}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-primary/80 font-bold">
                  XP Points
                </span>
              </div>
              <div className="bg-white rounded-2xl p-3 flex flex-col items-center justify-center border border-divider-green shadow-sm">
                <span className="text-2xl font-bold text-melon-green">
                  {PLAYER_STATS.nbTeamMembers}
                </span>
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

        <TeamMembersSection />
        {/* <section className="mt-2 pl-6 pb-6">
          <div className="flex items-center justify-between pr-6 mb-3">
            <h3 className="text-lg font-bold text-text-dark">Team Members</h3>
          </div>
          <div className="flex overflow-x-auto gap-4 hide-scrollbar pr-6">
            <button className="flex-shrink-0 flex flex-col gap-2 items-center group">
              <div className="size-14 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center bg-white group-hover:border-primary group-hover:text-primary text-slate-400 transition-colors">
                <span className="material-symbols-outlined">add</span>
              </div>
              <span className="text-xs font-medium text-slate-500">Add</span>
            </button>
            <div className="flex-shrink-0 flex flex-col gap-2 items-center">
              <div
                className="size-14 rounded-full border-2 border-white ring-2 ring-melon-green-light bg-cover bg-center shadow-sm"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_rXP1orrEhGBtiLAI_LwzY9s6e2yR1i50KPhrOuYeyyySX3OzsV5IZzlGX7oHnr2bSA4Him_RvKxACJ49ll9AvkeEKiO2fFso5tEHY_An35m-uXyxc5u2ZOhKJajfiC4hUBv0O3W1c6QSABFFYhMZvLPrWSIuzM2ZjqabQ37np9uKxuR-ptxtltS48JJnTvr0qDWgXf8lEkG_Vi2V4Om7_chmsfgzgXOSbso5ovBYwJwCu_L4Mvo11YnYGDOEWmxnJ_eU9txvi9h2")',
                }}
              />
              <span className="text-xs font-medium text-text-dark">You</span>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-2 items-center">
              <div
                className="size-14 rounded-full border-2 border-white shadow-sm bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDf3xDVl4IjHtVPpBQPDhvv_E6TZJdVkTVxtVASUK0R6W8lsYADp3GOsECjC8SH5skMj-k4C34m5coK38FZOPBzTs4j6IxJPXJrezZy_EXefgxTnrLnaxCkSV7K1c988C6pVTLY-pTewOGQhJ5GTzsz99RfclqcOhKbSoFHITJtbQnASRmxmem5b-h54YS39mAF0jPuVOqRcTEa1ms8wm2sF0iEkI3xbrJaFvTv5UTxSJFzRwPH0ahd22ubeh3xIP_mMqF3RsCW5oTZ")',
                }}
              />
              <span className="text-xs font-medium text-slate-500">Mike</span>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-2 items-center">
              <div
                className="size-14 rounded-full border-2 border-white shadow-sm bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAo8Ewf8oHMPCks_i6iPSscj3OKztWcrenE0PfLyeKuuiHB1kBP4Inw52WQydzj7_7AixXdqX_DnMgjB1Y8Q0UGxJSoAMUS3lz66QKacHixYf87cp3JD3Tbu_Jx71AZPKtVpzjTgnm3mcqM2j_Xh-mw1pKYK_DLT-DZgLWrP-0qipZE2co659hCc__SrJfMGOWOhkikut4RAL5Gt33XHsrw1q6tqmln6jqDiyBU5n1WNEwIxXIAzNFwaM-MEALD6CW_aP_0f3n_zQ4z")',
                }}
              />
              <span className="text-xs font-medium text-slate-500">
                Jessica
              </span>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-2 items-center">
              <div
                className="size-14 rounded-full border-2 border-white shadow-sm bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1tNiS_FByLou3X25bmZO11U52VlR1EvKwlINwDimQTzyEPvnQR_RZz5A3HS-rYirmmqS9E16B0eJReg0c61HK_ISHQYBKnILIifpsTaLHcGvkXWT-1XALjTE6_tpZhm4TkeavfRyAZGRmIEh072UPfFdXNf-KdkLKH8jwpntENux4PmSExfErqFyHXTpKoYlZ4nKViwf9gQD6yd_--lkYMGwA_kOmIbo2Cai8uQc-6fDnlNFwv4p4el1mbQ-lqMQFcWHd7uGhlxPZ")',
                }}
              />
              <span className="text-xs font-medium text-slate-500">Alex</span>
            </div>
          </div>
        </section> */}
        <LeaderboardList />
      </main>
      <BottomNav />
    </div>
  );
}
