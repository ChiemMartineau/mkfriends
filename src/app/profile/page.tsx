export default async function Profile() {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-background-soft shadow-2xl">
      <header className="sticky top-0 z-50 bg-surface-white/90 backdrop-blur-md border-b border-divider-green px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative group cursor-pointer">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white shadow-sm"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDrkyj2w9qQ6DXUoGC75UyK_BT5SMT7lLFWuY_wzAY97Ln3egGxaT2IR8ev5CzOMYRhkvgz2h8AUV6gevaenoH0rrSMqGFi3LHMyU-MyyT5qW4314y1xTiNifQCdmYpm046ZIBJPre4_91JraFKuMHuOa4I4wQjQiAidpTq_LUazVc2MFH1QJuCiGE09puWmasDlZM178FPOIa0KkySW-jUqENyw2vOuezAxOz4tNNc0-cE8kEXnPLR5k9eJAz6qJQ9-2QuUX00Y8OA")',
              }}
            />
            <div className="absolute -bottom-1 -right-1 bg-melon-green-light text-melon-green-dark text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
              Lvl 5
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center text-text-dark">
          Leaderboard
        </h2>
        <div className="flex items-center justify-end gap-2">
          <button className="flex items-center justify-center size-10 rounded-full bg-white border border-divider-green text-text-main hover:bg-melon-green-pale transition-colors relative shadow-sm">
            <span className="material-symbols-outlined text-[24px]">
              notifications
            </span>
            <span className="absolute top-2 right-2 size-2 bg-primary rounded-full border border-white"></span>
          </button>
        </div>
      </header>

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
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-melon-green-dark border border-melon-green-light px-3 py-1 rounded-full flex items-center gap-1 shadow-md whitespace-nowrap">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Verified
                </span>
              </div>
            </div>
            <div className="text-center mt-2">
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
            <button className="w-full mt-2 bg-pastel-pink hover:bg-[#FFABC0] text-text-dark font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md shadow-pastel-pink/30">
              <span className="material-symbols-outlined">person_add</span>
              <span>Invite Friends</span>
            </button>
          </div>
        </section>

        <section className="mt-2 pl-6 pb-6">
          <div className="flex items-center justify-between pr-6 mb-3">
            <h3 className="text-lg font-bold text-text-dark">Squad</h3>
            <a
              className="text-xs font-bold text-primary hover:text-primary-hover"
              href="#"
            >
              View All
            </a>
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
        </section>

        <div className="sticky top-[65px] z-40 bg-background-soft pt-2">
          <div className="flex px-6 border-b border-divider-grey">
            <button className="flex-1 pb-3 pt-2 text-center border-b-2 border-primary text-text-dark font-bold text-sm relative">
              Global
              <span className="absolute -top-0 -right-2 flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-primary"></span>
              </span>
            </button>
            <button className="flex-1 pb-3 pt-2 text-center border-b-2 border-transparent text-slate-400 font-bold text-sm hover:text-slate-600">
              Local
            </button>
          </div>
        </div>

        <div className="flex flex-col px-4 py-4">
          <div className="bg-white rounded-3xl shadow-soft border border-divider-grey overflow-hidden flex flex-col divide-y divide-divider-green">
            <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-melon-green-pale to-white relative">
              <div className="absolute right-0 top-0 p-2 opacity-10">
                <span className="material-symbols-outlined text-[64px] text-melon-green">
                  emoji_events
                </span>
              </div>
              <div className="flex items-center justify-center w-8 text-melon-green-dark font-black text-xl italic">
                1
              </div>
              <div className="relative">
                <div
                  className="size-12 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAZ4Kj-09bkf9itgR5nKTORBvA_ssetntsOwu4dcMHMve6sK-ekG4rv2TMuOe9T9L_bJGX3DUkmHRUAtAF9w1vbuz4s1iNHbqQ5lMxNBhBWJbyKEBDGg13wZjP3B_YmkFkneiVh6YqT1wONU3F6CCBOygHxXwthNwqNyAXmmtGiEKQW2lXPEf0cl0vnIlc9OfpXDDyi5c33iXp0vc9pRK_NIqbaFJlcKInExIqr-o4idVoyI9Ea-Vn-3qcNCFCUmnvG-cfRrmuOcQ7")',
                  }}
                />
                <div className="absolute -bottom-1 -right-1 bg-melon-green text-white rounded-full p-0.5 border border-white">
                  <span className="material-symbols-outlined text-[12px] block">
                    crown
                  </span>
                </div>
              </div>
              <div className="flex-1 z-10">
                <h4 className="text-text-dark font-bold text-base leading-tight">
                  Team Alpha
                </h4>
                <p className="text-melon-green-dark/70 text-xs font-medium">
                  Top Contender
                </p>
              </div>
              <div className="text-right z-10">
                <p className="text-text-dark font-bold font-mono">15,420</p>
                <p className="text-slate-400 text-[10px] uppercase">
                  XP Points
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white">
              <div className="flex items-center justify-center w-8 text-melon-green font-black text-xl italic">
                2
              </div>
              <div
                className="size-12 rounded-full bg-cover bg-center border border-slate-200"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcFNRuyyfD9UInr6eBbohORQZwgGxgtas2TRGxtUW1LNhGoh2kV1yL1JvqLawSvXByCCrxGR4pUolCBaiPh_CxWuEpJIA4A_dQYLeX2Ld-6yDGCFAi7Xw65UrIGjenVm9Jd9qAYJd3hw6_icjfsWl4ojW-vRMm1pYDrB_QTDHEFOh8-c-EnkBkrANqLwnPFZj0kW-9YfUxjWvUwL66sY9mUyr4N45CbWi8C2PBEVT1UzwUeXtHfS8F7QcWUnuUBcudIbNqmP-nhIMh")',
                }}
              />
              <div className="flex-1">
                <h4 className="text-text-dark font-bold text-base leading-tight">
                  Selfie Kings
                </h4>
                <p className="text-slate-400 text-xs font-medium">10 Members</p>
              </div>
              <div className="text-right">
                <p className="text-text-dark font-bold font-mono">14,200</p>
                <p className="text-slate-400 text-[10px] uppercase">
                  XP Points
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white">
              <div className="flex items-center justify-center w-8 text-melon-green/80 font-black text-xl italic">
                3
              </div>
              <div
                className="size-12 rounded-full bg-cover bg-center border border-slate-200"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_SgZZZvGA4BFpN-FpsDhiErEznrVMBG1EfU9PgkRziaMBbxSTKHdvHGtfPO0cI0vYx1S4Ed0wLa4Bm6oj-nsArE2bm-a4uwOuQHTwtj5PuMfgT4B9D2_fwlFDXm3pOOvEK6eTgYhDqiCuN6fR4l1sKnf-wCUPg8VRQ03X83fLih2yvGLQCOgEtMeeEnTNrWzw-4OxO8D3gygyw2lnAzvbNt8O8FfPiyWsJ6QOUsYl86sptLW83kWA7EYaffQ3Q1gbpxOfholWqkrU")',
                }}
              />
              <div className="flex-1">
                <h4 className="text-text-dark font-bold text-base leading-tight">
                  Lens Legends
                </h4>
                <p className="text-slate-400 text-xs font-medium">12 Members</p>
              </div>
              <div className="text-right">
                <p className="text-text-dark font-bold font-mono">13,800</p>
                <p className="text-slate-400 text-[10px] uppercase">
                  XP Points
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-pastel-pink-light border-l-4 border-l-primary">
              <div className="flex items-center justify-center w-7 text-primary font-black text-xl italic">
                4
              </div>
              <div
                className="size-12 rounded-full bg-cover bg-center border-2 border-primary"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaXdG8DBTH6MzR1C5JwiqKCV-0K4vaRSOiG1fAIFwGUpt76H_wrU7_Muk2z3DnnBDL8UPrIl4Z62yjMFvX1tlBokgeSCrQgOHCCmOrUEMB_HQ3crr6wI6iS1T-syouEKQ1LtGWXCueMA_woXzmAA5hkub2uRe_R0m7MiiY74MZYsm_LrJlNefvnaJLaQtGCKH9dd5s4Pp_romXzVjFeYZf1vsxE3ZwpQKmbEkzWxp-JaangTILg6jSxoF5X1RZA_T_jqiDnWNevyLO")',
                }}
              />
              <div className="flex-1">
                <h4 className="text-text-dark font-bold text-base leading-tight">
                  Team Spark
                </h4>
                <div className="flex items-center gap-1">
                  <span className="text-primary text-xs font-medium">
                    Your Team
                  </span>
                  <span className="size-1.5 rounded-full bg-primary"></span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-primary font-bold font-mono">12,450</p>
                <p className="text-slate-400 text-[10px] uppercase">
                  XP Points
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/60">
              <div className="flex items-center justify-center w-8 text-slate-400 font-bold text-lg">
                5
              </div>
              <div
                className="size-12 rounded-full bg-cover bg-center border border-slate-200"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHVj17JTnbOxfbjc0Pd83iVFAekvv9hAPNBlHOl4ux8P7uRSRx_RpnAC_RlU_P7EwVz4Tcq-ZCpOChR43Gehqg3YCHU8UhZzpJWFg7eIth3CFHWi5tioE6n9nee4jQ6TNetkQoy-rKNL8bGeQ9Kf6dBItB-5aoPqnDKh-Jx6tkfa-rHp8qndooFJpg1VfmwqKstQI90S9XNnGmw1lqTyi75TZD8_6aibJtoB2wpgTbTtUuVjTWIoWiEZVJaHNuPbpHfHz2dzk5SrEk")',
                }}
              />
              <div className="flex-1">
                <h4 className="text-text-dark font-bold text-base leading-tight">
                  Midnight Runners
                </h4>
                <p className="text-slate-400 text-xs font-medium">6 Members</p>
              </div>
              <div className="text-right">
                <p className="text-text-dark font-bold font-mono">11,100</p>
                <p className="text-slate-400 text-[10px] uppercase">
                  XP Points
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/60">
              <div className="flex items-center justify-center w-8 text-slate-400 font-bold text-lg">
                6
              </div>
              <div
                className="size-12 rounded-full bg-cover bg-center border border-slate-200"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKtAeSTClJV5_7FybQqQnMfxN20yq-bZtbw2rgslc1jiYyjCf-SQvFu1g4j1CUzH8z1qfnzedXQbZRdchJFnu1tStcH7ZHk4GnCAa-aLvBuQ4ZOeNJOQ2Md9JgARu52mFbPdXXXD2lAiodoeFHBpcYFg_A-mFyKEz4KkaXUY6l3SpZxFBj4eF-7BteD_EyGiSL0Jq_yBQz-R8Zu7mY-0WEownYPluEa8uA3WxeZsRGYdQo7-6BHE6oP4cZwN-rJBCXF1MVzPoBI2Ct")',
                }}
              />
              <div className="flex-1">
                <h4 className="text-text-dark font-bold text-base leading-tight">
                  Flash Mob
                </h4>
                <p className="text-slate-400 text-xs font-medium">15 Members</p>
              </div>
              <div className="text-right">
                <p className="text-text-dark font-bold font-mono">9,850</p>
                <p className="text-slate-400 text-[10px] uppercase">
                  XP Points
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
