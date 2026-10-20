import { Link } from "react-router-dom";
import {
  Laptop,
  MonitorSmartphone,
  BookOpenCheck,
  LayoutTemplate,
  ArrowRight,
} from "lucide-react";

const iconMap = {
  Laptop,
  MonitorSmartphone,
  BookOpenCheck,
  LayoutTemplate,
};

const accentMap = {
  indigo: {
    ring: "ring-indigo-400/30",
    bg: "bg-indigo-400/10",
    icon: "text-indigo-300",
    tag: "bg-indigo-400/10 text-indigo-200 border-indigo-400/30",
  },
  blue: {
    ring: "ring-blue-400/30",
    bg: "bg-blue-400/10",
    icon: "text-blue-300",
    tag: "bg-blue-400/10 text-blue-200 border-blue-400/30",
  },
  cyan: {
    ring: "ring-cyan-400/30",
    bg: "bg-cyan-400/10",
    icon: "text-cyan-300",
    tag: "bg-cyan-400/10 text-cyan-200 border-cyan-400/30",
  },
  violet: {
    ring: "ring-violet-400/30",
    bg: "bg-violet-400/10",
    icon: "text-violet-300",
    tag: "bg-violet-400/10 text-violet-200 border-violet-400/30",
  },
};

export default function CourseCard({
  abbreviation,
  title,
  description,
  icon = "Laptop",
  accent = "indigo",
  link = "/courses",
}) {
  const Icon = iconMap[icon] || Laptop;
  const colors = accentMap[accent] || accentMap.indigo;

  return (
    <div className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${colors.bg} ${colors.ring}`}
        >
          <Icon className={`h-6 w-6 ${colors.icon}`} aria-hidden="true" />
        </div>
        <span
          className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${colors.tag}`}
        >
          {abbreviation}
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-slate-100">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>

      <Link
        to={link}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
      >
        Course details
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>

      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-indigo-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}