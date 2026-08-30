import Subpage from '../Subpage';

const comoFunciona = [
  'Aquisição dos ingredientes pelos voluntários.',
  'Preparo e cozimento da sopa fluidificada.',
  'Distribuição de sopa, pão e água às famílias assistidas.',
  'Compartilhamento de uma mensagem espiritual de fé e acolhimento.',
];

export default function SopaFraternaPage() {
  return (
    <Subpage eyebrow="Atividades" title="Sopa Fraterna Bezerra de Menezes" description="">
      <div className="info-page">
        <article className="info-card info-card--coral">
          <p>
            A <strong>Sopa Fraterna Bezerra de Menezes</strong> oferece às famílias assistidas pela instituição
            uma sopa fluidificada, pão, água e uma mensagem espiritual, inspirada no ensinamento de Jesus:
            "[...] tive fome e me destes de comer; tive sede e me destes de beber [...]".
          </p>
        </article>

        <div className="info-highlight">
          <h3>Quando acontece</h3>
          <ul className="check-list">
            <li>Todos os sábados, a partir das 9h.</li>
          </ul>
        </div>

        <div className="info-highlight">
          <h3>Como funciona</h3>
          <ul className="check-list">
            {comoFunciona.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <article className="info-card info-card--cream">
          <p>
            Trabalhadores voluntários participam de todo o processo, desde a aquisição dos ingredientes até o
            preparo, o cozimento e a distribuição da refeição. Voluntários interessados em participar são
            sempre bem-vindos.
          </p>
        </article>

        <article className="info-card info-card--green">
          <h3>Local e contato</h3>
          <p>
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
