import PageIntro from './PageIntro';

export default function Subpage({ eyebrow, title, description, children }) {
  return <PageIntro eyebrow={eyebrow} title={title} description={description}>{children}</PageIntro>;
}
