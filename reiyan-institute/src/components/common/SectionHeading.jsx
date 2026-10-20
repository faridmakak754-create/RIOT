export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow ? (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-slate-50 sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}