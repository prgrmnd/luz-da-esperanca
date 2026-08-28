import SectionHeader from './SectionHeader';

export default function LocationSection() {
  return <section className="section section-alt" id="localizacao"><div className="container"><SectionHeader eyebrow="Onde estamos" title="Localizacao" /><div className="map-frame map-full"><iframe src="https://www.google.com/maps?q=R.+Anhanguera,+4170+-+Piaui,+Parnaiba+-+PI,+64207-540,+Brasil&output=embed" title="Mapa da localizacao do Centro Espirita Luz da Esperanca" loading="lazy" /></div></div></section>;
}
