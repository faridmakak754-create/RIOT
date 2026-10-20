import { Quote, UserRound } from "lucide-react";

export default function DirectorMessageCard({
  message = "We believe computer education opens doors to new opportunities. Our goal is to help students build practical digital skills, confidence, and knowledge for a brighter future.",
  name = "Md Mujibur Rahman",
  designation = "Director",
  preview = true,
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-900/50 p-6 sm:p-8">
      <Quote className="absolute right-6 top-6 h-10 w-10 text-indigo-400/15" aria-hidden="true" />
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80">
          <UserRound className="h-6 w-6 text-slate-400" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm leading-relaxed text-slate-300">{message}</p>
          <div className="mt-4">
            <p className="font-display text-sm font-semibold text-slate-100">{name}</p>
            <p className="text-xs text-slate-500">{designation}</p>
          </div>
        </div>
      </div>

    </div>
  );
}