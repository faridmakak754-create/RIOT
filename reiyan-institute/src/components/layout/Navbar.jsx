import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { navLinks } from "../../data/navigation";
import { institute } from "../../data/institute";
import Button from "../common/Button";
import Container from "../common/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClasses = ({ isActive }) =>
    `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive
      ? "text-white bg-indigo-500/10"
      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled
          ? "border-slate-800/80 bg-slate-950/80 backdrop-blur-xl"
          : "border-transparent bg-slate-950/40 backdrop-blur"
        }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          {/* Brand */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70"
            aria-label={`${institute.name} — Home`}
          >
            <img
              src="images/logo.png"
              alt="Reiyan Institute of Technology logo"
              className="h-9 w-9 rounded-xl object-contain"
            />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-[15px] uppercase font-bold text-white">
                Reiyan Institute
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                of Technology
              </span>
            </span>
            <span className="font-display text-base font-bold text-white sm:hidden">
              Reiyan
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"} className={linkClasses}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button to="/contact" variant="primary" className="px-5 py-2.5">
              Contact Us
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700/70 bg-slate-900/60 text-slate-200 transition-colors hover:bg-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <Container>
          <div className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive
                    ? "bg-indigo-500/10 text-white"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              to="/contact"
              onClick={() => setOpen(false)}
              variant="primary"
              className="mt-2 w-full"
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}