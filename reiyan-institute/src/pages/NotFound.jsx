import { Link } from "react-router-dom";
import { Home, Compass, ArrowLeft } from "lucide-react";
import Container from "../components/common/Container";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />
      <div className="orb -top-24 left-1/4 h-72 w-72 bg-indigo-500/20 animate-pulse-glow" aria-hidden="true" />
      <div className="orb -bottom-24 right-1/4 h-72 w-72 bg-cyan-500/15 animate-pulse-glow" aria-hidden="true" />

      <Container className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-7xl font-extrabold text-gradient-indigo-cyan sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-bold text-slate-50 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
          The page you are looking for does not exist or may have been moved. Use the
          links below to continue exploring Reiyan Institute of Technology.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-all hover:from-indigo-400 hover:to-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-indigo-400/70 hover:bg-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
          >
            <Compass className="h-4 w-4" aria-hidden="true" />
            Browse Courses
          </Link>
        </div>

        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm text-slate-500 transition-colors hover:text-cyan-300"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Or contact the institute
        </Link>
      </Container>
    </section>
  );
}