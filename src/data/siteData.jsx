export const menuGroups = [
  {
    label: 'Sobre',
    target: '/sobre',
    links: [
      ['Nossa história', '/sobre'],
      ['Atividades', '/atividades'],
      ['Contato', '/contato'],
    ],
  },
  {
    label: 'Atividades',
    target: '/atividades',
    links: [
      ['Programa', '/sobre/programacao'],
      ['Tratamentos', '/tratamentos'],
      ['Eventos', '/atividades'],
    ],
  },
  {
    label: 'Apoie',
    target: '/doar',
    links: [
      ['Quero Ajudar', '/quero-ajudar'],
      ['Voluntariado', '/voluntariado'],
      ['Campanhas', '/sobre/campanhas'],
    ],
  },
];

export const slides = [
  {
    kicker: 'Luz da Esperança',
    title: 'A paz que acolhe e transforma vidas.',
    text: 'Conectando fé, acolhimento e cuidado em cada passo da comunidade.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    target: '/sobre',
    action: 'Conheça mais',
  },
  {
    kicker: 'Atividades',
    title: 'Espaços de estudo, apoio e convivência.',
    text: 'Acompanhe encontros, grupos e programas pensados para fortalecer a vida em comunidade.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    target: '/atividades',
    action: 'Ver atividades',
  },
  {
    kicker: 'Apoie',
    title: 'Sua ajuda abre portas para quem precisa.',
    text: 'Participe de iniciativas de cuidado, alimento, acolhimento e transformação social.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    target: '/quero-ajudar',
    action: 'Quero ajudar',
  },
];

export const news = [
  {
    title: 'Encontro de acolhimento fortalece a rede de cuidado comunitário',
    description: 'Participantes compartilharam experiências, mensagens de esperança e ações de apoio.',
    date: '31/08/2026',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    tag: 'Comunidadede',
  },
  {
    title: 'Programa de estudo abre novas perspectivas para jovens e adultos',
    description: 'Ações de educação e reflexão foram organizadas para incentivar crescimento pessoal e coletivo.',
    date: '18/08/2026',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    tag: 'Educação',
  },
  {
    title: 'Campanha de solidariedade reúne apoio para famílias em situação de vulnerabilidade',
    description: 'A iniciativa mobiliza voluntários e doações para ampliar o atendimento e o cuidado.',
    date: '04/08/2026',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    tag: 'Solidariedade',
  },
];
