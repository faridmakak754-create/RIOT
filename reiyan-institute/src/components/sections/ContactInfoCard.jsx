export default function ContactInfoCard({ title, value, icon: Icon, href }) {
  const content = (
    <div className="card-hover flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 ring-1 ring-indigo-400/30">
        {Icon ? <Icon className="h-5 w-5 text-indigo-300" aria-hidden="true" /> : null}
      </div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
        {title}
      </h3>
      <p className="mt-2 break-words text-sm leading-relaxed text-slate-400">{value}</p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
      >
        {content}
      </a>
    );
  }

  return content;
}