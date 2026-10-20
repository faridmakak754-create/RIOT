import {
    Target,
    Compass,
    BookOpen,
    Gauge,
    Users,
    Award,
    ArrowRight,
} from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import Section from "../components/common/Section";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import CourseGrid from "../components/courses/CourseGrid";
import ValueCard from "../components/sections/ValueCard";
import CTASection from "../components/sections/CTASection";
import { courses } from "../data/courses";
import { institute } from "../data/institute";

const values = [
    {
        title: "Practical Learning",
        description: "Emphasis on hands-on computer practice and skills that apply to real tasks.",
        icon: Target,
    },
    {
        title: "Digital Confidence",
        description: "Helping learners feel comfortable and capable with everyday digital tools.",
        icon: Compass,
    },
    {
        title: "Continuous Improvement",
        description: "Encouraging steady progress and ongoing learning in computer education.",
        icon: Gauge,
    },
    {
        title: "Accessible Computer Education",
        description: "A welcoming environment for learners who want to build computer skills.",
        icon: Users,
    },
];

export default function About() {
    return (
        <>
            <PageHeader
                eyebrow="About Our Institute"
                title="Empowering Learners Through Computer Education"
                subtitle="Learn about Reiyan Institute of Technology, our educational purpose, and our commitment to practical digital skills."
            />

            {/* Our Story */}
            <Section>
                <div className="grid gap-12 lg:grid-cols-2">
                    <RevealOnScroll>
                        <SectionHeading
                            eyebrow="Our story"
                            title="Our Story"
                            subtitle={`${institute.name} was established in ${institute.established} with a focus on computer education and digital skill development.`}
                        />
                    </RevealOnScroll>
                    <RevealOnScroll delay={120}>
                        <div className="space-y-4 text-base leading-relaxed text-slate-400">
                            <p>
                                REIYAN INSTITUTE OF TECHNOLOGY, Lilong, Thoubal District, is a newly
                                established computer training institute in Manipur, affiliated to Emax Education,
                                with a vision to transform the lives of village students through digital education. Our primary
                                objective is to9 make a techno-Village in order to bridge the gap between the Rural and Urban
                                areas by providing affordable and accessible Technological training.
                            </p>
                            <p>
                             	Our institute offers a wide range of courses from basic computer literacy to software development. 
                                At our institution, our faculties are more than just teachers; they are mentors, role models and inspiration to our students. 
                                They are dedicated to helping our students achieve their full potential and succeed in their careers.
                            </p>
                            <p>
                                As we all know that, village students face lots of difficulties in acquiring computer knowledge t urban areas like financial constraints and transportation etc. So, our institution is providing rural students with an education that is on par with urban institutions without the burden on high fees. We believe that
                                 every student deserves access to equality education, and we are committed in making that a reality.
                            </p>
                            <p>
                                	At REIYAN INSTITUTE OF TECHNOLOGY, we believe that education knows no bounds. 
                                    That's why we welcome students of all ages.
                            </p>
                            <p>
                                Our institution is more than just an institution. It is a symbol of hope, opportunity, and empowerment for the people of Manipur. Join us in our pursuit of excellence and 
                                let's shape a brighter future for ourselves, our community and our state. 
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </Section>

            {/* Affiliation */}
            <Section className="border-y border-slate-800/60 bg-slate-900/30">
                <div className="grid items-center gap-10 lg:grid-cols-2">
                    <RevealOnScroll>
                        <div className="rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/10 to-cyan-400/5 p-8">
                            <Award className="h-10 w-10 text-indigo-300" aria-hidden="true" />
                            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200">
                                Our Affiliation
                            </p>
                            <p className="mt-2 font-display text-2xl font-bold text-slate-50">
                                Affiliated with {institute.affiliation}
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                {institute.name} is affiliated with {institute.affiliation}. Additional
                                official details of the affiliation will be shared as they are confirmed.
                            </p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={120}>
                        <SectionHeading
                            eyebrow="Affiliation"
                            title="Our Affiliation"
                            subtitle="A recognised affiliation supporting our computer education focus."
                        />
                        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
                            We present our affiliation with {institute.affiliation} as part of our
                            institute identity. Further verified information about the affiliation can
                            be provided on request.
                        </p>
                    </RevealOnScroll>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section>
                <div className="grid gap-6 lg:grid-cols-2">
                    <RevealOnScroll>
                        <div className="card-hover rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 ring-1 ring-cyan-400/30">
                                <Compass className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                            </div>
                            <h2 className="font-display text-2xl font-bold text-slate-50">Our Vision</h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                To help learners become confident users of digital technology and computer
                                applications, ready to use these skills in education, work, and everyday
                                life.
                            </p>
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={120}>
                        <div className="card-hover rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-400/10 ring-1 ring-indigo-400/30">
                                <BookOpen className="h-5 w-5 text-indigo-300" aria-hidden="true" />
                            </div>
                            <h2 className="font-display text-2xl font-bold text-slate-50">Our Mission</h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                To provide practical computer education that builds digital literacy and
                                useful everyday computer skills through focused, application-oriented
                                learning.
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </Section>

            {/* What We Teach */}
            <Section className="border-y border-slate-800/60 bg-slate-900/30">
                <RevealOnScroll>
                    <SectionHeading
                        eyebrow="Programs"
                        title="Explore Our Courses"
                        subtitle="Our course offerings are designed to build computer knowledge and practical digital skills."
                    />
                </RevealOnScroll>
                <div className="mt-12">
                    <CourseGrid courses={courses} />
                </div>
                <RevealOnScroll delay={200}>
                    <div className="mt-10">
                        <Button to="/courses" variant="secondary" icon={ArrowRight}>
                            View Courses Page
                        </Button>
                    </div>
                </RevealOnScroll>
            </Section>

            {/* Values */}
            <Section>
                <RevealOnScroll>
                    <SectionHeading
                        eyebrow="Our values"
                        title="The principles behind our teaching"
                        align="center"
                        className="mx-auto max-w-2xl"
                    />
                </RevealOnScroll>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, index) => (
                        <RevealOnScroll key={value.title} delay={index * 80}>
                            <ValueCard {...value} />
                        </RevealOnScroll>
                    ))}
                </div>
            </Section>

            <CTASection
                title="Take the Next Step in Your Learning Journey"
                description="Explore our computer education programs and get in touch with the institute to learn more."
                primaryText="Explore Courses"
                primaryLink="/courses"
                secondaryText="Contact Us"
                secondaryLink="/contact"
            />
        </>
    );
}