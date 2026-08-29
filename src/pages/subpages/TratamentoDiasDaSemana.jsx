import { useState } from 'react';

const weekDays = [
  {
    id: 'segunda',
    day: 'Segunda-feira',
    focus: 'Triagem e Encaminhamento',
    quote:
      '“Um templo espírita, revivendo o Cristianismo, é um lar de solidariedade humana, em que os irmãos mais fortes são apoio aos mais fracos e em que os mais felizes são trazidos ao amparo dos que gemem sob o infortúnio.” (Emmanuel)',
    summary:
      'A segunda-feira é o dia dedicado à Triagem. As pessoas que buscam o tratamento espiritual e/ou adaptação às atividades da Casa são recebidas, orientadas e encaminhadas por meio de uma conversa fraterna. Esta conversa é totalmente sigilosa e busca dar orientações de acordo com a necessidade de cada um, conforme os ensinos de Jesus.',
    activities: [
      'Conversa Fraterna: escuta e orientação sigilosa.',
      'Esclarecimento: explicações sobre o Tratamento Espiritual e comentários de O Evangelho segundo o Espiritismo.',
      'Passe Magnético: recebimento de auxílio magnético.',
    ],
    notice:
      'Após a triagem, os pacientes são encaminhados para uma sequência de três semanas de tratamento. Ao final desse período, devem retornar à Triagem para alta ou para uma nova sequência de tratamento.',
  },
  {
    id: 'terca',
    day: 'Terça-feira',
    focus: 'Reunião Pública e Esclarecimento',
    quote:
      '“A verdade é uma estrela que ilumina a alma no caminho da fraternidade.”',
    summary:
      'A terça-feira é o dia dedicado à compreensão do Evangelho de Jesus à luz dos ensinamentos espíritas. A Reunião Pública esclarece e consola, reformula ideias e conceitos, e renova a esperança. Venha conhecer esta atividade e receber os esclarecimentos à Luz do Espiritismo!',
    activities: [
      'Palestras de Esclarecimento: são ofertadas palestras com temas atuais e de interesse geral, relacionados ao Evangelho de Jesus. As lições em torno dos problemas humanos são explicadas de maneira fácil, agradável e atraente, atendendo principalmente às necessidades de quem está em tratamento.',
      'Passe Magnético: ao fim das palestras, todos recebem o auxílio magnético através do passe.',
    ],
    notice: 'A reunião reúne orientações práticas, acolhimento e momento de reflexão espiritual para todos que desejam compreender melhor as lições cristãs.',
  },
  {
    id: 'quarta',
    day: 'Quarta-feira',
    focus: 'Evangelhoterapia e Corrente Magnética',
    quote:
      '“A mudança interior começa quando o coração reconhece a necessidade de se transformar.”',
    summary:
      'A quarta-feira destina-se ao tratamento espiritual, ao desenvolvimento mediúnico e à Escola de Médiuns. A proposta é ajudar a criatura a fazer reflexões internas, promovendo a transformação gradual para um ser melhor, mais caridoso, fraterno e altruísta. Parte do princípio de que o indivíduo precisa ter conhecimento do seu problema e objetivar sua melhoria.',
    activities: [
      'Evangelhoterapia: estudos em grupo que levam a reflexões sobre o dia a dia à luz dos Ensinos de Jesus.',
      'Passe Magnético: auxílio magnético oferecido ao final do estudo do Evangelho.',
      'Corrente Magnética: ocorre paralelamente ao estudo. É um tratamento espiritual focado no atendimento a irmãos sofredores e obsessores do plano espiritual, promovendo o desligamento de qualquer influência espiritual negativa que o paciente esteja passando no momento.',
    ],
    notice: 'Este é um momento de reflexão, assistência espiritual e fortalecimento na caminhada de evolução e amor ao próximo.',
  },
];

function IconChevron({ open }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={open ? 'icon-chevron open' : 'icon-chevron'}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function TratamentoDiasDaSemana() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="treatment-page">
      <section className="treatment-header section">
        <div className="container treatment-header__content">
          <h1>Tratamento nos Dias da Semana</h1>
          <div className="divider divider-gold" />

          <div className="treatment-banner">
            <p>
              <strong>Aviso importante:</strong> Para iniciar seu tratamento espiritual, compareça ao Centro Espírita Luz da Esperança
              às segundas-feiras, às 19h30, e inicie com a triagem. O triador fará as orientações necessárias para que seu tratamento ocorra.
            </p>
          </div>

          <div className="treatment-gratitude" aria-label="Aviso de gratuidade do tratamento">
            Todo tratamento no Centro Espírita Luz da Esperança é totalmente <strong>GRATUITO</strong>. Ninguém está autorizado a cobrar nenhum tipo de taxa. Apenas a boa vontade e a alegria de servir são a paga do trabalho cristão.
          </div>
        </div>
      </section>

      <section className="section treatment-days" aria-labelledby="tratamentos-semana-titulo">
        <div className="container">
          <div className="section-head">
            <h2 id="tratamentos-semana-titulo">Agenda semanal</h2>
            <div className="divider" />
          </div>

          <div className="accordion" role="list">
            {weekDays.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article className={`accordion-item ${isOpen ? 'open' : ''}`} key={item.id} role="listitem">
                  <button
                    type="button"
                    className="accordion-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${item.id}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <div>
                      <h3>{item.day}</h3>
                    </div>
                    <div className="accordion-meta">
                      <span>{item.focus}</span>
                      <IconChevron open={isOpen} />
                    </div>
                  </button>

                  <div id={`panel-${item.id}`} className="accordion-panel" hidden={!isOpen}>
                    <div className="accordion-panel__inner">
                      <blockquote className="treatment-quote">{item.quote}</blockquote>

                      <div className="treatment-grid">
                        <div>
                          <h4>Sobre o dia</h4>
                          <p>{item.summary}</p>
                        </div>

                        <div>
                          <h4>Atividades e roteiro</h4>
                          <ul className="treatment-list">
                            {item.activities.map((activity) => (
                              <li key={activity}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="treatment-note">
                        <strong>Aviso:</strong> {item.notice}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
