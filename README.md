# Luz da Esperança

Site institucional do Centro Espírita e Obras Sociais Luz da Esperança, desenvolvido com React e Vite.

A aplicação apresenta a instituição, ações sociais, notícias, localização e um formulário de contato. O design existente foi preservado durante a migração da versão HTML/CSS/JavaScript para uma estrutura de componentes React.

## Requisitos

- Node.js 18 ou superior
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
npm install
```

Esse comando instala as dependências descritas em `package.json` e cria a pasta local `node_modules/`.

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

Para testar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura do projeto

```text
.
├── index.html                 # Documento HTML de entrada do Vite
├── package.json               # Dependências e scripts
├── package-lock.json          # Versões exatas instaladas pelo npm
├── vite.config.js             # Configuração do Vite e nomes dos arquivos finais
└── src/
    ├── App.jsx                # Configuração das rotas da aplicação
    ├── main.jsx               # Inicialização do React
    ├── styles.css             # Estilos globais e responsivos
    ├── data/
    │   └── siteData.js        # Slides, notícias e opções dos menus
    ├── layouts/
    │   └── SiteLayout.jsx     # Estrutura compartilhada das páginas
    ├── pages/
    │   ├── PageIntro.jsx      # Modelo visual para páginas em construção
    │   ├── HomePage.jsx       # Landing page inicial
    │   ├── AboutPage.jsx      # Página Sobre
    │   ├── ActivitiesPage.jsx # Página Atividades
    │   ├── TreatmentsPage.jsx # Página Tratamentos
    │   ├── NewsPage.jsx       # Página Notícias
    │   └── ContactPage.jsx    # Página Contato
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
        └── SectionHeader.jsx  # Cabeçalho reutilizável de seção
```

## Organização dos componentes

- `App.jsx` configura as rotas e associa cada URL à sua página.
- `SiteLayout.jsx` mantém a estrutura comum, com cabeçalho, conteúdo e rodapé.
- `HomePage.jsx` compõe a landing page atual usando as seções da pasta `components/`.
- Os demais arquivos em `pages/` são pontos de extensão para as telas do menu que ainda receberão conteúdo.
- `Header.jsx` controla o menu mobile e os dropdowns de Sobre, Atividades e Tratamentos.
- `Hero.jsx` controla o slide ativo, navegação manual e troca automática a cada cinco segundos.
- `NewsSection.jsx` controla a paginação e usa `NewsCard.jsx` para renderizar cada notícia.
- `ContactForm.jsx` gerencia o estado da mensagem de confirmação após o envio.
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

Para criar uma nova página, adicione um arquivo em `src/pages/`, registre uma nova `Route` em [src/App.jsx](src/App.jsx) e inclua o link correspondente no menu ou no rodapé.

## Como alterar o conteúdo

### Slides, notícias e menus

Edite [src/data/siteData.js](src/data/siteData.js):

- `slides`: título, descrição, botão, destino e imagem do carrossel.
- `news`: categoria, data, título, descrição e imagem de cada notícia.
- `menuGroups`: grupos e itens dos dropdowns do cabeçalho.

As imagens atuais usam URLs externas do Unsplash. Para usar imagens locais, adicione os arquivos em `src/assets/` e importe-os no arquivo de dados.

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

O formulário atualmente funciona apenas no frontend. Ao enviar os campos válidos, ele exibe uma confirmação e limpa os dados digitados. Nenhuma mensagem é enviada para um servidor ou e-mail ainda.

Para conectar um backend, substitua o handler de envio em `src/components/ContactForm.jsx` por uma chamada `fetch` para a API escolhida. A mensagem de sucesso e os estados de erro devem continuar acessíveis com `role="status"` e `aria-live`.

## Dependências e configuração

- `react`: biblioteca de interface.
- `react-dom`: montagem da aplicação no DOM.
- `react-router-dom`: rotas e navegação entre páginas.
- `vite`: servidor de desenvolvimento e build.
- `@vitejs/plugin-react`: suporte do Vite para JSX e React.

O arquivo `vite.config.js` define nomes estáveis para os arquivos finais:

```text
dist/assets/index.js
dist/assets/styles.css
```

A pasta `dist/` é criada pelo build e está no `.gitignore`. A pasta `node_modules/` também não deve ser versionada.

## Checklist antes de publicar

1. Execute `npm install` para garantir que as dependências estão disponíveis.
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
