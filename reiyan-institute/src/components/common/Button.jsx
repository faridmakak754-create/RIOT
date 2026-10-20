import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-60 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-950 shadow-[0_10px_30px_-12px_rgba(129,140,248,0.7)] hover:from-indigo-400 hover:to-cyan-400 hover:shadow-[0_16px_40px_-14px_rgba(34,211,238,0.7)]",
  secondary:
    "border border-slate-700 bg-slate-900/60 text-slate-100 hover:border-indigo-400/70 hover:bg-slate-800/80",
  ghost:
    "text-slate-300 hover:text-white hover:bg-slate-800/60",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  icon: Icon,
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {children}
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}