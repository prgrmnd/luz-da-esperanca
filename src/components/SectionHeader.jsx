export default function SectionHeader({ eyebrow, title, description, id }) {
  return <div className="section-head">
    <span className="eyebrow">{eyebrow}</span>
    <h2 id={id}>{title}</h2>
    <div className="divider" />
    {description && <p>{description}</p>}
  </div>;
}
