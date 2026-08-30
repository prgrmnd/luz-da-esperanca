import Subpage from '../Subpage';

const cicloIntrodutorio = [
  'Noções Básicas da Doutrina Espírita.',
  'Nosso Lar.',
  'Passe e Caridade.',
  'Corrente Magnética e Desobsessão.',
];

const funcionamento = [
  'Aulas semanais de 150 minutos, sendo 30 minutos dedicados à Reforma Íntima.',
  'Períodos letivos: fevereiro a junho e agosto a dezembro.',
  '21 a 22 aulas por curso (inauguração, 14 aulas teóricas, 3 especiais, 2 a 3 práticas e avaliação).',
  'Frequência mínima de 19 aulas teóricas (máximo de 3 faltas).',
  'A porta é fechada no horário de início das aulas.',
];

export default function EscolaEstudosEspiritaPage() {
  return (
    <Subpage eyebrow="Atividades" title="Escola de Estudos Espíritas" description="">
      <div className="info-page">
        <article className="info-card info-card--gold">
          <p>
            A <strong>Escola de Estudos Espíritas</strong> é responsável pela formação doutrinária dos
            trabalhadores da Casa Espírita, por meio de estudos sistematizados da Doutrina Espírita, com cursos
            teórico-práticos que visam desenvolver conhecimentos e habilidades assistenciais.
          </p>
        </article>

        <div className="info-highlight">
          <h3>Público-alvo</h3>
          <ul className="check-list">
            <li>Neófitos e pessoas interessadas em conhecer o Espiritismo.</li>
            <li>Trabalhadores da Casa Espírita.</li>
            <li>Adultos e jovens que desejam aprofundar seus estudos espíritas.</li>
          </ul>
        </div>

        <article className="info-card info-card--cream">
          <h3>Ciclo Introdutório</h3>
          <p>Quatro cursos semestrais:</p>
          <ol className="check-list check-list--ordered">
            {cicloIntrodutorio.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>

        <article className="info-card info-card--rose">
          <h3>Ciclo de Especialização</h3>
          <p>
            Etapa voltada à formação de trabalhadores para atuação em institutos específicos da Casa, dando
            continuidade ao aprendizado iniciado no Ciclo Introdutório.
          </p>
        </article>

        <div className="info-highlight">
          <h3>Funcionamento</h3>
          <ul className="check-list">
            {funcionamento.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <article className="info-card info-card--green">
          <h3>Matrículas, local e contato</h3>
          <p>
            Matrícula disponível durante todo o ano, com período intensificado em janeiro, fevereiro e julho.
            <br />
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
