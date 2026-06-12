/**
 * PARA ANA — Script Principal
 * Experiência romântica interativa
 */

(function () {
  'use strict';

  /* ---- Estado ---- */
  let heartClicks = 0;
  let typewriterStarted = false;
  let musicPlaying = false;

  /* ---- Elementos DOM ---- */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  const hero = $('#hero');
  const mainContent = $('#mainContent');
  const btnComecar = $('#btnComecar');
  const heroHeart = $('#heroHeart');
  const btnReviver = $('#btnReviver');
  const secretPage = $('#secretPage');
  const secretClose = $('#secretClose');
  const lightbox = $('#lightbox');
  const lightboxClose = $('#lightboxClose');
  const musicToggle = $('#musicToggle');
  const bgMusic = $('#bgMusic');
  const cursorGlow = $('#cursorGlow');

  /* ============================================
     INICIALIZAÇÃO
     ============================================ */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    setupCursor();
    setupParticles();
    setupPetals();
    setupHeroShimmer();
    populateInicio();
    populateGaleria();
    populateTimeline();
    populateMotivos();
    setupCarta();
    setupContador();
    populatePlaylist();
    setupCeu();
    populateFuturo();
    populateSecret();
    setupScrollAnimations();
    setupParallax();
    setupLightbox();
    setupHero();
    setupSecret();
    setupMusic();
    setupFinalCanvas();
    setupImageFallbacks();

    if (window.matchMedia('(max-width: 600px)').matches) {
      document.body.classList.add('no-custom-cursor');
    }
  }

  /* ============================================
     CURSOR PERSONALIZADO
     ============================================ */
  function setupCursor() {
    if (!cursorGlow || window.matchMedia('(max-width: 600px)').matches) return;

    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest('button, a, .galeria-card, .flip-card, .estrela, .hero-heart')) {
        cursorGlow.classList.add('hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest('button, a, .galeria-card, .flip-card, .estrela, .hero-heart')) {
        cursorGlow.classList.remove('hover');
      }
    });
  }

  /* ============================================
     PARTÍCULAS DE CORAÇÕES
     ============================================ */
  function setupParticles() {
    const canvas = $('#particlesCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const hearts = ['❤', '♥', '💕', '✨'];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        size: Math.random() * 14 + 8,
        speed: Math.random() * 0.8 + 0.3,
        drift: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        char: hearts[Math.floor(Math.random() * hearts.length)],
        wobble: Math.random() * Math.PI * 2,
      };
    }

    function initParticles() {
      particles = Array.from({ length: 25 }, createParticle);
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift + Math.sin(p.wobble) * 0.3;
        p.wobble += 0.02;

        if (p.y < -30) {
          Object.assign(p, createParticle());
          p.y = canvas.height + 20;
        }

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.font = p.size + 'px serif';
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    }

    resize();
    initParticles();
    animate();
    window.addEventListener('resize', resize);
  }

  /* ============================================
     PÉTALAS OCASIONAIS
     ============================================ */
  function setupPetals() {
    const container = $('#petalsContainer');
    if (!container) return;

    const petals = ['🌸', '🌺', '✿', '❀'];

    function spawnPetal() {
      const el = document.createElement('span');
      el.className = 'petal';
      el.textContent = petals[Math.floor(Math.random() * petals.length)];
      el.style.left = Math.random() * 100 + 'vw';
      el.style.animationDuration = (Math.random() * 10 + 12) + 's';
      el.style.animationDelay = Math.random() * 5 + 's';
      container.appendChild(el);

      setTimeout(() => el.remove(), 25000);
    }

    setInterval(spawnPetal, 4000);
    spawnPetal();
  }

  /* ============================================
     BRILHO DO HERO (segue o mouse)
     ============================================ */
  function setupHeroShimmer() {
    const shimmer = $('.hero-shimmer');
    if (!shimmer) return;

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      shimmer.style.setProperty('--mx', x + '%');
      shimmer.style.setProperty('--my', y + '%');
    });
  }

  /* ============================================
     TELA DE ABERTURA
     ============================================ */
  function setupHero() {
    btnComecar?.addEventListener('click', startJourney);
    btnReviver?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => location.reload(), 800);
    });
  }

  function startJourney() {
    hero.classList.add('exit');

    setTimeout(() => {
      hero.style.display = 'none';
      mainContent.classList.remove('hidden');
      mainContent.classList.add('visible');
      triggerScrollAnimations();
    }, 1200);
  }

  /* ============================================
     SISTEMA SECRETO (5 cliques no coração)
     ============================================ */
  function setupSecret() {
    heroHeart?.addEventListener('click', () => {
      heartClicks++;
      heroHeart.classList.add('clicked');
      setTimeout(() => heroHeart.classList.remove('clicked'), 500);

      if (heartClicks >= 5) {
        openSecret();
        heartClicks = 0;
      }
    });

    secretClose?.addEventListener('click', closeSecret);
    secretPage?.addEventListener('click', (e) => {
      if (e.target === secretPage || e.target.classList.contains('secret-bg')) {
        closeSecret();
      }
    });
  }

  function openSecret() {
    secretPage.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    $$('#secretList li').forEach((li, i) => {
      li.style.animationDelay = (i * 0.12) + 's';
    });
  }

  function closeSecret() {
    secretPage.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function populateSecret() {
    const list = $('#secretList');
    if (!list || typeof SONHOS_SECRETOS === 'undefined') return;

    list.innerHTML = SONHOS_SECRETOS.map(
      (sonho) => `<li>${sonho}</li>`
    ).join('');
  }

  /* ============================================
     SEÇÃO 1 — INÍCIO
     ============================================ */
  function populateInicio() {
    if (typeof TEXTO_INICIO === 'undefined') return;

    const foto = $('#inicioFoto');
    const titulo = $('#inicioTitulo');
    const subtitulo = $('#inicioSubtitulo');
    const paragrafos = $('#inicioParagrafos');

    if (foto) {
      foto.src = TEXTO_INICIO.foto;
      foto.alt = TEXTO_INICIO.fotoAlt;
    }
    if (titulo) titulo.textContent = TEXTO_INICIO.titulo;
    if (subtitulo) subtitulo.textContent = TEXTO_INICIO.subtitulo;
    if (paragrafos) {
      paragrafos.innerHTML = TEXTO_INICIO.paragrafos
        .map((p) => `<p class="fade-up">${p}</p>`)
        .join('');
    }
  }

  /* ============================================
     SEÇÃO 2 — GALERIA
     ============================================ */
  function populateGaleria() {
    const track = $('#galeriaTrack');
    if (!track || typeof GALERIA === 'undefined') return;

    track.innerHTML = GALERIA.map(
      (item, i) => `
        <article class="galeria-card" data-index="${i}" tabindex="0" role="button" aria-label="Ver foto: ${item.legenda}">
          <img src="${item.src}" alt="${item.alt}" loading="lazy">
          <div class="galeria-card-overlay">${item.legenda}</div>
        </article>
      `
    ).join('');

    track.querySelectorAll('.galeria-card').forEach((card) => {
      card.addEventListener('click', () => openLightbox(+card.dataset.index));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(+card.dataset.index);
        }
      });
    });
  }

  /* ============================================
     LIGHTBOX
     ============================================ */
  function setupLightbox() {
    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox?.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  function openLightbox(index) {
    const item = GALERIA[index];
    if (!item) return;

    $('#lightboxImg').src = item.src;
    $('#lightboxImg').alt = item.alt;
    $('#lightboxCaption').textContent = item.legenda;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }

  /* ============================================
     SEÇÃO 3 — TIMELINE
     ============================================ */
  function populateTimeline() {
    const container = $('#timelineContainer');
    if (!container || typeof TIMELINE === 'undefined') return;

    container.innerHTML = TIMELINE.map(
      (ev) => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">${ev.data}</span>
            <h3>${ev.titulo}</h3>
            <p>${ev.descricao}</p>
          </div>
          <div class="timeline-photo">
            <img src="${ev.foto}" alt="${ev.fotoAlt}" loading="lazy">
          </div>
        </div>
      `
    ).join('');
  }

  /* ============================================
     SEÇÃO 4 — MOTIVOS (cartões 3D)
     ============================================ */
  function populateMotivos() {
    const grid = $('#motivosGrid');
    if (!grid || typeof MOTIVOS_AMOR === 'undefined') return;

    grid.innerHTML = MOTIVOS_AMOR.map(
      (m) => `
        <div class="flip-card fade-up" tabindex="0" role="button" aria-label="Cartão: ${m.frente}">
          <div class="flip-card-inner">
            <div class="flip-card-front">${m.frente}</div>
            <div class="flip-card-back">${m.verso}</div>
          </div>
        </div>
      `
    ).join('');

    grid.querySelectorAll('.flip-card').forEach((card) => {
      card.addEventListener('click', () => card.classList.toggle('flipped'));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.classList.toggle('flipped');
        }
      });
    });
  }

  /* ============================================
     SEÇÃO 5 — CARTA (máquina de escrever)
     ============================================ */
  function setupCarta() {
    if (typeof CARTA_AMOR === 'undefined') return;

    $('#cartaTitulo').textContent = CARTA_AMOR.titulo;
    $('#cartaAssinatura').textContent = CARTA_AMOR.assinatura;

    const cartaSection = $('#secaoCarta');
    if (!cartaSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !typewriterStarted) {
            typewriterStarted = true;
            startTypewriter(CARTA_AMOR.texto);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(cartaSection);
  }

  function startTypewriter(text) {
    const el = $('#cartaTexto');
    if (!el) return;

    let i = 0;
    const speed = 25;

    function type() {
      if (i < text.length) {
        el.innerHTML = text.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
        i++;
        setTimeout(type, speed);
      } else {
        el.textContent = text;
      }
    }

    type();
  }

  /* ============================================
     SEÇÃO 6 — CONTADOR
     ============================================ */
  function setupContador() {
    if (typeof CONFIG === 'undefined' || !CONFIG.dataInicio) return;

    function update() {
      const now = new Date();
      const start = new Date(CONFIG.dataInicio);
      let diff = now - start;

      if (diff < 0) diff = 0;

      const secs = Math.floor(diff / 1000) % 60;
      const mins = Math.floor(diff / 60000) % 60;
      const hrs = Math.floor(diff / 3600000) % 24;
      const days = Math.floor(diff / 86400000);

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let d = now.getDate() - start.getDate();

      if (d < 0) { months--; d += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
      if (months < 0) { years--; months += 12; }

      $('#cntAnos').textContent = years;
      $('#cntMeses').textContent = months;
      $('#cntDias').textContent = days;
      $('#cntHoras').textContent = String(hrs).padStart(2, '0');
      $('#cntMinutos').textContent = String(mins).padStart(2, '0');
      $('#cntSegundos').textContent = String(secs).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  }

  /* ============================================
     SEÇÃO 7 — PLAYLIST
     ============================================ */
  function populatePlaylist() {
    const grid = $('#playlistGrid');
    if (!grid || typeof PLAYLIST === 'undefined') return;

    grid.innerHTML = PLAYLIST.map((song) => {
      let player = '';

      if (song.tipo === 'spotify') {
        player = `<iframe src="${song.src}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
      } else if (song.tipo === 'youtube') {
        player = `<iframe src="${song.src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
      } else {
        player = `<audio controls preload="none"><source src="${song.src}" type="audio/mpeg"></audio>`;
      }

      return `
        <article class="playlist-card fade-up">
          <div class="playlist-capa">
            <img src="${song.capa}" alt="${song.titulo}" loading="lazy">
          </div>
          <div class="playlist-info">
            <h3>${song.titulo}</h3>
            <p class="playlist-artista">${song.artista}</p>
            <p class="playlist-mensagem">"${song.mensagem}"</p>
            <div class="playlist-player">${player}</div>
          </div>
        </article>
      `;
    }).join('');
  }

  /* ============================================
     SEÇÃO 8 — CÉU DOS DESEJOS
     ============================================ */
  function setupCeu() {
    const bg = $('#ceuBg');
    const msgEl = $('#estrelaMensagem');
    if (!bg || typeof MENSAGENS_ESTRELAS === 'undefined') return;

    const count = 60;

    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'estrela';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.setProperty('--dur', (Math.random() * 3 + 2) + 's');
      star.style.setProperty('--op', (Math.random() * 0.5 + 0.3).toFixed(2));
      star.style.animationDelay = (Math.random() * 5) + 's';

      const size = Math.random() > 0.85 ? 4 : 3;
      star.style.width = size + 'px';
      star.style.height = size + 'px';

      star.addEventListener('click', () => {
        $$('.estrela.active').forEach((s) => s.classList.remove('active'));
        star.classList.add('active');

        const msg = MENSAGENS_ESTRELAS[Math.floor(Math.random() * MENSAGENS_ESTRELAS.length)];
        msgEl.textContent = msg;
        msgEl.classList.remove('hidden');
      });

      bg.appendChild(star);
    }
  }

  /* ============================================
     SEÇÃO 9 — FUTURO
     ============================================ */
  function populateFuturo() {
    const grid = $('#futuroGrid');
    if (!grid || typeof SONHOS_FUTURO === 'undefined') return;

    grid.innerHTML = SONHOS_FUTURO.map(
      (s) => `
        <article class="futuro-card fade-up">
          <span class="futuro-icone">${s.icone}</span>
          <h3>${s.titulo}</h3>
          <p>${s.descricao}</p>
        </article>
      `
    ).join('');
  }

  /* ============================================
     ANIMAÇÕES DE SCROLL
     ============================================ */
  function setupScrollAnimations() {
    triggerScrollAnimations();

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    $$('.timeline-item').forEach((item) => timelineObserver.observe(item));
  }

  function triggerScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    $$('.fade-up').forEach((el) => observer.observe(el));
  }

  /* ============================================
     PARALLAX
     ============================================ */
  function setupParallax() {
    const wraps = $$('[data-parallax]');
    if (!wraps.length) return;

    window.addEventListener('scroll', () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

      wraps.forEach((wrap) => {
        const speed = parseFloat(wrap.dataset.parallax) || 0.1;
        const rect = wrap.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        wrap.style.transform = `translateY(${center * speed}px)`;
      });
    }, { passive: true });
  }

  /* ============================================
     MÚSICA DE FUNDO
     ============================================ */
  function setupMusic() {
    if (!bgMusic || !CONFIG?.musicaFundo) {
      musicToggle?.style.setProperty('display', 'none');
      return;
    }

    bgMusic.src = CONFIG.musicaFundo;

    bgMusic.addEventListener('error', () => {
      musicToggle.style.display = 'none';
    });

    musicToggle?.addEventListener('click', () => {
      if (musicPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
      } else {
        bgMusic.play().catch(() => {});
        musicToggle.classList.add('playing');
      }
      musicPlaying = !musicPlaying;
    });
  }

  /* ============================================
     FINAL — CHUVA DE CORAÇÕES
     ============================================ */
  function setupFinalCanvas() {
    const canvas = $('#finalCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let hearts = [];
    let animating = false;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createHeart() {
      return {
        x: Math.random() * canvas.width,
        y: -20,
        size: Math.random() * 16 + 10,
        speed: Math.random() * 2 + 1,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.05,
        opacity: Math.random() * 0.5 + 0.3,
        color: ['#ff6b9d', '#e63946', '#ffd700', '#ffb3c9'][Math.floor(Math.random() * 4)],
      };
    }

    function drawHeart(x, y, size, rotation, color, opacity) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.beginPath();
      const s = size / 20;
      ctx.moveTo(0, s * 3);
      ctx.bezierCurveTo(-s * 5, -s * 2, -s * 10, s * 4, 0, s * 10);
      ctx.bezierCurveTo(s * 10, s * 4, s * 5, -s * 2, 0, s * 3);
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      if (!animating) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (hearts.length < 40 && Math.random() > 0.7) {
        hearts.push(createHeart());
      }

      hearts = hearts.filter((h) => {
        h.y += h.speed;
        h.rotation += h.rotSpeed;
        drawHeart(h.x, h.y, h.size, h.rotation, h.color, h.opacity);
        return h.y < canvas.height + 30;
      });

      requestAnimationFrame(animate);
    }

    const section = $('#secaoFinal');
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animating) {
            animating = true;
            resize();
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    window.addEventListener('resize', resize);
  }

  /* ============================================
     FALLBACK PARA IMAGENS AUSENTES
     ============================================ */
  function setupImageFallbacks() {
    document.querySelectorAll('img').forEach((img) => {
      img.addEventListener('load', () => img.classList.add('loaded'));
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('loaded');
      }
    });
  }

})();
