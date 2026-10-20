// src/components/layout/Footer.jsx

import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import Container from "../common/Container";
import { institute } from "../../data/institute";
import { navLinks } from "../../data/navigation";
import { courses } from "../../data/courses";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
      <div className="orb -top-24 left-1/3 h-56 w-56 bg-indigo-500/10" aria-hidden="true" />

      <Container className="relative z-10 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Institute */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
                <img
              src="images/logo.png"
              alt="Reiyan Institute of Technology logo"
              className="h-9 w-9 rounded-xl object-contain"
            />
              <span className="font-display text-base font-bold text-white">
                {institute.name}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              A computer education institute focused on practical digital skills and
              computer applications for everyday and professional use.
            </p>
            <div className="mt-4 space-y-1 text-sm text-slate-400">
              <p>
                <span className="text-slate-500">Established:</span> {institute.established}
              </p>
              <p>
                <span className="text-slate-500">Affiliated with:</span> {institute.affiliation}
              </p>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Courses */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200">
              Our Courses
            </h3>
            <ul className="mt-4 space-y-2.5">
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    to="/courses"
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-300"
                  >
                    {course.abbreviation}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-200">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" aria-hidden="true" />
                <span>{institute.contact.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" aria-hidden="true" />
                <span>{institute.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" aria-hidden="true" />
                <span>{institute.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-800/70 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {year} {institute.name}. All rights reserved.
          </p>
          <p>Affiliated with {institute.affiliation} · Established {institute.established}</p>
        </div>
      </Container>
    </footer>
  );
}