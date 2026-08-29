import Subpage from '../Subpage';

const procedures = [
  'Cultivar atitude mental saudável desde cedo (pensamentos positivos).',
  'Evitar deliberadamente brigas e discussões, sustentando paciência e serenidade, acima de quaisquer transtornos que sobrevenham durante o dia.',
  'Recomendamos fazer uma dieta alimentar no dia do tratamento: não comer carne, evitar frituras, comidas ácidas e apimentadas e fazer refeições leves, bem como não fazer uso de bebidas alcoólicas nem fumo.',
  'Horas antes do início do tratamento, dedique-se ao serviço da prece e da meditação em seu próprio lar.',
  '30 minutos antes do horário marcado, mantenha em casa um ambiente harmônico, preparando seu lar para receber a visita dos mentores espirituais.',
  'Antes da cirurgia, realizar uma leitura edificante, preferencialmente o Evangelho segundo o Espiritismo, não esquecendo de fazer seus pedidos em oração a Deus.',
  'Nos dias seguintes (pelo menos 3 dias), continuar a dieta alimentar e fazer dieta física, ou seja, não correr, não levantar peso, evitar subir e descer escadas.',
  'Deixar reservado uma garrafa com água para receber os medicamentos necessários para seu tratamento. Essa água será consumida durante toda a semana, aos poucos.',
  'Deitar pelo menos 15 minutos antes do horário do tratamento, que ocorre às 19:30 horas. Se possível, levantar-se somente no dia seguinte, mas permanecer pelo menos 1h e 30 min deitado.',
  'Na sexta-feira seguinte repetir o procedimento para que seja realizada a retirada dos pontos da cirurgia, portanto, passar a semana inteira vibrando positivamente e mantendo sempre a oração firme.'
];

export default function CirurgiaEspiritualPage() {
  return (
    <Subpage
      eyebrow=""
      title="Cirurgia Espiritual"
      description=""
    >
      <div className="info-page">
        <article className="info-card info-card--gold">
          <p>
            O Centro Espírita Luz da Esperança realiza uma vez por mês o <strong>tratamento à distância</strong> (Cirurgia Espiritual)
            com o objetivo de auxiliar àqueles que não podem se dirigir ao Luz da Esperança e que necessitam de um auxílio mais direto.
          </p>
          <p>
            Alguns procedimentos devem ser adotados no dia marcado ao tratamento, que ocorre sempre na última sexta-feira do mês.
          </p>
        </article>

        <div className="info-highlight">
          <h3>Procedimentos para o tratamento à distância:</h3>
          <ol className="check-list check-list--ordered">
            {procedures.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>

        <article className="info-card info-card--cream">
          <p>
            Todo tratamento é <strong>GRATUITO</strong> e ninguém está autorizado a pedir <strong>NENHUM TIPO DE CONTRIBUIÇÃO</strong>
            em nome do Luz da Esperança para realização da cirurgia.
          </p>
        </article>

        <article className="info-card info-card--green">
          <p>
            Para participar da cirurgia, basta fazer o{' '}
            <a href="/tratamentos/tratamento-a-distancia" className="inline-link">tratamento espiritual</a>.
          </p>
        </article>
      </div>
    </Subpage>
  );
}
