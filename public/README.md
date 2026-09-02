# Imagens de Fundo - Luz da Esperança

## Como adicionar imagens de fundo às seções escuras

As seções com fundo preto/marrom agora suportam imagens de fundo com filtro escuro sobreposto.

### Seções disponíveis:

1. **Hero (Carrossel principal)** - `.hero`
   - Localização: `Hero.jsx`
   - As imagens já estão configuradas via `backgroundImage` nos slides

2. **Notícias** - `.news-wrap`
   - Localização: `NewsSection.jsx`
   - Adicione a imagem via CSS ou inline style

3. **Rodapé** - `.site-footer`
   - Localização: `Footer.jsx`
   - Adicione a imagem via CSS ou inline style

### Como usar:

#### Opção 1: Adicionar imagem via CSS (em `styles.css`)

```css
.news-wrap {
  background-image: url('/images/noticias-bg.jpg');
}

.site-footer {
  background-image: url('/images/footer-bg.jpg');
}
```

#### Opção 2: Adicionar via componente (inline style)

```jsx
// Exemplo no NewsSection.jsx
<section className="section news-wrap" style={{ backgroundImage: "url('/images/noticias-bg.jpg')" }}>
  {/* conteúdo */}
</section>
```

### Boas práticas:

✅ Use imagens de alta qualidade (min. 1920px de largura)  
✅ Otimize para web (comprima as imagens)  
✅ Use formatos modernos: WebP, JPG ou PNG  
✅ As imagens terão filtro escuro automático (65-90% opacidade)  
✅ Use `background-attachment: fixed` para efeito parallax  

### Dicas:

- O filtro escuro é aplicado automaticamente via `::before` pseudo-elemento
- Texto branco está configurado para contrastar com o fundo
- Para mudar a intensidade do filtro, edite a opacidade em `rgba(26,20,16, .65)` nos estilos

### Arquivos para adicionar:

1. `public/images/noticias-bg.jpg` - Fundo para seção de notícias
2. `public/images/footer-bg.jpg` - Fundo para rodapé
3. `public/images/hero-bg-1.jpg`, `hero-bg-2.jpg`, etc. - Fundos adicionais para hero

---

**Nota**: Certifique-se de que as imagens são de alta qualidade e estão otimizadas para web!
