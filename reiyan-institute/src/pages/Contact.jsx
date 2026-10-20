import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import Section from "../components/common/Section";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import RevealOnScroll from "../components/ui/RevealOnScroll";
import ContactInfoCard from "../components/sections/ContactInfoCard";
import { courses } from "../data/courses";
import { institute } from "../data/institute";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  course: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState(null);

  const contactCards = [
    {
      title: "Address",
      value: institute.contact.address,
      icon: MapPin,
    },
    {
      title: "Phone",
      value: institute.contact.phone,
      icon: Phone,
    },
    {
      title: "Email",
      value: institute.contact.email,
      icon: Mail,
    },
    {
      title: "Opening Hours",
      value: institute.contact.hours,
      icon: Clock,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setNotice(null);
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.course) next.course = "Please select a course of interest.";
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (!form.message.trim()) next.message = "Please enter your message.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setNotice({
        type: "info",
        text: "This form is a frontend demonstration. Your message was not sent or stored. To enable message delivery, connect this form to a configured backend or form service.",
      });
      setForm(initialForm);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30";

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Get in Touch"
        subtitle="Have questions about our institute or courses? Find our contact information or prepare an inquiry."
      />

      {/* Contact Info */}
      <Section>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Contact information"
            title="How to reach us"
            subtitle="Contact details are shown as placeholders until official information is supplied."
          />
        </RevealOnScroll>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => (
            <RevealOnScroll key={card.title} delay={index * 80}>
              <ContactInfoCard {...card} />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      {/* Contact Form
      <Section className="border-y border-slate-800/60 bg-slate-900/30">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <RevealOnScroll>
              <SectionHeading
                eyebrow="Inquiry form"
                title="Send an inquiry"
                subtitle="Complete the form to prepare an inquiry. All fields except phone number are required."
              />
            </RevealOnScroll>

            <RevealOnScroll delay={120}>
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-300">
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={inputClasses}
                    />
                    {errors.fullName ? (
                      <p id="fullName-error" className="mt-1.5 text-xs text-rose-400">
                        {errors.fullName}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={inputClasses}
                    />
                    {errors.email ? (
                      <p id="email-error" className="mt-1.5 text-xs text-rose-400">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-300">
                      Phone Number <span className="text-slate-500">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label htmlFor="course" className="mb-2 block text-sm font-medium text-slate-300">
                      Course of Interest <span className="text-rose-400">*</span>
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.course)}
                      aria-describedby={errors.course ? "course-error" : undefined}
                      className={inputClasses}
                    >
                      <option value="">Select a course</option>
                      <option value="general">General Inquiry</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.abbreviation} — {course.title}
                        </option>
                      ))}
                    </select>
                    {errors.course ? (
                      <p id="course-error" className="mt-1.5 text-xs text-rose-400">
                        {errors.course}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is your inquiry about?"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={inputClasses}
                  />
                  {errors.subject ? (
                    <p id="subject-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.subject}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputClasses} resize-y`}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1.5 text-xs text-rose-400">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <Button type="submit" variant="primary" icon={Send}>
                    Submit Inquiry
                  </Button>
                </div>

                {notice ? (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-4 text-sm text-cyan-100"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                    <p>{notice.text}</p>
                  </div>
                ) : null}
              </form>
            </RevealOnScroll>
          </div>

          Side note
          <RevealOnScroll delay={200}>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                Frontend demonstration
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                This website is a static frontend build. The contact form validates your
                input in the browser but does not send or store messages. Message delivery
                requires a configured backend or form service.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                  All fields except phone number are required.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  Email addresses are format-checked in the browser.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  Contact details are placeholders until officially confirmed.
                </li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </Section> */}

      {/* Location */}
      <Section>
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Location"
            title="Find the institute"
            subtitle="The location panel below is a placeholder and will be updated when the official address is available."
          />
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-3 bg-grid-pattern p-8 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-indigo-400/30 bg-indigo-400/10">
                <MapPin className="h-7 w-7 text-indigo-300" aria-hidden="true" />
              </div>
              <p className="font-display text-lg font-semibold text-slate-200">
                Map placeholder
              </p>
              <p className="max-w-md text-sm leading-relaxed text-slate-400">
                A map will be embedded here once the official institute address is
                confirmed. No location has been invented.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </Section>
    </>
  );
}