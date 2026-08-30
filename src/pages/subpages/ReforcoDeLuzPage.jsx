import Subpage from '../Subpage';

const disciplinas = [
  'Linguagem — leitura, escrita e interpretação de texto.',
  'Matemática — operações básicas e raciocínio lógico.',
  'Tema Aplicado — noções de história, geografia e ciências.',
];

export default function ReforcoDeLuzPage() {
  return (
    <Subpage eyebrow="Atividades" title="Reforço de Luz" description="">
      <div className="info-page">
        <article className="info-card info-card--gold">
          <p>
            O <strong>Reforço de Luz</strong> é um programa de reforço escolar gratuito voltado a crianças com
            defasagem de aprendizagem, oferecendo reforço intelectual, psicológico e emocional, além de
            acompanhamento de saúde, para ampliar as competências em leitura, escrita e raciocínio matemático.
          </p>
        </article>

        <div className="info-highlight">
          <h3>Público-alvo</h3>
          <ul className="check-list">
            <li>40 alunos do 2º ao 4º ano do Ensino Fundamental da rede pública municipal.</li>
            <li>Crianças com defasagens diagnosticadas em aprendizagem, divididas em duas turmas.</li>
          </ul>
        </div>

        <article className="info-card info-card--cream">
          <h3>Turmas e horários</h3>
          <ul className="check-list">
            <li>
              <strong>Turma matutina:</strong> segundas, quartas e sextas-feiras, das 7h30 às 11h
              (intervalo das 9h às 9h30).
            </li>
            <li>
              <strong>Turma vespertina:</strong> segundas, quartas e sextas-feiras, das 13h30 às 17h
              (intervalo das 15h às 15h30).
            </li>
          </ul>
        </article>

        <div className="info-highlight">
          <h3>Disciplinas trabalhadas</h3>
          <ul className="check-list">
            {disciplinas.map((item) => (
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
