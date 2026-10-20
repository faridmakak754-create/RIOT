import Container from "./Container";

export default function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <header className="relative overflow-hidden border-b border-slate-800/70 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />
      <div className="orb -top-24 -left-24 h-72 w-72 bg-indigo-500/20 animate-pulse-glow" aria-hidden="true" />
      <div className="orb -bottom-32 right-0 h-80 w-80 bg-cyan-500/15 animate-pulse-glow" aria-hidden="true" />

      <Container className="relative z-10 py-20 sm:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              {subtitle}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </header>
  );
}