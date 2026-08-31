import Subpage from './Subpage';

export default function AboutPage() {
  return (
    <Subpage 
      eyebrow="Sobre o Luz" 
      title="SOBRE O LUZ" 
      description=""
    >
      <div className="info-page">
        <article className="info-card">
          <p>
            O Centro Espírita e Obras Sociais Luz da Esperança foram criadas em junho de 2013 com a finalidade de assistir materialmente, moralmente e espiritualmente a todos que a ela procurarem necessitando de ajuda!
          </p>

          <p style={{ marginTop: '1rem' }}>
            As atividades inicialmente ocorriam em uma casa alugada na R. da Bíblia, Bairro Planalto Tremembés na cidade de Parnaíba – PI, como a estrutura acabou ficando inviável para a ampliação das atividades, foi alugada uma nova casa da <strong>RUA ANHANGUERA, 4170 – BAIRRO PIAUÍ</strong> que possibilita a melhoria do serviço prestado à comunidade.
          </p>

          <p style={{ marginTop: '1rem' }}>
            O LUZ DA ESPERANÇA busca praticar a caridade moral e material, prestar serviços gratuitos e permanentes aos usuários da assistência social, por todos os meios ao seu alcance, principalmente <strong>crianças e adolescentes em situação de risco social.</strong>
          </p>

          <p style={{ marginTop: '1rem' }}>
            A meta do LUZ DA ESPERANÇA é a criação da Escola Esperança que atenderá crianças desde o berçário até as séries finais do Ensino Fundamental, além de realizar atendimentos médicos e odontológicos em clínicas que funcionarão dentro da própria escola.
          </p>

          <p style={{ marginTop: '1rem' }}>
            Atualmente atendemos cerca de 100 famílias cadastradas, desde crianças até idosos, mas o desejo é que o número de atendimentos seja bem maior.
          </p>

          <p style={{ marginTop: '1rem' }}>
            Conheça melhor a gente, faça-nos uma visita! Vem pro LUZ!
          </p>
        </article>
      </div>
    </Subpage>
  );
}