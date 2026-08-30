import Subpage from '../Subpage';

const oferecimentos = [
  'Preparação doutrinária para o casamento.',
  'Sustentação familiar e evangelização dos lares.',
  'Preparação de mulheres para a maternidade.',
  'Apoio a lares que cuidam de crianças abandonadas.',
  'Orientação na educação dos filhos.',
  'Encontros de confraternização entre casais e famílias.',
];

export default function EscolaEvangelizacaoAdultosPage() {
  return (
    <Subpage eyebrow="Atividades" title="Escola de Evangelização de Adultos" description="">
      <div className="info-page">
        <article className="info-card info-card--gold">
          <p>
            A <strong>Escola de Evangelização de Adultos</strong> oferece cursos teórico-práticos direcionados
            à preparação doutrinária para o casamento, à sustentação familiar e à evangelização, atendendo
            diretamente as famílias em suas necessidades morais, com suporte e orientação de acordo com a
            demanda de cada indivíduo.
          </p>
        </article>

        <div className="info-highlight">
          <h3>Público-alvo</h3>
          <ul className="check-list">
            <li>Adultos e famílias que necessitam de orientação moral e suporte espiritual.</li>
          </ul>
        </div>

        <div className="info-highlight">
          <h3>O que é oferecido</h3>
          <ul className="check-list">
            {oferecimentos.map((item) => (
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
