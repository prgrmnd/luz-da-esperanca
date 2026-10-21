import { Link } from 'react-router-dom';
import PageIntro from './PageIntro';

export default function QueroAjudarPage() {
  return (
    <PageIntro
      eyebrow="Doações"
      title="Quero Ajudar"
      description="Sua contribuição pode transformar a vida de muitas pessoas."
    >
      <div className="info-page">
        <article className="info-card">
          <h3 style={{ marginTop: '0', marginBottom: '1rem' }}>Doações em Gêneros</h3>
          <p>
            As Obras Luz da Esperança recebem doações de roupas, alimentos, móveis, eletrodomésticos em condições de uso,
            além de itens de higiene pessoal (escova, pente, shampoo, colônia, sabonete, escova e pasta de dente,
            sandália de dedo). As doações passam por uma triagem e são direcionadas às necessidades da instituição e dos
            beneficiários. Em alguns casos, o material doado é comercializado (Bazar) e a renda é revertida para a OSLE.
          </p>

          <p style={{ marginTop: '1rem' }}>
            As entregas devem ser feitas diretamente no Setor de Doações do Instituto da Caridade, localizado na sede das Obras
            (Rua Anhanguera, 4170 – Bairro Piauí), em nosso <Link to="/sobre/programacao" className="inline-link">horário de funcionamento</Link>,
            ou coletadas em domicílio, após avaliação.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>Faça agora sua doação</h3>
          <p>
            Você também pode ajudar na manutenção das atividades das Obras Sociais Luz da Esperança e na perpetuação das
            atividades de amor e caridade. Para isso, basta depositar qualquer valor em nossa conta abaixo. Estamos em breve
            disponibilizando também a possibilidade de doação por cartão de crédito.
          </p>

          <div className="info-card" style={{ marginTop: '1rem', background: '#f7f3ee', border: '1px solid #e7dccd' }}>
            <p style={{ margin: 0 }}><strong>Conta do Banco do Brasil</strong></p>
            <p style={{ margin: '0.4rem 0 0' }}>ag. 23-X</p>
            <p style={{ margin: 0 }}>conta 45684-5</p>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <a href="https://www.paypal.com/ncp/payment/MSSR5UZ2SBSMJ" className="btn btn-orange btn-lg">Quero doar</a>
          </div>
        </article>
      </div>
    </PageIntro>
  );
}
