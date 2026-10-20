import Button from "../common/Button";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function CTASection({
  title = "Ready to develop your computer skills?",
  description = "Explore our courses and learn more about computer education at Reiyan Institute of Technology.",
  primaryText = "Explore Courses",
  primaryLink = "/courses",
  secondaryText = "Contact Us",
  secondaryLink = "/contact",
}) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      <div className="orb -top-16 left-1/4 h-64 w-64 bg-indigo-500/20 animate-pulse-glow" aria-hidden="true" />
      <div className="orb -bottom-24 right-1/4 h-72 w-72 bg-cyan-500/15 animate-pulse-glow" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        <RevealOnScroll>
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 p-8 text-center shadow-[0_30px_80px_-40px_rgba(129,140,248,0.45)] sm:p-12">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button to={primaryLink} variant="primary">
                {primaryText}
              </Button>
              <Button to={secondaryLink} variant="secondary">
                {secondaryText}
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}