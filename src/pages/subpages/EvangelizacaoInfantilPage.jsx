import Subpage from '../Subpage';

export default function EvangelizacaoInfantilPage() {
  return (
    <Subpage eyebrow="Atividades" title="Evangelização Infantil Sementinha de Luz" description="">
      <div className="info-page">
        <article className="info-card info-card--rose">
          <p>
            A <strong>Evangelização Infantil Sementinha de Luz</strong> é um trabalho de educação moral e
            espiritualização infantil, desenvolvido com metodologia baseada nas escolas de evangelização do
            mundo espiritual, descritas em obras psicografadas por Francisco Cândido Xavier.
          </p>
        </article>

        <div className="info-highlight">
          <h3>Público-alvo</h3>
          <ul className="check-list">
            <li>Crianças de 2 a 11 anos de idade.</li>
            <li>Planos futuros incluem berçário para crianças a partir de 0 anos.</li>
          </ul>
        </div>

        <article className="info-card info-card--cream">
          <p>
            Venha conhecer as atividades e ajudar a plantar essa sementinha do bem: uma proposta de acolhimento
            e formação cristã para os pequenos, em um ambiente lúdico e fraterno.
          </p>
        </article>

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
