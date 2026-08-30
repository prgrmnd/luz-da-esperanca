import Subpage from '../Subpage';

export default function DownloadsPage() {
  return (
    <Subpage 
      eyebrow="Sobre o Luz" 
      title="Downloads" 
      description="Acesse e baixe os materiais didáticos, planos de curso e conteúdos de nossas atividades."
    >
      <div className="downloads-content" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <a href="http://www.ocentroespirita.com/centroespirita/download-aulas-crianca.php" target="_blank" rel="noreferrer">
          Planos de curso e unidade para Evangelização Infantil
        </a>
        <a href="http://www.ocentroespirita.com/centroespirita/download-bsi.php" target="_blank" rel="noreferrer">
          Planos de Curso e de Unidade da Escola Espírita Bom Samaritano Infantil
        </a>
        <a href="http://www.ocentroespirita.com/centroespirita/palestras.php" target="_blank" rel="noreferrer">
          Palestras de Terça-feira (Reunião Pública)
        </a>
        <a href="http://www.ocentroespirita.com/centroespirita/downloadAulas.php" target="_blank" rel="noreferrer">
          Aulas de Segunda-feira (Triagem) e Quarta-feira (Tratamento Espiritual)
        </a>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>ESCOLA DE ESTUDOS ESPÍRITAS</h3>
        
        <a href="http://www.ocentroespirita.com/centroespirita/downloadNBDE.php" target="_blank" rel="noreferrer">
          Material didático do Curso Noções Básicas de Doutrina Espírita
        </a>
        <a href="http://www.ocentroespirita.com/centroespirita/download-nosso-lar.php" target="_blank" rel="noreferrer">
          Material didático do Curso Nosso Lar
        </a>
        <a href="http://www.ocentroespirita.com/centroespirita/download-passe.php" target="_blank" rel="noreferrer">
          Material didático do Curso Passe
        </a>
        <a href="http://www.ocentroespirita.com/centroespirita/download-corrente-magnetica.php" target="_blank" rel="noreferrer">
          Material didático do Curso Corrente Magnética
        </a>
        <a href="http://www.ocentroespirita.com/centroespirita/showFile.php?file=download/manual-aplicacao-ciclo-introdutorio.pdf" target="_blank" rel="noreferrer">
          Manual de Aplicação do Ciclo Introdutório
        </a>

        <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>OUTROS</h3>
        
        <a href="http://www.ocentroespirita.com/centroespirita/showFile.php?file=CAMPANHA_PREVENCAO_SUICIDIO" target="_blank" rel="noreferrer">
          Campanha Prevenção ao Suicídio
        </a>
        <a href="http://www.ocentroespirita.com/centroespirita/showFile.php?file=CASO_LIVRO_ACAO_REACAO-SILAS_EVITA_SUICIDIO" target="_blank" rel="noreferrer">
          Caso do Livro Ação e Reação: Silas evita um suicídio
        </a>
        <a href="http://www.ocentroespirita.com/centroespirita/showFile.php?file=DIRECAO_CORRENTE_MAGNETICA" target="_blank" rel="noreferrer">
          Aula: Direção da Corrente Magnética
        </a>
      </div>
    </Subpage>
  );
}