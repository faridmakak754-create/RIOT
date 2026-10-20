import { UserRound } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import Section from "../components/common/Section";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import DirectorMessageCard from "../components/sections/DirectorMessageCard";


export default function DirectorsMessage() {
    return (
        <>
            <PageHeader
                eyebrow="Leadership Message"
                title="A Message from Our Director"
                subtitle="Our commitment to computer education, practical learning, and digital confidence."
            />

            <Section>
                <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Director photo */}
                    <RevealOnScroll>
                        <div className="relative">
                            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-[0_30px_80px_-40px_rgba(129,140,248,0.45)]">
                                <img
                                    src="/images/director.jpg"
                                    alt="Portrait of the Director of Reiyan Institute of Technology"
                                    loading="lazy"
                                    className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                            <div
                                className="orb -bottom-8 -right-8 h-40 w-40 bg-indigo-500/20 animate-pulse-glow"
                                aria-hidden="true"
                            />
                        </div>
                    </RevealOnScroll>

                    {/* Message */}
                    <div>
                        <RevealOnScroll>
                            <SectionHeading
                                eyebrow="Director's Message"
                                title="Our Commitment to Computer Education"
                                subtitle="Building practical skills, digital confidence, and opportunities for the future."
                            />
                        </RevealOnScroll>

                        <RevealOnScroll delay={120}>
                            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                                <p>
                                    At Reiyan Institute of Technology, we believe that computer
                                    education plays an important role in preparing learners for
                                    an increasingly digital world. Our aim is to help students
                                    develop practical computer skills, improve their digital
                                    confidence, and build a strong foundation for lifelong learning.
                                </p>

                                <p>
                                    We are committed to creating a supportive learning environment
                                    where students can explore computer applications, strengthen
                                    their knowledge, and develop skills that are useful in their
                                    education, careers, and everyday lives.
                                </p>

                                <p>
                                    Through our courses, including ADCA, DCA, CCC, and DTP, we
                                    encourage practical learning, curiosity, creativity, and
                                    continuous improvement. We want every learner to gain useful
                                    knowledge and become more confident in using digital tools.
                                </p>

                                <p>
                                    We believe that every student has the potential to grow with
                                    the right guidance, dedication, and opportunities. Our commitment
                                    is to support learners throughout their educational journey
                                    and encourage them to keep learning as technology continues
                                    to evolve.
                                </p>

                                <p>
                                    Thank you for choosing Reiyan Institute of Technology as a
                                    part of your learning journey. We look forward to supporting
                                    your growth and helping you take confident steps toward your
                                    future goals.
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                            <div className="mt-8">
                                <DirectorMessageCard
                                    message="Let us learn, grow, and embrace technology together to create a brighter future."
                                    name="Md Mujibur Rahman"
                                    designation="Director, Reiyan Institute of Technology"
                                />
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </Section>

            {/* Educational Commitment */}
            <Section className="border-y border-slate-800/60 bg-slate-900/30">
                <div className="mx-auto max-w-3xl text-center">
                    <RevealOnScroll>
                        <SectionHeading
                            eyebrow="Our commitment"
                            title="Our Commitment to Learning"
                            subtitle="Computer knowledge and digital literacy are increasingly useful in everyday life. We support learners in developing these skills through practical, approachable computer education and a focus on continuous improvement."
                            align="center"
                        />
                    </RevealOnScroll>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <RevealOnScroll>
                    <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
                        <Button to="/courses" variant="primary">
                            Explore Courses
                        </Button>
                        <Button to="/contact" variant="secondary">
                            Contact Us
                        </Button>
                    </div>
                </RevealOnScroll>
            </Section>
        </>
    );
}