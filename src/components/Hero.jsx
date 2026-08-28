import { useEffect, useState } from 'react';
import Arrow from './Arrow';

export default function Hero({ slides, onNavigate }) {
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5000); return () => window.clearInterval(timer); }, [slides.length]);
  const move = (step) => setActiveSlide((current) => (current + step + slides.length) % slides.length);

  return <section className="hero" id="inicio" aria-label="Destaques da instituicao">
    <div className="slides">{slides.map((slide, index) => <div key={slide.title} className={`slide ${index === activeSlide ? 'active' : ''}`} style={{ backgroundImage: `url('${slide.image}')` }}><div className="slide-content"><span className="kicker">{slide.kicker}</span><h1>{slide.title}</h1><p>{slide.text}</p><a href={slide.target} onClick={onNavigate} className="btn btn-orange btn-lg">{slide.action}</a></div></div>)}</div>
    <button className="hero-btn hero-prev" onClick={() => move(-1)} aria-label="Slide anterior"><Arrow direction="left" /></button>
    <button className="hero-btn hero-next" onClick={() => move(1)} aria-label="Proximo slide"><Arrow /></button>
    <div className="hero-dots">{slides.map((slide, index) => <button key={slide.title} className={`hero-dot ${index === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(index)} aria-label={`Ir para o slide ${index + 1}`} />)}</div>
  </section>;
}
