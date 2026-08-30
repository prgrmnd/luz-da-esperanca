import PageIntro from './PageIntro';

export default function AboutPage() {
  return (
    <main className="about-page">
      <PageIntro 
        eyebrow="Sobre o Luz" 
        title="Conheça a nossa instituição" 
        description="Acompanhe nossa programação, campanhas ativas e acesse nossos materiais." 
      />

      <section className="about-section">
        <h2>PROGRAMAÇÃO</h2>
        
        <div className="schedule-group">
          <h3>SEGUNDA-FEIRA</h3>
          <p>7:30h – Reforço de Luz</p>
          <p>13:30h – Reforço de Luz</p>
          <p>19:30h – Atendimento Fraterno (Triagem)</p>

          <h3>TERÇA-FEIRA</h3>
          <p>19:30h – Reunião Pública (Palestras)</p>

          <h3>QUARTA-FEIRA</h3>
          <p>7:30h – Reforço de Luz</p>
          <p>13:30h – Reforço de Luz</p>
          <p>19:30h – Tratamento Espiritual (Desobsessão)</p>

          <h3>SEXTA-FEIRA</h3>
          <p>7:30h – Reforço de Luz</p>
          <p>13:30h – Reforço de Luz</p>

          <h3>SÁBADO</h3>
          <p>8:00h – Obras Sociais</p>
          <p>Evangelização Infantil Sementinha de Luz</p>
          <p>Mocidade Espírita Luiz Sérgio</p>
          <p>Escola de Evangelização de Adultos</p>
          <p>Sopa Fraterna Bezerra de Meneses</p>
          <p>18:00h – Escola de Estudos Espírita</p>
        </div>
      </section>

      <section className="about-section">
        <h2>CAMPANHAS</h2>
        
        <article className="campaign-card">
          <h3>E A VIDA CONTINUA</h3>
          <p>Ocorre sempre no <strong>dia 2 de Novembro</strong>, dia de Finados, com a participação de trabalhadores espíritas, distribuídos em várias comissões, com o objetivo de levar o consolo e o esclarecimento sobre a imortalidade da alma.</p>
          
          <h4>Objetivos:</h4>
          <ul>
            <li>Divulgar a Doutrina Espírita nos cemitérios, levando o esclarecimento e o consolo aos que perderam entes queridos;</li>
            <li>Esclarecer que após a desencarne, retornamos ao mundo espiritual;</li>
            <li>Elucidar que a morte do corpo físico não representa a separação eterna;</li>
            <li>Estimular a prece, como ação consoladora e terapêutica.</li>
          </ul>
        </article>
      </section>

      <section className="about-section">
        <h2>DOWNLOADS</h2>
        
        <div className="downloads-group">
          <p>Planos de curso e unidade para Evangelização Infantil</p>
          <p>Planos de Curso e de Unidade da Escola Espírita Bom Samaritano Infantil</p>
          <p>Palestras de Terça-feira (Reunião Pública)</p>
          <p>Aulas de Segunda-feira (Triagem) e Quarta-feira (Tratamento Espiritual)</p>

          <h3>ESCOLA DE ESTUDOS ESPÍRITAS</h3>
          <p>Material didático do Curso Noções Básicas de Doutrina Espírita</p>
          <p>Material didático do Curso Nosso Lar</p>
          <p>Material didático do Curso Passe</p>
          <p>Material didático do Curso Corrente Magnética</p>
          <p>Manual de Aplicação do Ciclo Introdutório</p>

          <h3>OUTROS</h3>
          <p>Campanha Prevenção ao Suicídio</p>
          <p>Caso do Livro Ação e Reação: Silas evita um suicídio</p>
        </div>
      </section>
    </main>
  );
}