import Container from "./Container";

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}