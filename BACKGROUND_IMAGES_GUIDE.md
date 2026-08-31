# 📸 Guia de Imagens de Fundo - Luz da Esperança

## 🎯 Visão Geral

O site agora suporta imagens de fundo nas seções escuras (notícias e rodapé) com filtro escuro automático para garantir legibilidade do texto.

## 📁 Estrutura de Pastas

```
luz-da-esperanca/
├── public/
│   └── images/
│       ├── noticias-bg.jpg    ← Fundo da seção de notícias
│       ├── footer-bg.jpg       ← Fundo do rodapé
│       └── README.md           ← Este arquivo
├── src/
│   ├── components/
│   │   ├── NewsSection.jsx     ← Importa backgroundImages
│   │   ├── Footer.jsx          ← Importa backgroundImages
│   │   └── Hero.jsx            ← Já tem imagens via slides
│   └── data/
│       └── siteData.js         ← Define os caminhos das imagens
```

## 🎨 Como Adicionar Imagens

### Passo 1: Preparar a Imagem

1. Escolha uma imagem de alta qualidade (mínimo 1920px de largura)
2. Otimize para web (recomendado: 300-800KB)
3. Formatos suportados: **JPG**, **PNG**, **WebP**

### Passo 2: Colocar a Imagem

Coloque as imagens na pasta `public/images/`:
- `public/images/noticias-bg.jpg`
- `public/images/footer-bg.jpg`

### Passo 3: Atualizar a Configuração

Edite `src/data/siteData.js` e verifique:

```javascript
export const backgroundImages = {
  newsSection: '/images/noticias-bg.jpg',  // ← caminho para fundo de notícias
  footer: '/images/footer-bg.jpg',          // ← caminho para fundo do rodapé
};
```

## 🖼️ Seções Disponíveis

### 1️⃣ Hero (Carrossel Principal)
- **Arquivo**: `src/components/Hero.jsx`
- **Status**: ✅ Já configurado com imagens
- **Como funciona**: Cada slide tem sua própria imagem via `backgroundImage`
- **Filtro**: Aplicado automaticamente via CSS (gradiente escuro)

### 2️⃣ Seção de Notícias
- **Arquivo**: `src/components/NewsSection.jsx`
- **Status**: ✅ Configurado para usar `backgroundImages.newsSection`
- **Filtro**: Gradiente 75-65% opacidade
- **Efeito Parallax**: Ativado (background-attachment: fixed)

### 3️⃣ Rodapé
- **Arquivo**: `src/components/Footer.jsx`
- **Status**: ✅ Configurado para usar `backgroundImages.footer`
- **Filtro**: Gradiente 80-90% opacidade
- **Efeito Parallax**: Ativado

## 🎬 Efeito de Transição

Quando o usuário passa pelas páginas:
- ✅ A imagem permanece fixa (background-attachment: fixed)
- ✅ Cria efeito parallax enquanto scrolls
- ✅ O filtro escuro mantém a legibilidade do texto
- ✅ Transição suave com CSS

## 🛠️ Personalizações

### Ajustar Intensidade do Filtro Escuro

Edite em `src/styles.css`:

**Para seção de notícias:**
```css
.news-wrap::before {
  background: linear-gradient(180deg, rgba(26,20,16,.75) 0%, rgba(26,20,16,.65) 100%);
  /* Mude os valores .75 e .65 (0-1) para ajustar opacidade */
}
```

**Para rodapé:**
```css
.site-footer::before {
  background: linear-gradient(180deg, rgba(26,20,16,.80) 0%, rgba(26,20,16,.90) 100%);
}
```

### Desabilitar Efeito Parallax

Se preferir imagem fixa (sem parallax):

```css
.news-wrap, .site-footer {
  background-attachment: scroll; /* Mude de 'fixed' para 'scroll' */
}
```

### Usar Imagem via Componente

Alternativa: passar imagem via props do componente:

```jsx
<NewsSection articles={articles} backgroundImage="/images/custom-bg.jpg" />
```

## 📊 Recomendações de Imagens

| Seção | Tema Recomendado | Tamanho | Formato |
|-------|------------------|--------|---------|
| Notícias | Comunidade, eventos, atividades | 1920x1080px | JPG/WebP |
| Rodapé | Inspiração, solidariedade, esperança | 1920x600px | JPG/WebP |

## ✅ Checklist de Implementação

- [ ] Imagem noticias-bg.jpg colocada em `public/images/`
- [ ] Imagem footer-bg.jpg colocada em `public/images/`
- [ ] Caminhos verificados em `siteData.js`
- [ ] Imagens otimizadas para web
- [ ] Testado em celular (responsivo)
- [ ] Testado efeito de scroll parallax

## 🚀 Próximos Passos

1. **Compre/Encontre imagens** de alta qualidade
2. **Otimize as imagens** com ferramentas como TinyPNG ou ImageOptim
3. **Coloque na pasta** `public/images/`
4. **Atualize** `siteData.js` se necessário
5. **Teste no navegador** com F5 ou `npm run dev`

## 📝 Notas Importantes

- ⚠️ O filtro escuro é essencial para manter o texto legível
- ⚠️ Imagens muito brilhantes podem ficar muito escuras com o filtro
- ⚠️ Use imagens com bom contraste (claro/escuro)
- ⚠️ Teste em diferentes dispositivos e navegadores

## 🔗 Arquivos Modificados

- ✏️ `src/data/siteData.js` - Adicionado `backgroundImages`
- ✏️ `src/components/NewsSection.jsx` - Adicionado style com backgroundImage
- ✏️ `src/components/Footer.jsx` - Adicionado style com backgroundImage
- ✏️ `src/styles.css` - Adicionadas classes para backgrounds com filtro

---

**Dúvidas?** Consulte os estilos CSS em `src/styles.css` nas seções `.news-wrap` e `.site-footer`
