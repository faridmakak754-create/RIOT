import PageHeader from "../components/common/PageHeader";
import Section from "../components/common/Section";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import CourseGrid from "../components/courses/CourseGrid";
import FeatureCard from "../components/sections/FeatureCard";
import { courses, learningBenefits } from "../data/courses";

export default function Courses() {
  return (
    <>
      <PageHeader
        eyebrow="Our Courses"
        title="Explore Our Computer Courses"
        subtitle="Discover learning opportunities designed to build computer knowledge and practical digital skills."
      />

      {/* Course Grid */}
      <Section>
        <CourseGrid courses={courses} />
        <RevealOnScroll delay={200}>
          <p className="mt-10 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-xs leading-relaxed text-slate-500">
            Course details such as fees, durations, eligibility and official syllabuses
            will be shared as confirmed information becomes available.
          </p>
        </RevealOnScroll>
      </Section>

      {/* Learning Benefits */}
      <Section className="border-y border-slate-800/60 bg-slate-900/30">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Learning areas"
            title="Skills you can build"
            subtitle="These are general learning areas associated with computer education rather than verified syllabus promises."
            align="center"
            className="mx-auto max-w-2xl"
          />
        </RevealOnScroll>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learningBenefits.map((benefit, index) => (
            <RevealOnScroll key={benefit.title} delay={index * 70}>
              <FeatureCard {...benefit} />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section>
        <RevealOnScroll>
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-8 text-center shadow-[0_30px_80px_-40px_rgba(34,211,238,0.35)] sm:p-12">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-slate-50 sm:text-4xl">
              Need More Information About Our Courses?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              Contact the institute to learn more about available courses and enrollment
              information.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Section>
    </>
  );
}