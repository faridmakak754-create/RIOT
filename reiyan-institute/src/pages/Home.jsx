import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  MousePointerClick,
  FileText,
  Table2,
  Presentation,
  LayoutTemplate,
  Globe,
  MonitorSmartphone,
} from "lucide-react";
import Container from "../components/common/Container";
import Section from "../components/common/Section";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import AnimatedIllustration from "../components/ui/AnimatedIllustration";
import CourseGrid from "../components/courses/CourseGrid";
import FeatureCard from "../components/sections/FeatureCard";
import CTASection from "../components/sections/CTASection";
import DirectorMessageCard from "../components/sections/DirectorMessageCard";
import { courses } from "../data/courses";
import { institute } from "../data/institute";

const features = [
  {
    title: "Practical Learning",
    description: "Focus on hands-on computer tasks and skills you can apply in daily work.",
    icon: "MousePointerClick",
  },
  {
    title: "Digital Skills",
    description: "Build confidence with the digital tools used in modern learning and offices.",
    icon: "Globe",
  },
  {
    title: "Computer Applications",
    description: "Explore documents, spreadsheets, presentations and desktop publishing.",
    icon: "MonitorSmartphone",
  },
  {
    title: "Learning Support",
    description: "Learn in a supportive environment with guidance for your computer education.",
    icon: "Sparkles",
  },
];

export default function Home() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />
        <div className="orb -top-32 -left-24 h-80 w-80 bg-indigo-500/20 animate-pulse-glow" aria-hidden="true" />
        <div className="orb top-40 -right-24 h-96 w-96 bg-cyan-500/15 animate-pulse-glow" aria-hidden="true" />

        <Container className="relative z-10 grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
          <div>
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {institute.tagline}
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={80}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                Build Your Future Through{" "}
                <span className="text-gradient-indigo-cyan">Computer Education</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                Develop practical computer skills and digital confidence with Reiyan
                Institute of Technology.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button to="/courses" variant="primary" icon={ArrowRight}>
                  Explore Our Courses
                </Button>
                <Button to="/about" variant="secondary">
                  Learn About Us
                </Button>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  Established {institute.established}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  Affiliated with {institute.affiliation}
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Computer Education
                </span>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={200} className="lg:pl-6">
            <AnimatedIllustration />
          </RevealOnScroll>
        </Container>
      </section>

      {/* Section 2 — Introduction */}
      <Section className="border-y border-slate-800/60 bg-slate-900/30">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="relative">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
                <div className="grid grid-cols-3 gap-3">
                  {[FileText, Table2, Presentation, LayoutTemplate, Globe, MonitorSmartphone].map(
                    (Icon, i) => (
                      <div
                        key={i}
                        className="flex h-16 items-center justify-center rounded-xl border border-slate-800 bg-slate-800/50 text-indigo-300 transition-colors hover:border-indigo-400/40 hover:text-cyan-300"
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    )
                  )}
                </div>
                <p className="mt-5 text-center text-xs uppercase tracking-[0.2em] text-slate-500">
                  Application-focused learning
                </p>
              </div>
              <div className="orb -bottom-10 -right-6 h-40 w-40 bg-cyan-500/20 animate-pulse-glow" aria-hidden="true" />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <SectionHeading
                eyebrow="Who we are"
                title={`Welcome to ${institute.name}`}
                subtitle={`Established in ${institute.established} and affiliated with ${institute.affiliation}, Reiyan Institute of Technology focuses on practical computer education and digital skill development.`}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
                Our approach centres on helping learners use computers with confidence —
                from everyday documents and spreadsheets to presentations and desktop
                publishing — in a focused, supportive learning environment.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={180}>
              <div className="mt-8">
                <Button to="/about" variant="secondary" icon={ArrowRight}>
                  Learn More
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </Section>

      {/* Section 3 — Featured Courses */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Programs"
              title="Explore Our Courses"
              subtitle="Explore our computer education programs and discover opportunities to develop practical digital skills."
            />
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <Button to="/courses" variant="secondary" icon={ArrowRight}>
              View All Courses
            </Button>
          </RevealOnScroll>
        </div>

        <div className="mt-12">
          <CourseGrid courses={courses} />
        </div>
      </Section>

      {/* Section 4 — Why Choose Us */}
      <Section className="border-y border-slate-800/60 bg-slate-900/30">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Why choose us"
            title="A practical approach to computer education"
            subtitle="Our programs are designed around useful computer skills and everyday digital confidence."
            align="center"
            className="mx-auto max-w-2xl"
          />
        </RevealOnScroll>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <RevealOnScroll key={feature.title} delay={index * 80}>
              <FeatureCard {...feature} />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Section 5 — Director's Message Preview */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Leadership"
              title="A Message from Our Director"
              subtitle="A short introduction to our educational commitment and focus on practical computer learning."
            />
            <div className="mt-8">
              <Button to="/directors-message" variant="secondary" icon={ArrowRight}>
                Read Full Message
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={120}>
            <DirectorMessageCard preview />
          </RevealOnScroll>
        </div>
      </Section>

      {/* Section 6 — CTA */}
      <CTASection
        title="Ready to Develop Your Computer Skills?"
        description="Explore our courses and learn more about computer education at Reiyan Institute of Technology."
        primaryText="Explore Courses"
        primaryLink="/courses"
        secondaryText="Contact Us"
        secondaryLink="/contact"
      />
    </>
  );
}