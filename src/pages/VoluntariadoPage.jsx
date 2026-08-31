import Subpage from './Subpage';

export default function VoluntariadoPage() {
  return (
    <Subpage
      eyebrow="Apoie"
      title="Voluntariado"
      description="Faça parte da rede de cuidado e transformação da comunidade."
    >
      <div className="info-page">
        <article className="info-card">
          <p>
            O voluntariado é a força que torna as ações do Luz da Esperança mais presentes, acolhedoras e humanas.
            Com o apoio de pessoas que compartilham tempo, dedicação e amor ao próximo, conseguimos ampliar o atendimento,
            fortalecer projetos sociais e oferecer acolhimento real àqueles que mais precisam.
          </p>

          <p style={{ marginTop: '1rem' }}>
            Você pode colaborar em diversas frentes, como atendimento, apoio educativo, campanhas, logística, visitas,
            organização de eventos e suporte às famílias atendidas.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>Como participar</h3>
          <ul className="check-list">
            <li>Entre em contato com a equipe do Centro Espírita;</li>
            <li>Escolha a área em que deseja colaborar;</li>
            <li>Participe dos encontros, atividades e campanhas;</li>
            <li>Ajude com sua presença, disposição e solidariedade.</li>
          </ul>

          <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
            Cada gesto de cuidado transforma vidas. Sua participação faz a diferença.
          </p>
        </article>
      </div>
    </Subpage>
  );
}
