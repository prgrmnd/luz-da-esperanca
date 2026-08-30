import PageIntro from './PageIntro';

export default function ActivitiesPage() {
  return (
    <PageIntro
      eyebrow=""
      title="Atividades"
      description=""
    >
      <div className="treatment-content">
        <section className="treatment-block">
          <h3>Reforço de Luz</h3>
          <p>
            Programa de reforço escolar gratuito para 40 alunos do 2º ao 4º ano do Ensino Fundamental da rede
            pública municipal com defasagem em aprendizagem, oferecendo apoio intelectual, psicológico e
            emocional, além de acompanhamento de saúde.
          </p>
          <p>
            As turmas funcionam às segundas, quartas e sextas-feiras — manhã das 7h30 às 11h e tarde das 13h30
            às 17h —, trabalhando leitura, escrita, raciocínio matemático e temas de história, geografia e
            ciências.
          </p>
        </section>

        <section className="treatment-block">
          <h3>Evangelização Infantil Sementinha de Luz</h3>
          <p>
            Trabalho de educação moral e espiritualização voltado a crianças de 2 a 11 anos, com metodologia
            baseada nas escolas de evangelização descritas nas obras psicografadas por Francisco Cândido
            Xavier. Os planos futuros incluem berçário para crianças a partir de 0 anos.
          </p>
        </section>

        <section className="treatment-block">
          <h3>Mocidade Espírita Luiz Sérgio</h3>
          <p>
            Núcleo de acompanhamento a jovens a partir de 12 anos, com cursos, atividades práticas, oficina de
            música (violão) e recreação, manutenção de horta comunitária e estudos morais voltados ao
            desenvolvimento espiritual.
          </p>
        </section>

        <section className="treatment-block">
          <h3>Escola de Evangelização de Adultos</h3>
          <p>
            Cursos teórico-práticos de preparação doutrinária para o casamento, sustentação familiar e
            evangelização, incluindo preparação de mulheres para a maternidade, apoio a lares que cuidam de
            crianças abandonadas, orientação na educação dos filhos e encontros de confraternização entre
            casais e famílias.
          </p>
        </section>

        <section className="treatment-block">
          <h3>Sopa Fraterna Bezerra de Menezes</h3>
          <p>
            Todos os sábados, a partir das 9h, voluntários preparam e distribuem sopa fluidificada, pão e água
            às famílias assistidas pela instituição — do preparo à distribuição —, levando também uma mensagem
            espiritual de fé e acolhimento.
          </p>
        </section>

        <section className="treatment-block">
          <h3>Escola de Estudos Espíritas</h3>
          <p>
            Responsável pela formação doutrinária dos trabalhadores da Casa, com um Ciclo Introdutório de
            quatro cursos semestrais (Noções Básicas da Doutrina Espírita, Nosso Lar, Passe e Caridade, Corrente
            Magnética e Desobsessão) e um Ciclo de Especialização, em aulas semanais de 150 minutos nos
            períodos de fevereiro a junho e agosto a dezembro.
          </p>
        </section>
      </div>
    </PageIntro>
  );
}
