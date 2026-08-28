  (function(){
    "use strict";

    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive:true });

    function closeMobile(){
      navMenu.classList.remove('open');
      navOverlay.classList.remove('open');
      navToggle.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
    }

    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navOverlay.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    navOverlay.addEventListener('click', closeMobile);

    document.querySelectorAll('.nav-list a').forEach(link => {
      link.addEventListener('click', () => {
        if (link.closest('.nav-item')) {
          const item = link.closest('.nav-item');
          if (window.innerWidth <= 900) { item.classList.toggle('open'); }
          else { closeMobile(); }
        } else {
          closeMobile();
        }
      });
    });

    // CARROSSEL
    const slides = Array.from(document.querySelectorAll('.slide'));
    const dotsWrap = document.getElementById('heroDots');
    let current = 0;
    let timer = null;
    const INTERVAL = 5000;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Ir para o slide ' + (i + 1));
      dot.addEventListener('click', () => { goTo(i); restart(); });
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function goTo(index){
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (index + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    function next(){ goTo(current + 1); }
    function prev(){ goTo(current - 1); }
    function restart(){
      clearInterval(timer);
      timer = setInterval(next, INTERVAL);
    }
    function stop(){ clearInterval(timer); }

    document.getElementById('heroNext').addEventListener('click', () => { next(); restart(); });
    document.getElementById('heroPrev').addEventListener('click', () => { prev(); restart(); });

    const hero = document.getElementById('inicio');
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', restart);
    ['touchstart','keydown'].forEach(ev => hero.addEventListener(ev, stop, { passive:true }));

    restart();

    // NOTÍCIAS
    const NEWS_PER_PAGE = 3;
    const newsData = [
      { tag:'Evento',      date:'05/03/2025', title:'Programação especial de março',          desc:'Confira a programação completa das atividades e estudos da casa para este mês.', img:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=70' },
      { tag:'Campanha',    date:'28/02/2025', title:'Campanha do agasalho 2025',              desc:'Ajude a levar calor e conforto a quem mais precisa nesta estação. Participe da nossa campanha.', img:'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800&q=70' },
      { tag:'Social',      date:'15/02/2025', title:'Sopa Fraterna Bezerra de Menezes',   desc:'Toda semana distribuímos refeição e acolhimento fraterno. Venha colaborar como voluntário.', img:'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=70' },
      { tag:'Educação',    date:'10/02/2025', title:'Matrículas abertas — Reforço de Luz', desc:'Inscrições abertas para o reforço escolar. As vagas são limitadas e os serviços totalmente gratuitos.', img:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=70' },
      { tag:'Espiritual',  date:'05/02/2025', title:'Estudos e evangelização de adultos',      desc:'Novas turmas de estudo da doutrina espírita. Participe do nosso grupo de evangelização.', img:'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=800&q=70' },
      { tag:'Comunidade',  date:'20/01/2025', title:'Mocidade Espírita Luiz Sérgio',        desc:'Encontro de jovens para estudo, amizade e ações de solidariedade. Junte-se a nós.', img:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=70' }
    ];

    const newsGrid = document.getElementById('newsGrid');
    const paginationEl = document.getElementById('pagination');
    const totalPages = Math.ceil(newsData.length / NEWS_PER_PAGE);

    function renderNews(page){
      const start = (page - 1) * NEWS_PER_PAGE;
      const items = newsData.slice(start, start + NEWS_PER_PAGE);
      newsGrid.innerHTML = items.map(n => `
        <article class="news-card">
          <div class="news-media">
            <span class="news-tag">${n.tag}</span>
            <img src="${n.img}" alt="${n.title}" loading="lazy">
          </div>
          <div class="news-body">
            <div class="news-date">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              ${n.date}
            </div>
            <h3>${n.title}</h3>
            <p>${n.desc}</p>
            <a href="#noticias" class="read" style="color:var(--orange-dark);font-weight:600;font-size:.9rem">Ler notícia →</a>
          </div>
        </article>
      `).join('');
    }

    function renderPagination(activePage){
      let html = '';
      html += `<button class="page-btn nav-btn" data-page="${activePage-1}" ${activePage===1?'disabled':''} aria-label="Página anterior">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>`;

      for (let i = 1; i <= totalPages; i++){
        html += `<button class="page-btn ${i===activePage?'active':''}" data-page="${i}" aria-label="Página ${i}">${i}</button>`;
      }

      html += `<button class="page-btn nav-btn" data-page="${activePage+1}" ${activePage===totalPages?'disabled':''} aria-label="Próxima página">
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>`;

      paginationEl.innerHTML = html;

      paginationEl.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          const p = parseInt(btn.dataset.page, 10);
          if (p >= 1 && p <= totalPages){
            renderNews(p);
            renderPagination(p);
          }
        });
      });
    }

    renderNews(1);
    renderPagination(1);

    // CONTATO
    const contactForm = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formMsg.style.color = 'var(--accent-green)';
      formMsg.textContent = 'Mensagem enviada! Em breve retornaremos.';
      contactForm.reset();
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if (href.length > 1){
          const target = document.querySelector(href);
          if (target){
            e.preventDefault();
            const offset = header.offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - offset + 8;
            window.scrollTo({ top, behavior:'smooth' });
          }
        }
      });
    });
  })();
