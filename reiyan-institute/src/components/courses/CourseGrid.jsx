import CourseCard from "./CourseCard";
import RevealOnScroll from "../ui/RevealOnScroll";

export default function CourseGrid({ courses = [] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {courses.map((course, index) => (
        <RevealOnScroll key={course.id} delay={index * 80}>
          <CourseCard
            abbreviation={course.abbreviation}
            title={course.title}
            description={course.description}
            icon={course.icon}
            accent={course.accent}
            link={course.link}
          />
        </RevealOnScroll>
      ))}
    </div>
  );
}