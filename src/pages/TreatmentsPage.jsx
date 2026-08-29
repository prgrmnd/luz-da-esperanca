import PageIntro from './PageIntro';

export default function TreatmentsPage() {
  return (
    <PageIntro
      eyebrow=""
      title="Tratamentos"
      description=""
    >
      <div className="treatment-content">
        <section className="treatment-block">
          <h3>Cirurgia Espiritual</h3>
          <p>
            A cirurgia espiritual não é uma operação convencional como a que estamos habituados nos hospitais.
            Não é utilizado nenhum objeto cortante, uma vez que se trata de uma operação fluídica realizada por médiuns
            de efeitos físicos através da imposição de mãos.
          </p>
          <p>
            As cirurgias espirituais não são realizadas no corpo físico, mas sim no perispírito, ou corpo espiritual.
            Curado o períspirito, ao passar dos dias o corpo físico vai assimilando os resultados obtidos com o tratamento
            espiritual realizado. O êxito da operação se dá conforme o merecimento espiritual e a fé de cada pessoa.
          </p>
          <p className="treatment-cta">
            <a href="/tratamentos/cirurgia-espiritual">SAIBA MAIS</a>
          </p>
        </section>

        <section className="treatment-block">
          <h3>Passes</h3>
          <p>
            É uma imposição de mãos, na qual o médium doa seu fluido, juntamente com os fluidos das equipes espirituais
            superiores. O passe promove a limpeza fluídica e transmite ao paciente os recursos fluídicos, garantindo-lhe a
            saúde e equilíbrio.
          </p>
        </section>

        <section className="treatment-block">
          <h3>Desobsessão por Corrente Magnética</h3>
          <p>
            Método de trabalho desobsessivo, que permite tratar o paciente encarnado e os desencarnados que necessitam de
            atendimento espiritual, e também auxilia na limpeza de fluidos que causam enfermidades.
          </p>
        </section>

        <section className="treatment-block">
          <h3>Água Fluidificada</h3>
          <p>
            Recurso terapêutico utilizado em larga escala em todo o planeta, pois se trata de um recurso de cura difundido por
            Jesus. No Luz da Esperança é utilizada durante o tratamento com grande sucesso.
          </p>
        </section>

        <section className="treatment-block">
          <h3>Tratamento a Distância</h3>
          <p>
            Se você tem dificuldades de vir ao Luz da Esperança, o tratamento a distância é uma opção oferecida pelo Centro
            Espírita. Entretanto, o tratamento realizado com sua presença atenderia a todas as etapas.
          </p>
          <p className="treatment-cta">
            <a href="/tratamentos/tratamento-a-distancia">CLIQUE AQUI PARA CONHECER</a>
          </p>
        </section>
      </div>
    </PageIntro>
  );
}
