import SectionHeader from '../components/SectionHeader';

export default function PageIntro({ eyebrow, title, description, children }) {
  return <section className="section page-intro"><div className="container"><SectionHeader eyebrow={eyebrow} title={title} description={description} />{children}</div></section>;
}
