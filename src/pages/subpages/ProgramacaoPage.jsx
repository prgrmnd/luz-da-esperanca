import Subpage from '../Subpage';

export default function ProgramacaoPage() {
  return (
    <Subpage 
      eyebrow="Sobre o Luz" 
      title="Programação" 
      description="Confira os horários e dias de nossas reuniões, tratamentos e atividades sociais."
    >
      <div className="info-page">
        <article className="info-card">
          <h3>SEGUNDA-FEIRA</h3>
          <p>7:30h – Reforço de Luz</p>
          <p>13:30h – Reforço de Luz</p>
          <p>19:30h – Atendimento Fraterno (Triagem)</p>

          <h3 style={{ marginTop: '1.5rem' }}>TERÇA-FEIRA</h3>
          <p>19:30h – Reunião Pública (Palestras)</p>

          <h3 style={{ marginTop: '1.5rem' }}>QUARTA-FEIRA</h3>
          <p>7:30h – Reforço de Luz</p>
          <p>13:30h – Reforço de Luz</p>
          <p>19:30h – Tratamento Espiritual (Desobsessão)</p>

          <h3 style={{ marginTop: '1.5rem' }}>SEXTA-FEIRA</h3>
          <p>7:30h – Reforço de Luz</p>
          <p>13:30h – Reforço de Luz</p>

          <h3 style={{ marginTop: '1.5rem' }}>SÁBADO</h3>
          <p>8:00h – Obras Sociais</p>
          <p>Evangelização Infantil Sementinha de Luz</p>
          <p>Mocidade Espírita Luiz Sérgio</p>
          <p>Escola de Evangelização de Adultos</p>
          <p>Sopa Fraterna Bezerra de Meneses</p>
          <p>18:00h – Escola de Estudos Espírita</p>
        </article>
      </div>
    </Subpage>
  );
}