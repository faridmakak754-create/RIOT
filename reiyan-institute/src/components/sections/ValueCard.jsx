import { Sparkles } from "lucide-react";

export default function ValueCard({ title, description, icon: Icon = Sparkles }) {
  return (
    <div className="card-hover relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/30">
        <Icon className="h-5 w-5 text-cyan-300" aria-hidden="true" />
      </div>
      <h3 className="font-display text-base font-semibold text-slate-100">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}