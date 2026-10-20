export default function AnimatedIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Glow orbs */}
      <div className="orb -top-10 -left-10 h-48 w-48 bg-indigo-500/30 animate-pulse-glow" aria-hidden="true" />
      <div className="orb -bottom-10 -right-8 h-52 w-52 bg-cyan-400/20 animate-pulse-glow" aria-hidden="true" />

      <div className="relative animate-float-slower">
        {/* Main monitor */}
        <div className="relative rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3 shadow-[0_30px_80px_-30px_rgba(34,211,238,0.35)] backdrop-blur">
          <div className="rounded-xl border border-slate-700/60 bg-gradient-to-br from-slate-800 to-slate-900 p-4">
            {/* Window bar */}
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              <div className="ml-2 h-2 flex-1 rounded-full bg-slate-700/60" />
            </div>

            {/* Document panel */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-indigo-400/30 ring-1 ring-indigo-300/40" />
                <div className="h-2 w-24 rounded-full bg-slate-600/70" />
              </div>
              <div className="h-2 w-full rounded-full bg-slate-700/60" />
              <div className="h-2 w-5/6 rounded-full bg-slate-700/60" />
              <div className="h-2 w-4/6 rounded-full bg-slate-700/60" />

              {/* Spreadsheet mini-grid */}
              <div className="mt-4 grid grid-cols-4 gap-1.5">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-4 rounded ${
                      i % 4 === 0
                        ? "bg-cyan-400/30"
                        : i % 3 === 0
                        ? "bg-indigo-400/20"
                        : "bg-slate-700/50"
                    }`}
                  />
                ))}
              </div>

              {/* Presentation bars */}
              <div className="mt-3 flex items-end gap-1.5">
                <div className="h-6 w-3 rounded-t bg-indigo-400/50" />
                <div className="h-9 w-3 rounded-t bg-cyan-400/60" />
                <div className="h-4 w-3 rounded-t bg-violet-400/50" />
                <div className="h-11 w-3 rounded-t bg-emerald-400/50" />
                <div className="h-7 w-3 rounded-t bg-blue-400/50" />
              </div>
            </div>
          </div>

          {/* Stand */}
          <div className="mx-auto mt-2 h-2 w-24 rounded-full bg-slate-700/70" />
          <div className="mx-auto h-1.5 w-40 rounded-full bg-slate-800" />
        </div>
      </div>

      {/* Floating app icons */}
      <div className="absolute -left-4 top-6 animate-float-slow rounded-xl border border-slate-700/70 bg-slate-900/90 p-2.5 shadow-lg backdrop-blur">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 5h16v11H4z" strokeLinejoin="round" />
          <path d="M8 20h8M12 16v4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute -right-3 top-24 animate-float-slower rounded-xl border border-slate-700/70 bg-slate-900/90 p-2.5 shadow-lg backdrop-blur">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 10h16M10 4v16" />
        </svg>
      </div>

      <div className="absolute -bottom-2 left-12 animate-float-slow rounded-xl border border-slate-700/70 bg-slate-900/90 p-2.5 shadow-lg backdrop-blur">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 6h16v12H4z" strokeLinejoin="round" />
          <path d="M12 10l3 2-3 2z" fill="currentColor" stroke="none" />
        </svg>
      </div>

      <div className="absolute -bottom-6 right-4 animate-float-slower rounded-xl border border-slate-700/70 bg-slate-900/90 p-2.5 shadow-lg backdrop-blur">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h10l6 6v10H4z" strokeLinejoin="round" />
          <path d="M14 4v6h6" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}