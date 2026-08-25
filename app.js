/* ====================================================
   DY & BISCUIT – app.js
   ==================================================== */

// ── Header Scroll ─────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile Nav Toggle ─────────────────────────────
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.classList.toggle('active');
});

nav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// ── Tabs ──────────────────────────────────────────
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const content = document.getElementById(`tab-${tab}-content`);
    if (content) {
      content.classList.add('active');
      content.style.animation = 'tabFadeIn .4s ease both';
    }
  });
});

// ── Scroll Reveal ─────────────────────────────────
(function initReveal() {
  const targets = document.querySelectorAll(
    '.home-bolo-card, .bolo-card, .sobre-inner, .stat-item, .spec-item, .section-header'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${(i % 4) * 0.08}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  targets.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
})();

// ── Active nav link on scroll ─────────────────────
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active-link',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(sec => observer.observe(sec));
})();

// ── Smooth anchor scroll ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── Inject extra styles ───────────────────────────
const style = document.createElement('style');
style.textContent = `
  @keyframes tabFadeIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .nav-link.active-link { color: var(--pink-dark); }
  .nav-link.active-link::after { transform: scaleX(1); }
`;
document.head.appendChild(style);
