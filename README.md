# Luz da Esperança

Site institucional do Centro Espírita e Obras Sociais Luz da Esperança, desenvolvido com React e Vite.

A aplicação apresenta a instituição, ações sociais, notícias, localização e um formulário de contato. O design existente foi preservado durante a migração da versão HTML/CSS/JavaScript para uma estrutura de componentes React.

## Requisitos

- Node.js 20.19 ou superior (ou 22.12 ou superior)
- npm 9 ou superior
- Navegador moderno com suporte a JavaScript

Confira as versões instaladas:

```bash
node --version
npm --version
```

## Instalação

Na raiz do projeto, execute:

```bash
npm ci
```

Esse comando instala as versões exatas registradas em `package-lock.json` e cria a pasta local `node_modules/`.

## Desenvolvimento

Inicie o servidor local com:

```bash
npm run dev
```

O Vite exibirá a URL disponível, normalmente:

```text
http://localhost:5173/
```

O servidor atualiza a página automaticamente quando os arquivos-fonte são alterados.

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com atualização automática. |
| `npm run build` | Gera a versão otimizada para produção em `dist/`. |
| `npm run preview` | Serve localmente a versão já gerada em `dist/`. |
| `npm test` | Executa os testes automatizados disponíveis. |

Para testar a versão de produção:

```bash
npm run build
npm run preview
```

## Integração com a API do WordPress

As notícias são carregadas pela API REST do WordPress. Por padrão, a aplicação espera o WordPress em `/noticias`, usando endpoints como `/noticias/wp-json/wp/v2/posts`. O domínio atual é detectado automaticamente.

Se o WordPress estiver instalado em outro caminho, configure `VITE_WORDPRESS_URL` antes de gerar a versão de produção. Por exemplo, para uma instalação na raiz do domínio, use `VITE_WORDPRESS_URL=/`; para uma instalação em `/blog`, use `VITE_WORDPRESS_URL=/blog`. Essa variável pode ser definida em um arquivo `.env` local ou nas variáveis de ambiente usadas durante o build na hospedagem. Depois de alterá-la, gere e publique o build novamente.

Se o WordPress estiver em outro domínio, informe a URL completa em `VITE_WORDPRESS_URL` e habilite CORS nesse domínio para permitir requisições originadas pelo site.

As variáveis de build ficam no arquivo local `.env`, criado a partir de `.env.example`. O `.env` não deve ser versionado. O Vite incorpora os valores `VITE_*` no JavaScript gerado; nunca coloque senhas ou segredos privados nessas variáveis.

## Envio do formulário de contato

O formulário envia as mensagens para um endpoint do WordPress, que chama a API do Resend. Não é necessário contratar e-mail SMTP na Hostinger. Para configurá-lo:

1. Instale o plugin `wordpress/luz-contact.zip` e configure a chave Resend em **Configurações → Contato Luz**. Use o domínio verificado como remetente e **diretoria@luzdaesperanca.org** como destinatário.
2. Configure `VITE_WORDPRESS_URL` com o caminho da instalação do WordPress. Não coloque a chave Resend no `.env` do React.
3. Gere um novo build com `npm run build` e publique o conteúdo atualizado de `dist/`.

Consulte [as instruções completas de instalação](wordpress/INSTALACAO.md). A chave fica no servidor; o endereço do visitante é usado para respostas. O destinatário pode ser alterado no painel do WordPress. O Resend processa as mensagens, e seus limites gratuitos devem ser acompanhados no painel.

## Estrutura do projeto

```text
.
├── index.html                 # Documento HTML de entrada do Vite
├── package.json               # Dependências e scripts
├── package-lock.json          # Versões exatas instaladas pelo npm
├── vite.config.js             # Configuração do Vite
├── .env.example               # Modelo de configuração local
├── public/
│   ├── favicon.png
│   └── images/
│       └── activities/        # Ilustrações das atividades
└── src/
    ├── App.jsx                # Configuração das rotas da aplicação
    ├── main.jsx               # Inicialização do React
    ├── styles.css             # Estilos globais e responsivos
    ├── data/
    │   ├── newsApi.js         # Consulta e normalização de notícias WordPress
    │   └── siteData.js        # Slides, menus, fundos e notícias reserva
    ├── services/
    │   ├── contactService.js  # Envio do formulário pelo Web3Forms
    │   └── wordpressApi.js    # Origem configurável da API WordPress
    ├── layouts/
    │   └── SiteLayout.jsx     # Estrutura compartilhada das páginas
    ├── pages/
    │   ├── PageIntro.jsx      # Modelo visual para páginas em construção
    │   ├── HomePage.jsx       # Landing page inicial
    │   ├── AboutPage.jsx      # Página Sobre
    │   ├── ActivitiesPage.jsx # Página Atividades
    │   ├── TreatmentsPage.jsx # Página Tratamentos
    │   ├── NewsPage.jsx       # Página Notícias
    │   ├── ContactPage.jsx    # Página Contato
    │   ├── Subpage.jsx        # Modelo compartilhado das subpáginas
    │   └── subpages/
    │       ├── ProgramacaoPage.jsx
    │       ├── CampanhasPage.jsx
    │       ├── DownloadsPage.jsx
    │       ├── ReforcoDeLuzPage.jsx
    │       ├── EvangelizacaoInfantilPage.jsx
    │       ├── MocidadeEspiritaPage.jsx
    │       ├── EscolaEvangelizacaoAdultosPage.jsx
    │       ├── SopaFraternaPage.jsx
    │       ├── EscolaEstudosEspiritaPage.jsx
    │       ├── TratamentoSegundaPage.jsx
    │       ├── TratamentoTercaPage.jsx
    │       ├── TratamentoQuartaPage.jsx
    │       ├── CirurgiaEspiritualPage.jsx
    │       └── TratamentoDistanciaPage.jsx
    └── components/
        ├── AboutSection.jsx   # Sobre a instituição e chamada para ajuda
        ├── Arrow.jsx          # Ícone reutilizável de navegação
        ├── ContactForm.jsx    # Formulário de contato
        ├── Footer.jsx         # Rodapé e links rápidos
        ├── Header.jsx         # Cabeçalho, navegação e dropdowns
        ├── Hero.jsx           # Carrossel principal
        ├── LocationSection.jsx# Mapa e endereço
        ├── NewsCard.jsx       # Card individual de notícia
        ├── NewsSection.jsx    # Lista paginada de notícias
        └── SectionHeader.jsx # Cabeçalho reutilizável de seção
```

## Organização dos componentes

- `App.jsx` configura as rotas e associa cada URL à sua página.
- `SiteLayout.jsx` mantém a estrutura comum, com cabeçalho, conteúdo e rodapé.
- `HomePage.jsx` compõe a landing page atual usando as seções da pasta `components/`.
- Os arquivos em `pages/` representam as páginas principais e os arquivos em `pages/subpages/` representam cada item dos dropdowns.
- `Header.jsx` controla o menu mobile e os dropdowns de Sobre, Atividades e Tratamentos.
- `Hero.jsx` controla o slide ativo, navegação manual e troca automática a cada cinco segundos.
- `NewsSection.jsx` controla a paginação e usa `NewsCard.jsx` para renderizar cada notícia.
- `ContactForm.jsx` gerencia validação, envio e retorno acessível do Web3Forms.
- `SectionHeader.jsx` evita repetição do padrão de título, eyebrow e divisor.
- `Arrow.jsx` fornece o ícone usado em botões, links e paginação.

Cada componente deve permanecer focado em uma responsabilidade. Dados reutilizados devem ficar em `src/data/`, páginas em `src/pages/`, estruturas compartilhadas em `src/layouts/` e elementos reutilizáveis em `src/components/`.

## Rotas disponíveis

| Rota | Página | Estado |
| --- | --- | --- |
| `/` | Home | Landing page funcional |
| `/sobre` | Sobre o Luz | Estrutura inicial |
| `/atividades` | Atividades | Estrutura inicial |
| `/tratamentos` | Tratamentos | Estrutura inicial |
| `/noticias` | Notícias | Lista paginada reutilizada |
| `/contato` | Contato | Formulário reutilizado |
| `/sobre/programacao` | Programação | Estrutura inicial |
| `/sobre/campanhas` | Campanhas | Estrutura inicial |
| `/sobre/downloads` | Downloads | Estrutura inicial |
| `/atividades/reforco-de-luz` | Reforço de Luz | Estrutura inicial |
| `/atividades/evangelizacao-infantil-sementinha-de-luz` | Evangelização Infantil Sementinha de Luz | Estrutura inicial |
| `/atividades/mocidade-espirita-luiz-sergio` | Mocidade Espírita Luiz Sérgio | Estrutura inicial |
| `/atividades/escola-de-evangelizacao-de-adultos` | Escola de Evangelização de Adultos | Estrutura inicial |
| `/atividades/sopa-fraterna-bezerra-de-menezes` | Sopa Fraterna Bezerra de Menezes | Estrutura inicial |
| `/atividades/escola-de-estudos-espiritas` | Escola de Estudos Espíritas | Estrutura inicial |
| `/tratamentos/segunda-feira` | Tratamento Segunda-Feira | Estrutura inicial |
| `/tratamentos/terca-feira` | Tratamento Terça-Feira | Estrutura inicial |
| `/tratamentos/quarta-feira` | Tratamento Quarta-Feira | Estrutura inicial |
| `/tratamentos/cirurgia-espiritual` | Cirurgia Espiritual | Estrutura inicial |
| `/tratamentos/tratamento-a-distancia` | Tratamento a Distância | Estrutura inicial |

Para criar uma nova página principal, adicione um arquivo em `src/pages/`, registre uma nova `Route` em [src/App.jsx](src/App.jsx) e inclua o link correspondente no menu ou no rodapé. Para uma nova subpágina, adicione um arquivo nomeado em `src/pages/subpages/`, reutilize `Subpage.jsx`, registre sua rota em `App.jsx` e atualize o item correspondente em `src/data/siteData.js`.

As URLs usam letras minúsculas, sem acentos e com palavras separadas por hífen. Os títulos exibidos na interface preservam a nomenclatura correta e os acentos do conteúdo editorial.

## Como alterar o conteúdo

### Slides, notícias e menus

Edite [src/data/siteData.js](src/data/siteData.js):

- `slides`: título, descrição, botão, destino e imagem do carrossel.
- `news`: notícias locais de reserva, exibidas se a API WordPress estiver indisponível.
- `menuGroups`: grupos e itens dos dropdowns do cabeçalho.

As imagens dos slides usam arquivos de `public/images/`; as ilustrações das atividades ficam em `public/images/activities/`. Para adicionar arquivos servidos estaticamente, coloque-os em `public/` e referencie-os a partir da raiz (por exemplo, `/images/nova-imagem.png`).

### Seções da página

Para modificar estrutura ou conteúdo fixo, edite o componente correspondente em `src/components/` ou na página em `src/pages/`. Novas seções da Home devem ser criadas como componentes próprios e adicionadas em [src/pages/HomePage.jsx](src/pages/HomePage.jsx). Páginas completas devem ser adicionadas em `src/pages/`, sem concentrar sua marcação em `App.jsx`.

### Estilos

Os estilos globais ficam em [src/styles.css](src/styles.css). As classes existentes organizam:

- variáveis de cores e tipografia;
- cabeçalho e dropdowns;
- carrossel;
- seções institucionais;
- cards e paginação de notícias;
- mapa;
- formulário e rodapé;
- breakpoints responsivos para 1024px, 900px e 640px.

Evite estilos inline. Quando uma regra for específica de um componente, adicione-a no CSS global usando uma classe sem alterar classes de outros blocos.

## Formulário de contato

O formulário encaminha as mensagens pelo WordPress e Resend. Instale e configure o plugin de contato; consulte a seção [Envio do formulário de contato](#envio-do-formulário-de-contato).

## Dependências e configuração

- `react`: biblioteca de interface.
- `react-dom`: montagem da aplicação no DOM.
- `react-router-dom`: rotas e navegação entre páginas.
- `vite`: servidor de desenvolvimento e build.
- `@vitejs/plugin-react`: suporte do Vite para JSX e React.

O Vite gera arquivos com nomes hash em `dist/assets/` para evitar cache de versões antigas. Publique o conteúdo completo de `dist/`, incluindo os arquivos públicos e o `.htaccess` da pasta `public/`. `dist/` e `node_modules/` são artefatos locais ignorados pelo Git; gere o build novamente a partir do código-fonte e das variáveis configuradas no ambiente de publicação.

## Checklist antes de publicar

1. Execute `npm ci` para instalar as versões travadas.
2. Execute `npm run build` e confirme que o build termina sem erros.
3. Execute `npm run preview` e revise desktop e mobile.
4. Teste menu mobile, dropdowns, carrossel, paginação, links internos e formulário.
5. Confirme que imagens externas, mapa e links de contato carregam corretamente.
6. Publique o conteúdo da pasta `dist/` no serviço de hospedagem escolhido.

Como a aplicação usa `BrowserRouter`, configure a hospedagem para servir `index.html` como fallback das rotas que não correspondem a um arquivo físico. Essa configuração é necessária para acessar diretamente URLs como `/sobre` e `/atividades` sem receber erro 404.

## Acessibilidade e manutenção

- Preserve textos alternativos (`alt`) nas imagens.
- Mantenha `aria-label` nos controles que usam apenas ícones.
- Não remova o link de salto para o conteúdo principal.
- Mantenha o HTML semântico com `header`, `main`, `section`, `article`, `nav` e `footer`.
- Verifique o layout em telas pequenas após alterações em textos ou componentes.

## Controle de versão

Não versione os diretórios gerados `node_modules/` e `dist/`. O arquivo `package-lock.json` deve ser versionado para que toda a equipe instale as mesmas versões das dependências.
