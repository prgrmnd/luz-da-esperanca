import Subpage from '../Subpage';

export default function DownloadsPage() {
  return (
    <Subpage 
      eyebrow="Sobre o Luz" 
      title="Downloads" 
      description="Acesse e baixe os materiais didáticos, planos de curso e conteúdos de nossas atividades."
    >
      <div className="info-page">
        <article className="info-card">
          <ul className="check-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/download-aulas-crianca.php" target="_blank" rel="noreferrer" className="inline-link">
                Planos de curso e unidade para Evangelização Infantil
              </a>
            </li>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/download-bsi.php" target="_blank" rel="noreferrer" className="inline-link">
                Planos de Curso e de Unidade da Escola Espírita Bom Samaritano Infantil
              </a>
            </li>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/palestras.php" target="_blank" rel="noreferrer" className="inline-link">
                Palestras de Terça-feira (Reunião Pública)
              </a>
            </li>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/downloadAulas.php" target="_blank" rel="noreferrer" className="inline-link">
                Aulas de Segunda-feira (Triagem) e Quarta-feira (Tratamento Espiritual)
              </a>
            </li>
          </ul>

          <h3 style={{ marginTop: '1.5rem' }}>ESCOLA DE ESTUDOS ESPÍRITAS</h3>
          <ul className="check-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/downloadNBDE.php" target="_blank" rel="noreferrer" className="inline-link">
                Material didático do Curso Noções Básicas de Doutrina Espírita
              </a>
            </li>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/download-nosso-lar.php" target="_blank" rel="noreferrer" className="inline-link">
                Material didático do Curso Nosso Lar
              </a>
            </li>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/download-passe.php" target="_blank" rel="noreferrer" className="inline-link">
                Material didático do Curso Passe
              </a>
            </li>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/download-corrente-magnetica.php" target="_blank" rel="noreferrer" className="inline-link">
                Material didático do Curso Corrente Magnética
              </a>
            </li>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/showFile.php?file=download/manual-aplicacao-ciclo-introdutorio.pdf" target="_blank" rel="noreferrer" className="inline-link">
                Manual de Aplicação do Ciclo Introdutório
              </a>
            </li>
          </ul>

          <h3 style={{ marginTop: '1.5rem' }}>OUTROS</h3>
          <ul className="check-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/showFile.php?file=CAMPANHA_PREVENCAO_SUICIDIO" target="_blank" rel="noreferrer" className="inline-link">
                Campanha Prevenção ao Suicídio
              </a>
            </li>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/showFile.php?file=CASO_LIVRO_ACAO_REACAO-SILAS_EVITA_SUICIDIO" target="_blank" rel="noreferrer" className="inline-link">
                Caso do Livro Ação e Reação: Silas evita um suicídio
              </a>
            </li>
            <li>
              <a href="http://www.ocentroespirita.com/centroespirita/showFile.php?file=DIRECAO_CORRENTE_MAGNETICA" target="_blank" rel="noreferrer" className="inline-link">
                Aula: Direção da Corrente Magnética
              </a>
            </li>
          </ul>
        </article>
      </div>
    </Subpage>
  );
}