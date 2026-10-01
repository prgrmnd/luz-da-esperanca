import PageIntro from './PageIntro';

const activities = [
  {
    title: 'Reforço de Luz',
    category: 'Educação',
    accent: 'var(--coral)',
    icon: '/images/activities/reforco-de-luz.png',
    description: 'Programa de reforço escolar gratuito para 40 alunos do 2º ao 4º ano do Ensino Fundamental da rede pública municipal com defasagem em aprendizagem, oferecendo apoio intelectual, psicológico e emocional, além de acompanhamento de saúde. As turmas funcionam às segundas, quartas e sextas-feiras, nos períodos da manhã e da tarde, trabalhando leitura, escrita, raciocínio matemático e temas de história, geografia e ciências.',
  },
  {
    title: 'Evangelização Infantil Sementinha de Luz',
    category: 'Infância',
    accent: 'var(--rose)',
    icon: '/images/activities/evangelizacao-infantil.png',
    description: 'Trabalho de educação moral e espiritualização voltado a crianças de 2 a 11 anos, com metodologia baseada nas escolas de evangelização descritas nas obras psicografadas por Francisco Cândido Xavier. Os planos futuros incluem berçário para crianças a partir de 0 anos.',
  },
  {
    title: 'Mocidade Espírita Luiz Sérgio',
    category: 'Juventude',
    accent: 'var(--green)',
    icon: '/images/activities/mocidade-espirita.png',
    description: 'Núcleo de acompanhamento a jovens a partir de 12 anos, com cursos, atividades práticas, oficina de música (violão) e recreação, manutenção de horta comunitária e estudos morais voltados ao desenvolvimento espiritual.',
  },
  {
    title: 'Escola de Evangelização de Adultos',
    category: 'Família',
    accent: 'var(--orange)',
    icon: '/images/activities/escola-evangelizacao-adultos.png',
    description: 'Cursos teórico-práticos de preparação doutrinária para o casamento, sustentação familiar e evangelização, incluindo preparação de mulheres para a maternidade, apoio a lares que cuidam de crianças abandonadas, orientação na educação dos filhos e encontros de confraternização entre casais e famílias.',
  },
  {
    title: 'Sopa Fraterna Bezerra de Menezes',
    category: 'Acolhimento',
    accent: 'var(--sun)',
    icon: '/images/activities/sopa-fraterna.png',
    description: 'Todos os sábados, a partir das 9h, voluntários preparam e distribuem sopa fluidificada, pão e água às famílias assistidas pela instituição, levando também uma mensagem espiritual de fé e acolhimento.',
  },
  {
    title: 'Escola de Estudos Espíritas',
    category: 'Formação',
    accent: 'var(--sky)',
    description: 'Responsável pela formação doutrinária dos trabalhadores da Casa, com um Ciclo Introdutório de quatro cursos semestrais (Noções Básicas da Doutrina Espírita, Nosso Lar, Passe e Caridade, Corrente Magnética e Desobsessão) e um Ciclo de Especialização, em aulas semanais de 150 minutos nos períodos de fevereiro a junho e agosto a dezembro.',
  },
];

export default function ActivitiesPage() {
  return (
    <PageIntro
      eyebrow="Frentes de atuação"
      title="Atividades"
      description="Ações gratuitas de educação, convivência, acolhimento e formação espiritual."
    >
      <div className="activity-grid">
        {activities.map((activity) => (
          <article className="activity-card" key={activity.title} style={{ '--activity-accent': activity.accent }}>
            <div className="activity-card-heading">
              <div className="activity-card-icon" aria-hidden="true">
                {activity.icon ? <img src={activity.icon} alt="" /> : (
                  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M24 13c-5-4-11-4-17-2v23c6-2 12-2 17 2m0-23c5-4 11-4 17-2v23c-6-2-12-2-17 2m0-23v23" />
                    <path d="M12 17c3-.7 6-.5 9 .7M36 17c-3-.7-6-.5-9 .7M12 23c3-.7 6-.5 9 .7M36 23c-3-.7-6-.5-9 .7" />
                  </svg>
                )}
              </div>
              <div className="activity-card-title">
                <span className="activity-card-category">{activity.category}</span>
                <h3>{activity.title}</h3>
              </div>
            </div>
            <p>{activity.description}</p>
          </article>
        ))}
      </div>
    </PageIntro>
  );
}
