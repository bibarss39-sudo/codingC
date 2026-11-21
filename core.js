/* Core Runtime — Algorithmes & C (bibarss39) */
const APP_STORAGE = 'bibarss39_pro_v4';

const PRIMARY_NAV = [
  { href: 'index.html', ar: 'الرئيسية', fr: 'Accueil', en: 'Home' },
  { href: 'home.html', ar: 'الدروس', fr: 'Cours', en: 'Lessons' },
  { href: 'keywords.html', ar: 'قاموس C ↔ Algo', fr: 'Dico C ↔ Algo', en: 'C ↔ Algo Dict' },
  { href: 'amtla.html', ar: 'الأمثلة', fr: 'Exemples', en: 'Examples' },
  { href: 't.html', ar: 'التمارين والمختبر', fr: 'Labo & Quiz', en: 'Lab & Quiz' },
  { href: 'nn.html', ar: 'المساعد AI', fr: 'Assistant IA', en: 'AI Tutor' }
];

const MORE_NAV = [
  { href: 'asasi.html', ar: 'بوابة الأساسيات', fr: 'Portail Bases', en: 'Basics Portal' },
  { href: 'i5.html', ar: 'اختصارات Code::Blocks', fr: 'Raccourcis IDE', en: 'IDE Shortcuts' },
  { href: 'apps.html', ar: 'أدوات التطوير', fr: 'Outils & IDEs', en: 'Dev Tools' },
  { href: 'ms.html', ar: 'المصادر والمراجع', fr: 'Ressources', en: 'Resources' },
  { href: 'y.html', ar: 'الشروحات المرئية', fr: 'Vidéos', en: 'Videos' },
  { href: 'contact.html', ar: 'تواصل معنا', fr: 'Contact', en: 'Contact' }
];

const SVG_ICONS = {
  moon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  menu: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  chev: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>'
};

function getAppState() {
  const def = { lang: 'ar', theme: 'light', fontSize: 16, xp: 0, completedLessons: [], copyCount: 0, quizStats: { answered: 0, correct: 0 } };
  try {
    const raw = localStorage.getItem(APP_STORAGE);
    if (raw) return { ...def, ...JSON.parse(raw) };
  } catch (e) {}
  return def;
}

function saveAppState(st) {
  try { localStorage.setItem(APP_STORAGE, JSON.stringify(st)); } catch (e) {}
}

window.appState = getAppState();

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightC(code) {
  let s = escapeHtml(code);
  const hold = [];
  const put = (h) => { const i = hold.length; hold.push(h); return `@@H${i}@@`; };
  s = s.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, m => put(`<span class="tok-cmt">${m}</span>`));
  s = s.replace(/(&quot;[^&]*?&quot;|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')/g, m => put(`<span class="tok-str">${m}</span>`));
  s = s.replace(/(#\s*(?:include|define|ifdef|ifndef|endif)[^\n]*)/g, m => put(`<span class="tok-pre">${m}</span>`));
  s = s.replace(/\b(if|else|for|while|do|switch|case|default|break|continue|return|sizeof|typedef|struct|union|enum|const|static)\b/g, '<span class="tok-kw">$1</span>');
  s = s.replace(/\b(int|float|double|char|void|long|short|unsigned|FILE|size_t|NULL)\b/g, '<span class="tok-type">$1</span>');
  s = s.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-num">$1</span>');
  s = s.replace(/\b([a-zA-Z_]\w*)(?=\s*\()/g, '<span class="tok-fn">$1</span>');
  return s.replace(/@@H(\d+)@@/g, (_, i) => hold[Number(i)]);
}

function showToast(msg) {
  let box = document.getElementById('toastContainer');
  if (!box) {
    box = document.createElement('div');
    box.id = 'toastContainer';
    box.className = 'toast-container';
    document.body.appendChild(box);
  }
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  box.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 220); }, 2300);
}

function copyCodeText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
  window.appState.copyCount++;
  saveAppState(window.appState);
  const el = document.getElementById('copyCountBadge');
  if (el) el.textContent = window.appState.copyCount;
  showToast(window.appState.lang === 'ar' ? 'تم نسخ الكود بنجاح' : 'Code copied!');
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta);
}

function addXp(points, label) {
  window.appState.xp += points;
  saveAppState(window.appState);
  showToast(`+${points} XP — ${label}`);
}

function analyzeCCode(code) {
  const issues = [];
  const lines = code.split('\n');
  if (!/#include\s*<stdio\.h>/.test(code) && /\b(printf|scanf|fgets|fopen)\b/.test(code)) {
    issues.push({ sev: 'error', line: 1, msg: 'نسيت تضمين #include <stdio.h> لدوال الإدخال والإخراج.' });
  }
  if (!/#include\s*<stdlib\.h>/.test(code) && /\b(malloc|calloc|realloc|free)\b/.test(code)) {
    issues.push({ sev: 'error', line: 1, msg: 'نسيت تضمين #include <stdlib.h> لدوال الذاكرة الديناميكية.' });
  }
  if (!/#include\s*<string\.h>/.test(code) && /\b(strlen|strcpy|strcmp|strcat)\b/.test(code)) {
    issues.push({ sev: 'error', line: 1, msg: 'نسيت تضمين #include <string.h> لدوال السلاسل النصية.' });
  }
  let brace = 0, paren = 0;
  lines.forEach((raw, idx) => {
    const ln = raw.replace(/\/\/.*$/, '').trim();
    const num = idx + 1;
    if (!ln) return;
    for (const c of ln) {
      if (c === '{') brace++; if (c === '}') brace--;
      if (c === '(') paren++; if (c === ')') paren--;
    }
    if (/\bvoid\s+main\s*\(/.test(ln)) issues.push({ sev: 'warn', line: num, msg: 'استخدم int main() مع return 0; وفق معيار C القياسي.' });
    if (/scanf\s*\(\s*"[^"]*%[dfclsu][^"]*"\s*,\s*([a-zA-Z_]\w*)\s*\)/.test(ln)) {
      const m = ln.match(/scanf\s*\(\s*"([^"]*)"\s*,\s*([a-zA-Z_]\w*)\s*\)/);
      if (m && !m[1].includes('%s')) issues.push({ sev: 'error', line: num, msg: `نسيت علامة العنوان (&) قبل المتغير "${m[2]}" داخل scanf.` });
    }
    if (/if\s*\([^=<>!]*[^=<>!]=[^=][^)]*\)/.test(ln)) issues.push({ sev: 'warn', line: num, msg: 'استخدمت = (إسناد) داخل شرط if بدل == (مقارنة).' });
    if (/\bgets\s*\(/.test(ln)) issues.push({ sev: 'error', line: num, msg: 'الدالة gets() غير آمنة. استبدلها بـ fgets(buf, sizeof(buf), stdin).' });
    if (/\/\s*0\b/.test(ln)) issues.push({ sev: 'error', line: num, msg: 'خطر القسمة على صفر.' });
    if (/^(printf|scanf|return|int|float|double|char|free)\b/.test(ln) && !ln.endsWith(';') && !ln.endsWith('{') && !ln.endsWith('}') && !/\bmain\s*\(/.test(ln) && !/^(if|else|for|while|switch)\b/.test(ln)) {
      issues.push({ sev: 'error', line: num, msg: 'الفاصلة المنقوطة (;) ناقصة في نهاية السطر.' });
    }
  });
  if (brace !== 0) issues.push({ sev: 'error', line: lines.length, msg: `الأقواس المعقوفة { } غير متوازنة (الفرق: ${brace}).` });
  if (paren !== 0) issues.push({ sev: 'error', line: lines.length, msg: `الأقواس العادية ( ) غير متوازنة (الفرق: ${paren}).` });
  if (/\b(malloc|calloc)\s*\(/.test(code) && !/\bfree\s*\(/.test(code)) issues.push({ sev: 'warn', line: lines.length, msg: 'تحذير Memory Leak: حجزت ذاكرة بـ malloc/calloc ولم تحررها بـ free().' });
  return issues;
}

function renderSharedChrome(activePage) {
  const st = window.appState;
  document.documentElement.classList.toggle('dark', st.theme === 'dark');
  document.documentElement.style.setProperty('--user-font-size', (st.fontSize || 16) + 'px');
  document.documentElement.lang = st.lang;
  document.documentElement.dir = st.lang === 'ar' ? 'rtl' : 'ltr';

  const moreActive = MORE_NAV.some(x => x.href === activePage);
  const moreLabel = st.lang === 'ar' ? 'المزيد' : (st.lang === 'fr' ? 'Plus' : 'More');

  const header = document.getElementById('siteHeader');
  if (header) {
    header.className = 'site-header';
    header.innerHTML = `
      <div class="nav-wrap">
        <a href="index.html" class="brand">
          <img src="./favicon.svg" alt="Algorithmes &amp; C Logo" width="36" height="36" style="border-radius:10px;display:block" />
          <span>Algorithmes &amp; C</span>
        </a>
        <nav id="navLinks" class="nav-links" aria-label="Main navigation">
          ${PRIMARY_NAV.map(it => `<a href="${it.href}" class="nav-link ${it.href === activePage ? 'active' : ''}">${it[st.lang] || it.ar}</a>`).join('')}
          <div class="nav-dropdown" id="moreDropdown">
            <button type="button" id="moreBtn" class="nav-link ${moreActive ? 'active' : ''}" style="border:none;background:transparent;font-family:inherit" aria-expanded="false">
              <span>${moreLabel}</span>${SVG_ICONS.chev}
            </button>
            <div class="dropdown-menu">
              ${MORE_NAV.map(it => `<a href="${it.href}" class="dropdown-item ${it.href === activePage ? 'active' : ''}">${it[st.lang] || it.ar}</a>`).join('')}
            </div>
          </div>
        </nav>
        <div class="nav-actions">
          <div class="lang-switch">
            <button type="button" class="lang-btn ${st.lang === 'ar' ? 'active' : ''}" data-setlang="ar">عربي</button>
            <button type="button" class="lang-btn ${st.lang === 'fr' ? 'active' : ''}" data-setlang="fr">FR</button>
            <button type="button" class="lang-btn ${st.lang === 'en' ? 'active' : ''}" data-setlang="en">EN</button>
          </div>
          <div class="font-ctrl" title="حجم الخط"><button type="button" id="fontDecBtn" aria-label="تصغير الخط">A-</button><button type="button" id="fontIncBtn" aria-label="تكبير الخط">A+</button></div>
          <button type="button" id="themeBtn" class="icon-btn" aria-label="Toggle theme">${st.theme === 'dark' ? SVG_ICONS.sun : SVG_ICONS.moon}</button>
          <button type="button" id="mobileMenuBtn" class="icon-btn mobile-toggle" aria-label="Menu">${SVG_ICONS.menu}</button>
        </div>
      </div>`;

    const dd = document.getElementById('moreDropdown');
    const mb = document.getElementById('moreBtn');
    mb.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dd.classList.toggle('open');
      mb.setAttribute('aria-expanded', String(isOpen));
    });
    if (!window.__coreDocBound) { window.__coreDocBound = true; document.addEventListener('click', (ev) => {
      const d = document.getElementById('moreDropdown'); const b = document.getElementById('moreBtn');
      if (d && b) { d.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); }
      const n = document.getElementById('navLinks');
      if (n && !ev.target.closest('#navLinks') && !ev.target.closest('#mobileMenuBtn')) n.classList.remove('open');
    }); }
    if (false) document.addEventListener('click', () => {
      dd.classList.remove('open');
      mb.setAttribute('aria-expanded', 'false');
    });

    header.querySelectorAll('[data-setlang]').forEach(btn => {
      btn.addEventListener('click', () => {
        window.appState.lang = btn.dataset.setlang;
        saveAppState(window.appState);
        renderSharedChrome(activePage);
      });
    });

    document.getElementById('fontDecBtn').addEventListener('click', () => {
      window.appState.fontSize = Math.max(14, (window.appState.fontSize || 16) - 1);
      saveAppState(window.appState);
      document.documentElement.style.setProperty('--user-font-size', window.appState.fontSize + 'px');
    });
    document.getElementById('fontIncBtn').addEventListener('click', () => {
      window.appState.fontSize = Math.min(20, (window.appState.fontSize || 16) + 1);
      saveAppState(window.appState);
      document.documentElement.style.setProperty('--user-font-size', window.appState.fontSize + 'px');
    });
    document.getElementById('themeBtn').addEventListener('click', () => {
      window.appState.theme = window.appState.theme === 'dark' ? 'light' : 'dark';
      saveAppState(window.appState);
      renderSharedChrome(activePage);
    });

    const navEl = document.getElementById('navLinks');
    const mobBtn = document.getElementById('mobileMenuBtn');
    mobBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navEl.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#navLinks') && !e.target.closest('#mobileMenuBtn')) {
        navEl.classList.remove('open');
      }
    });
  }

  const footer = document.getElementById('siteFooter');
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML = `Algorithmes &amp; C — منصة تعليمية متكاملة لطلاب لغة C • <strong>bibarss39</strong> • تصميم هادئ للتركيز والفهم العميق`;
  }
}


/* Mobile Back Button, Prev/Next Page Pager & Fixed Bottom App Bar */
(function () {
  const PAGE_ORDER = [
    { href: 'index.html', title: 'الرئيسية' },
    { href: 'asasi.html', title: 'بوابة الأساسيات' },
    { href: 'home.html', title: 'الدروس التفاعلية' },
    { href: 'keywords.html', title: 'قاموس C ↔ Algo' },
    { href: 'amtla.html', title: 'مكتبة الأمثلة' },
    { href: 't.html', title: 'التمارين والمختبر' },
    { href: 'nn.html', title: 'المساعد الذكي AI' },
    { href: 'i5.html', title: 'اختصارات Code::Blocks' },
    { href: 'apps.html', title: 'أدوات التطوير' },
    { href: 'ms.html', title: 'المصادر والمراجع' },
    { href: 'y.html', title: 'الشروحات المرئية' },
    { href: 'contact.html', title: 'تواصل معنا' }
  ];

  const BOTTOM_TABS = [
    { href: 'index.html', label: 'الرئيسية', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
    { href: 'home.html', label: 'الدروس', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>' },
    { href: 'keywords.html', label: 'القاموس', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
    { href: 'amtla.html', label: 'الأمثلة', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="14" y2="13"/></svg>' },
    { href: 'nn.html', label: 'الذكاء AI', icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' }
  ];

  const origRender = window.renderSharedChrome;
  window.renderSharedChrome = function (activePage) {
    origRender(activePage);

    const main = document.querySelector('main.container');
    const idx = PAGE_ORDER.findIndex(p => p.href === activePage);

    if (main && activePage !== 'index.html' && !document.getElementById('pageBackBar')) {
      const curTitle = idx >= 0 ? PAGE_ORDER[idx].title : '';
      const bar = document.createElement('div');
      bar.id = 'pageBackBar';
      bar.className = 'page-back-bar';
      bar.innerHTML = `
        <div style="display:flex;align-items:center;gap:0.5rem">
          <button type="button" id="smartBackBtn" class="back-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            <span>رجوع</span>
          </button>
          <a href="index.html" class="back-btn" style="font-weight:600;color:var(--text-muted)">الرئيسية / <strong style="color:var(--primary)">${curTitle}</strong></a>
        </div>
        <div class="font-ctrl" style="display:inline-flex" title="تغيير حجم الخط">
          <button type="button" id="mFontDec" aria-label="تصغير الخط">A-</button>
          <button type="button" id="mFontInc" aria-label="تكبير الخط">A+</button>
        </div>`;
      main.insertBefore(bar, main.firstChild);

      document.getElementById('smartBackBtn').addEventListener('click', () => {
        if (window.history.length > 1 && document.referrer) window.history.back();
        else window.location.href = 'index.html';
      });
      document.getElementById('mFontDec').addEventListener('click', () => {
        window.appState.fontSize = Math.max(14, (window.appState.fontSize || 16) - 1);
        saveAppState(window.appState);
        document.documentElement.style.setProperty('--user-font-size', window.appState.fontSize + 'px');
      });
      document.getElementById('mFontInc').addEventListener('click', () => {
        window.appState.fontSize = Math.min(21, (window.appState.fontSize || 16) + 1);
        saveAppState(window.appState);
        document.documentElement.style.setProperty('--user-font-size', window.appState.fontSize + 'px');
      });
    }

    if (main && idx >= 0 && !document.getElementById('pagePager')) {
      const prev = idx > 0 ? PAGE_ORDER[idx - 1] : null;
      const next = idx < PAGE_ORDER.length - 1 ? PAGE_ORDER[idx + 1] : null;
      const pager = document.createElement('nav');
      pager.id = 'pagePager';
      pager.className = 'page-pager';
      pager.setAttribute('aria-label', 'التنقل بين الصفحات');
      pager.innerHTML = `
        ${prev ? `<a href="${prev.href}" class="pager-link"><span class="pager-sub">→ الصفحة السابقة</span><span class="pager-title">${prev.title}</span></a>` : '<div></div>'}
        ${next ? `<a href="${next.href}" class="pager-link" style="text-align:end"><span class="pager-sub">الصفحة التالية ←</span><span class="pager-title">${next.title}</span></a>` : '<div></div>'}
      `;
      main.appendChild(pager);
    }

    let bNav = document.getElementById('mobileBottomNav');
    if (!bNav) {
      bNav = document.createElement('nav');
      bNav.id = 'mobileBottomNav';
      bNav.className = 'mobile-bottom-nav';
      bNav.setAttribute('aria-label', 'شريط التنقل السفلي');
      document.body.appendChild(bNav);
    }
    bNav.innerHTML = BOTTOM_TABS.map(t => `
      <a href="${t.href}" class="mb-nav-item ${t.href === activePage ? 'active' : ''}">
        ${t.icon}
        <span>${t.label}</span>
      </a>`).join('');
  };
})();


/* Instant Inline-HTML Language Switcher (reads data-ar / data-fr / data-en directly on tags — 0.05ms) */
window.applyInlineLang = function () {
  const lang = (window.appState && window.appState.lang) || 'ar';
  document.querySelectorAll('[data-ar]').forEach(el => {
    const val = el.getAttribute('data-' + lang) || el.getAttribute('data-ar');
    if (val && el.textContent !== val) el.textContent = val;
  });
  document.querySelectorAll('[data-ph-ar]').forEach(el => {
    const val = el.getAttribute('data-ph-' + lang) || el.getAttribute('data-ph-ar');
    if (val && el.placeholder !== val) el.placeholder = val;
  });
  const footer = document.getElementById('siteFooter');
  if (footer) {
    if (lang === 'fr') footer.innerHTML = 'Algorithmes &amp; C — Plateforme éducative complète • <strong>bibarss39</strong>';
    else if (lang === 'en') footer.innerHTML = 'Algorithms &amp; C — Complete CS Learning Platform • <strong>bibarss39</strong>';
    else footer.innerHTML = 'Algorithmes &amp; C — منصة تعليمية متكاملة لطلاب لغة C • <strong>bibarss39</strong>';
  }
};

(function () {
  const _prev = window.renderSharedChrome;
  window.renderSharedChrome = function (activePage) {
    _prev(activePage);
    window.applyInlineLang();
  };
  document.addEventListener('DOMContentLoaded', () => window.applyInlineLang());
})();
