import { Link } from 'react-router-dom';
import PageIntro from './PageIntro';

export default function NotFoundPage() {
  return (
    <PageIntro
      eyebrow="Erro 404"
      title="Página não encontrada"
      description="O endereço acessado não corresponde a uma página deste site."
    >
      <div className="info-page">
        <Link to="/" className="btn btn-orange btn-lg">
          Voltar para o início
        </Link>
      </div>
    </PageIntro>
  );
}
