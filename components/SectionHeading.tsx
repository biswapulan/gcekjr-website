export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <div className="section-heading-line" />
    </div>
  )
}
