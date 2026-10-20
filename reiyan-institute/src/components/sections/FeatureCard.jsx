import {
  MousePointerClick,
  FileText,
  Table2,
  Presentation,
  LayoutTemplate,
  Globe,
  Sparkles,
  MonitorSmartphone,
  Laptop,
  BookOpenCheck,
} from "lucide-react";

const iconMap = {
  MousePointerClick,
  FileText,
  Table2,
  Presentation,
  LayoutTemplate,
  Globe,
  Sparkles,
  MonitorSmartphone,
  Laptop,
  BookOpenCheck,
};

export default function FeatureCard({ title, description, icon = "Sparkles" }) {
  const Icon = iconMap[icon] || Sparkles;

  return (
    <div className="card-hover group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 ring-1 ring-indigo-400/30">
        <Icon className="h-5 w-5 text-indigo-300" aria-hidden="true" />
      </div>
      <h3 className="font-display text-base font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}