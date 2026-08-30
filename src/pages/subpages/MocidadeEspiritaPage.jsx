import Subpage from '../Subpage';

const atividades = [
  'Divulgação de mensagens espíritas.',
  'Oficina de música (violão).',
  'Manutenção da horta comunitária.',
  'Estudos morais.',
];

export default function MocidadeEspiritaPage() {
  return (
    <Subpage eyebrow="Atividades" title="Mocidade Espírita Luiz Sérgio" description="">
      <div className="info-page">
        <article className="info-card info-card--coral">
          <p>
            A <strong>Mocidade Espírita Luiz Sérgio</strong> é o núcleo de trabalho destinado a atender e
            acompanhar jovens a partir de 12 anos, oferecendo cursos, atividades práticas, oficinas de arte e
            recreação, com foco no desenvolvimento espiritual e na preparação para o trabalho comunitário.
          </p>
        </article>

        <div className="info-highlight">
          <h3>Público-alvo</h3>
          <ul className="check-list">
            <li>Jovens a partir de 12 anos de idade.</li>
          </ul>
        </div>

        <div className="info-highlight">
          <h3>Atividades desenvolvidas</h3>
          <ul className="check-list">
            {atividades.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <article className="info-card info-card--green">
          <h3>Local e contato</h3>
          <p>
            Rua Anhanguera, 4170 — Bairro Piauí, Parnaíba (PI), CEP 64207-540.
            <br />
            E-mail:{' '}
            <a href="mailto:luzdaesperancaparnaiba@gmail.com" className="inline-link">
              luzdaesperancaparnaiba@gmail.com
            </a>
          </p>
        </article>
      </div>
    </Subpage>
  );
}
