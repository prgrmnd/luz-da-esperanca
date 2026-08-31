import Subpage from '../Subpage';

export default function CampanhaPage() {
  return (
    <Subpage 
      eyebrow="Sobre o Luz" 
      title="Campanhas" 
      description="Conheça nossas ações e campanhas de conscientização e apoio à comunidade."
    >
      <div className="info-page">
        {/* Bloco 1: E A VIDA CONTINUA */}
        <article className="info-card">
          <h3>E A VIDA CONTINUA</h3>
          
          <p>
            Ocorre sempre no <strong>dia 2 de Novembro</strong>, dia de Finados, com a participação de trabalhadores espíritas, distribuídos em várias comissões, com o objetivo de levar o consolo e o esclarecimento sobre a imortalidade da alma. Nessa data, diversas atividades espíritas são realizadas nos cemitérios.
          </p>

          <p style={{ marginTop: '1rem' }}>
            Tem a finalidade de trazer a compreensão da vida futura, apresentando a vida no mundo espiritual com a naturalidade que deve ser compreendida, diminuindo o temor da morte. No dia de finados, 2 de novembro, realizamos muitas atividades com o objetivo de divulgarmos a sobrevivência do Espírito e para tal mister é importante contar com a participação de vários trabalhadores de várias Casas Espíritas.
          </p>

          <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Objetivos:</h4>
          <ul className="check-list">
            <li>Divulgar a Doutrina Espírita nos cemitérios, levando o esclarecimento e o consolo aos que perderam entes queridos;</li>
            <li>Esclarecer que após a desencarne, retornamos ao mundo espiritual;</li>
            <li>Elucidar que a morte do corpo físico não representa a separação eterna;</li>
            <li>Estimular a prece, como ação consoladora e terapêutica..</li>
          </ul>

          <blockquote style={{ marginTop: '1.5rem', fontStyle: 'italic', borderLeft: '3px solid #3b7a57', paddingLeft: '1rem', color: '#555' }}>
            "Desencarnar é mudar de plano, como alguém que se transferisse de uma cidade para outra, aí no mundo, sem que o fato lhe altere as enfermidades ou as virtudes com a simples modificação dos aspectos exteriores." (Emmanuel, O Consolador)
          </blockquote>
        </article>

        {/* Bloco 2: CAMPANHA MADRE TERESA DE CALCUTÁ */}
        <article className="info-card" style={{ marginTop: '1.5rem' }}>
          <h3>CAMPANHA MADRE TERESA DE CALCUTÁ</h3>
          
          <p>
            Qual o primeiro de todos os direitos naturais do homem?
            <br />
            — O de viver. Por isso é que ninguém tem o de me atentar contra a vida de seu semelhante, nem de fazer o que quer que possa comprometer-lhe a existência corporal. (Allan Kardec, O Livro dos espíritos, 84.ed., perg.880).
          </p>

          <p style={{ marginTop: '1rem' }}>
            A Campanha a favor da Vida! Contra o Aborto! trás a luta em defesa da vida contra uma brutalidade ao ser humano.
            <br />
            A Campanha distribui mensagens e leva cartazes, faixas e adesivos a um local público de muita movimentação para conscientizar as pessoas sobre o ato abortivo.
          </p>

          <p style={{ marginTop: '1rem' }}>
            Palestras também são realizadas abordando aspectos morais, legais, biológicos e espirituais da prática do aborto!
          </p>

          <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
            Sejamos todos a favor da vida desde a concepção! CONTRA O ABORTO! VIDA SIM!
          </p>
        </article>
      </div>
    </Subpage>
  );
}