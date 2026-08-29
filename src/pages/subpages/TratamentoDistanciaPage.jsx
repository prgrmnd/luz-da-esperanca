import Subpage from '../Subpage';

const offerings = ['Evangelhoterapia', 'Passe', 'Desobsessão', 'Água Fluidificada', 'Culto no Lar'];

const liveDays = [
  { day: '2ª Feira', items: ['Evangelho', 'Atendimento fraterno'] },
  { day: '3ª Feira', items: ['Palestras'] },
  { day: '4ª Feira', items: ['Tratamento Espiritual', 'Evangelhoterapia', 'Vibração'] },
];

const patientGuidance = [
  'Chegue nos horários marcados. As lives começam às 19:30.',
  'Cultivar atitude mental digna desde cedo.',
  'Ler o Evangelho Segundo o Espiritismo ou a Bíblia todos os dias, bem como fazer uso da oração.',
  'Evitar deliberadamente brigas e discussões, sustentando a paciência e serenidade acima de quaisquer transtornos que sobrevenham durante o dia.',
  'Evitar alimentações excessivas, bebidas alcoólicas e diminuir o uso do fumo, da carne e dos temperos excitantes.',
  'Horas antes das lives, dedique-se ao serviço da prece em seu próprio lar.',
  'Buscar superar todos os impedimentos naturais como chuvas, visitas inesperadas, doenças familiares, etc., a fim de não interromper o tratamento.',
  'Reservar um vasilhame com água para fluidificar.',
  'Desenvolver, sempre que possível, o Culto do Evangelho no Lar.'
];

export default function TratamentoDistanciaPage() {
  return (
    <Subpage
      eyebrow=""
      title="Tratamento a Distância"
      description=""
    >
      <div className="info-page">
        <article className="info-card info-card--green">
          <p>
            Devido à pandemia, o Centro Espírita Luz da Esperança oferece Tratamento Espiritual a Distância.
            Todas as sessões estão sendo através de lives e atendimentos virtuais.
          </p>
        </article>

        <div className="info-highlight">
          <h3>O que é oferecido:</h3>
          <ul className="check-list">
            {offerings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <article className="info-card info-card--cream live-days-card">
          <h3>Dias das lives:</h3>
          <div className="live-days-grid">
            {liveDays.map(({ day, items }, index) => (
              <div key={day} className={`live-day live-day--${index + 1}`}>
                <span className="live-day__label">Live</span>
                <h4>{day}</h4>
                <ul>
                  {items.map((item) => (
                    <li key={`${day}-${item}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <article className="info-card info-card--gold">
          <h3>Como participar?</h3>
          <p>
            Basta preencher o formulário neste{' '}
            <a
              href="http://bit.ly/TratamentoLuz"
              className="inline-link"
              target="_blank"
              rel="noreferrer"
            >
              http://bit.ly/TratamentoLuz
            </a>
          </p>
        </article>

        <div className="info-highlight">
          <h3>Orientações ao Paciente</h3>
          <ul className="check-list">
            {patientGuidance.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Subpage>
  );
}
