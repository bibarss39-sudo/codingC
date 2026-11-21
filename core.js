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
    document.addEventListener('click', () => {
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
