/* C-Mentor AI 2.0 — Smart Multilingual C Tutor, Code Debugger & Comparator */
(function () {
  const KB = [
    { id: 'pointer', keys: ['pointer', 'pointeur', 'مؤشر', 'مؤشرات', 'عنوان', 'adresse', '&', '*p'], title: 'المؤشرات (Pointers / Pointeurs)', desc: 'المؤشر متغير يخزن عنوان متغير آخر في الذاكرة RAM. نستخدم & لجلب العنوان و * للوصول للقيمة المخزنة في ذلك العنوان.', ex: 'int x = 10;\nint *p = &x;\n*p = 25; // تتغير قيمة x إلى 25\nprintf("x = %d\\n", x);', tips: ['هيّئ المؤشر دائماً بـ NULL إذا لم يسند له عنوان بعد.', 'تحقق من if (p != NULL) قبل استخدام *p.'], next: ['ما الفرق بين التمرير بالقيمة والمرجع؟', 'ما سبب خطأ Segmentation Fault؟', 'اشرح malloc و free'] },
    { id: 'malloc', keys: ['malloc', 'calloc', 'realloc', 'free', 'heap', 'ديناميك', 'dynamique', 'allocation', 'memory leak', 'تسرب'], title: 'الذاكرة الديناميكية (malloc / calloc / free)', desc: 'لحجز مساحة في الكومة (Heap) أثناء تشغيل البرنامج من مكتبة <stdlib.h>. حرّر دائماً الذاكرة بـ free() لمنع تسرب الذاكرة.', ex: 'int *T = malloc(n * sizeof(int));\nif (T == NULL) return 1;\n// ... استخدام T ...\nfree(T);\nT = NULL;', tips: ['calloc تصفّر الذاكرة عكس malloc.', 'اجعل المؤشر NULL بعد free().'], next: ['ما الفرق بين malloc و calloc؟', 'ما الفرق بين Stack و Heap؟'] },
    { id: 'segfault', keys: ['segmentation', 'segfault', 'crash', 'انهيار', 'core dumped', 'null pointer'], title: 'حل خطأ Segmentation Fault', desc: 'يحدث عند محاولة الوصول إلى منطقة ذاكرة غير مصرح بها.', ex: 'int x;\nscanf("%d", &x); // لا تنسَ &\nint *p = NULL;\nif (p != NULL) *p = 5;', tips: ['تأكد من وجود & داخل scanf.', 'لا تتجاوز حدود المصفوفة T[n].', 'لا تستخدم مؤشراً يساوي NULL أو بعد free().'], next: ['اشرح المؤشرات', 'اختبرني بسؤال في C'] },
    { id: 'linkedlist', keys: ['linked list', 'liste', 'chainee', 'chaînée', 'قائمة مترابطة', 'قوائم', 'node', 'عقدة', 'noeud'], title: 'القوائم المترابطة (Listes Chaînées)', desc: 'سلسلة عقد في الكومة (Heap)، كل عقدة تحوي data ومؤشر next يشير للتالية. الإضافة في البداية تستغرق O(1).', ex: 'typedef struct Node { int data; struct Node *next; } Node;\nNode* push(Node *h, int x) {\n    Node *n = malloc(sizeof(Node));\n    n->data = x; n->next = h; return n;\n}', tips: ['استخدم مؤشراً مؤقتاً curr للتنقل حتى لا تفقد head.', 'حرر جميع العقد بحلقة while.'], next: ['ما الفرق بين المصفوفة والقائمة المترابطة؟', 'اشرح المكدس Stack'] },
    { id: 'array', keys: ['array', 'tableau', 'مصفوفة', 'مصفوفات', 'جدول', 'matrice'], title: 'المصفوفات (Tableaux / Arrays)', desc: 'مجموعة عناصر من نفس النوع في خلايا متجاورة. الفهارس من 0 إلى n-1 والوصول المباشر O(1).', ex: 'int T[4] = {10, 20, 30, 40};\nfor (int i = 0; i < 4; i++) printf("%d ", T[i]);', tips: ['اسم المصفوفة T يمثل عنوان أول عنصر &T[0].', 'تجنب تجاوز الحد T[n].'], next: ['اشرح خوارزميات الفرز', 'اشرح البحث الثنائي'] },
    { id: 'string', keys: ['string', 'chaine', 'chaîne', 'سلسلة', 'نص', 'نصوص', 'strlen', 'strcmp', 'strcpy', 'fgets'], title: 'السلاسل النصية (Chaînes & string.h)', desc: 'النص في C هو مصفوفة char تنتهي بـ \\0. نستخدم strcmp للمقارنة و strcpy للنسخ و fgets للقراءة الآمنة.', ex: 'char s[40];\nfgets(s, sizeof(s), stdin);\nif (strcmp(s, "ok\\n") == 0) printf("تم!\\n");', tips: ['لا تقارن نصين بـ == أبداً.', 'تجنب gets() واستعمل fgets().'], next: ['اشرح المصفوفات', 'اشرح المؤشرات'] },
    { id: 'struct', keys: ['struct', 'structure', 'هيكل', 'هياكل', 'typedef', 'union', 'enregistrement'], title: 'الهياكل (Structures)', desc: 'تجمع حقولاً من أنواع مختلفة في سجل واحد. نستخدم (.) مع المتغير العادي و (->) مع المؤشر.', ex: 'typedef struct { char nom[25]; float moy; } Etudiant;\nEtudiant e = {"Sara", 17.5};\nprintf("%s: %.2f\\n", e.nom, e.moy);', tips: ['typedef يختصر عليك كتابة كلمة struct في كل مرة.'], next: ['ما الفرق بين struct و union؟', 'اشرح الملفات fopen'] },
    { id: 'file', keys: ['file', 'fichier', 'ملف', 'ملفات', 'fopen', 'fclose', 'fprintf', 'fscanf'], title: 'التعامل مع الملفات (Fichiers)', desc: 'نستخدم FILE* مع fopen ("r" قراءة، "w" كتابة، "a" إضافة) ثم fclose لإغلاق الملف.', ex: 'FILE *f = fopen("notes.txt", "a");\nif (f) { fprintf(f, "Ali 15.5\\n"); fclose(f); }', tips: ['تحقق دائماً من f != NULL.', 'أغلق الملف بـ fclose(f) دائماً.'], next: ['اشرح الهياكل struct'] },
    { id: 'recursion', keys: ['recursion', 'recursivite', 'récursivité', 'استدعاء ذاتي', 'factorielle', 'fibonacci'], title: 'الاستدعاء الذاتي (Récursivité)', desc: 'دالة تستدعي نفسها على مسألة أصغر حتى تصل لحالة التوقف (Base Case).', ex: 'int fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}', tips: ['حالة التوقف ضرورية لمنع Stack Overflow.'], next: ['اشرح المكدس Stack', 'ما هو Big-O؟'] },
    { id: 'sort', keys: ['sort', 'tri', 'فرز', 'ترتيب', 'bubble', 'quick', 'merge', 'bulles'], title: 'خوارزميات الفرز (Tri)', desc: 'الفرز الفقاعي/الإدراج تعقيده O(n²)، بينما Quick Sort و Merge Sort تعقيدهما O(n log n).', ex: 'for (int i=0; i<n-1; i++)\n  for (int j=0; j<n-1-i; j++)\n    if (T[j] > T[j+1]) { int t=T[j]; T[j]=T[j+1]; T[j+1]=t; }', tips: ['يمكن استخدام qsort() الجاهزة في <stdlib.h>.'], next: ['اشرح البحث الثنائي', 'ما هو Big-O؟'] },
    { id: 'search', keys: ['binary search', 'dichotomique', 'بحث ثنائي', 'recherche'], title: 'البحث الثنائي (Recherche Dichotomique)', desc: 'يبحث في مصفوفة مرتبة بتنصيف المجال في كل خطوة بتعقيد O(log n).', ex: 'int l=0, r=n-1;\nwhile (l <= r) {\n    int m = l + (r-l)/2;\n    if (T[m] == x) return m;\n    if (T[m] < x) l = m+1; else r = m-1;\n}', tips: ['يشترط أن تكون المصفوفة مرتبة أولاً.'], next: ['اشرح خوارزميات الفرز', 'ما هو Big-O؟'] },
    { id: 'bigo', keys: ['big o', 'complexite', 'complexité', 'تعقيد', 'زمني'], title: 'التعقيد الزمني (Big-O)', desc: 'يقيس نمو زمن الخوارزمية مع حجم المدخلات: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2^n).', ex: '// O(1): T[0]\n// O(log n): Binary Search\n// O(n): حلقة واحدة\n// O(n²): حلقتان متداخلتان', tips: ['نهتم دائماً بالحد الأكبر ونتجاهل الثوابت.'], next: ['اشرح البحث الثنائي'] },
    { id: 'stackqueue', keys: ['stack', 'queue', 'pile', 'file', 'مكدس', 'طابور', 'lifo', 'fifo'], title: 'المكدس (Stack) والطابور (Queue)', desc: 'المكدس LIFO (آخر من يدخل أول من يخرج)، والطابور FIFO (أول من يدخل أول من يخرج).', ex: 'stack[++top] = val; // Push O(1)\nint x = stack[top--]; // Pop O(1)', tips: ['المكدس يُستخدم في الاستدعاء الذاتي، والطابور في BFS.'], next: ['اشرح القوائم المترابطة'] },
    { id: 'loop', keys: ['loop', 'boucle', 'حلقة', 'حلقات', 'for', 'while', 'do-while'], title: 'الحلقات التكرارية (for / while / do-while)', desc: 'for لعدد معروف، while لشرط مسبق، و do-while للتنفيذ مرة واحدة على الأقل.', ex: 'for (int i = 1; i <= 5; i++) printf("%d ", i);', tips: ['break تخرج من الحلقة، و continue تتخطى الدورة الحالية.'], next: ['ما الفرق بين while و do-while؟'] },
    { id: 'io', keys: ['printf', 'scanf', 'طباعة', 'ادخال', 'إدخال', 'stdio'], title: 'الإدخال والإخراج (printf / scanf)', desc: 'تُستخدم مع <stdio.h>. تذكر دائماً & في scanf للمتغيرات العادية.', ex: 'int n;\nscanf("%d", &n);\nprintf("العدد = %d\\n", n);', tips: ['%d لـ int، %f لـ float، %lf لـ double، %c لـ char، %s للنص.'], next: ['ما سبب خطأ Segmentation Fault؟'] }
  ];

  const COMPARISONS = [
    { keys: [['malloc', 'calloc']], title: 'malloc مقابل calloc', rows: [['التهيئة', 'قيم عشوائية', 'تصفّر الذاكرة بـ 0'], ['المعاملات', 'malloc(n * sizeof(int))', 'calloc(n, sizeof(int))'], ['السرعة', 'أسرع قليلاً', 'أبطأ قليلاً بسبب التصفير']] },
    { keys: [['value', 'reference'], ['قيمة', 'مرجع'], ['قيمة', 'المرجع'], ['valeur', 'reference'], ['valeur', 'référence']], title: 'التمرير بالقيمة مقابل التمرير بالمرجع', rows: [['الممرّر', 'نسخة من القيمة', 'عنوان المتغير (&x)'], ['تعديل الأصل', 'لا يتغير الأصل', 'يتغير الأصل عبر *p'], ['الصياغة', 'void f(int x)', 'void f(int *x)']] },
    { keys: [['while', 'do-while'], ['while', 'do']], title: 'while مقابل do-while', rows: [['فحص الشرط', 'قبل الدخول للحلقة', 'بعد تنفيذ الجسم'], ['الحد الأدنى', '0 مرات', 'مرة واحدة على الأقل']] },
    { keys: [['stack', 'heap'], ['مكدس', 'كومة']], title: 'المكدس (Stack) مقابل الكومة (Heap)', rows: [['الإدارة', 'تلقائية', 'يدوية (malloc / free)'], ['السرعة', 'سريع جداً', 'أبطأ نسبياً'], ['الحجم', 'محدود', 'كبير ومرن']] },
    { keys: [['struct', 'union']], title: 'struct مقابل union', rows: [['الذاكرة', 'مساحة مستقلة لكل حقل', 'جميع الحقول تتشارك نفس المساحة'], ['الاستخدام', 'جميع الحقول معاً', 'حقل واحد في كل لحظة']] },
    { keys: [['array', 'linked'], ['مصفوفة', 'قائمة'], ['tableau', 'liste']], title: 'المصفوفة مقابل القائمة المترابطة', rows: [['الحجم', 'ثابت', 'ديناميكي'], ['الوصول [i]', 'O(1)', 'O(n)'], ['الإضافة بالبداية', 'O(n)', 'O(1)']] }
  ];

  const MINI_QUIZZES = [
    { q: 'ما ناتج: int a = 7, b = 2; printf("%d", a / b); ؟', a: '3 (لأنها قسمة صحيحة في C).' },
    { q: 'إذا كان x = 10 و int *p = &x; ثم *p = 30; فكم قيمة x؟', a: '30 لأن *p عدلت نفس الخلية في الذاكرة.' },
    { q: 'ما الخطأ في scanf("%d", n); ؟', a: 'نسيان علامة العنوان & قبل n.' },
    { q: 'كم مرة تطبع do { printf("C"); } while(0); ؟', a: 'مرة واحدة على الأقل.' }
  ];

  let lastTopic = null;
  const norm = (s) => s.toLowerCase().replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/[\u064B-\u065F]/g, '');

  window.cMentorReply = function (raw) {
    const text = raw.trim();
    const n = norm(text);

    if (/#include|int\s+main|printf\s*\(|scanf\s*\(|malloc\s*\(|for\s*\(|while\s*\(|struct\s+\w+/.test(text)) {
      const issues = analyzeCCode(text);
      let html = `<div><strong>🔍 تحليل وتصحيح كود C:</strong></div>`;
      if (!issues.length) {
        html += `<div class="callout callout-ok">✅ الكود سليم من الأخطاء النحوية والمنطقية الشائعة!</div>`;
      } else {
        html += issues.map(it => `<div class="callout ${it.sev === 'error' ? 'callout-warn' : ''}"><strong>سطر ${it.line}:</strong> ${escapeHtml(it.msg)}</div>`).join('');
      }
      return { html, next: ['ما سبب خطأ Segmentation Fault؟', 'اشرح المؤشرات'] };
    }

    if (/اختبر|سؤال|تمرين|quiz|exercice/.test(n)) {
      const q = MINI_QUIZZES[Math.floor(Math.random() * MINI_QUIZZES.length)];
      return {
        html: `<div><strong>🎯 سؤال سريع:</strong><p style="margin:6px 0">${escapeHtml(q.q)}</p><details class="callout callout-ok" style="cursor:pointer"><summary><strong>إظهار الإجابة</strong></summary><div style="margin-top:6px">${escapeHtml(q.a)}</div></details></div>`,
        next: ['اختبرني بسؤال آخر', 'ما الفرق بين malloc و calloc؟']
      };
    }

    if (/فرق|مقارن|vs|diff|بين/.test(n)) {
      for (const cmp of COMPARISONS) {
        if (cmp.keys.some(pair => pair.every(k => n.includes(norm(k))))) {
          return {
            html: `<div><strong>⚖️ ${cmp.title}</strong><table class="clean-table" style="margin-top:8px"><thead><tr><th>المقارنة</th><th>الأول</th><th>الثاني</th></tr></thead><tbody>${cmp.rows.map(r => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div>`,
            next: ['اختبرني بسؤال في C', 'اشرح المؤشرات']
          };
        }
      }
    }

    let best = null, scoreBest = 0;
    const words = n.split(/\s+/).filter(w => w.length >= 2);
    for (const item of KB) {
      let sc = 0;
      for (const k of item.keys) {
        const nk = norm(k);
        if (n.includes(nk)) sc += nk.length >= 4 ? 5 : 3;
        else if (words.some(w => nk.includes(w) && w.length >= 3)) sc += 1.5;
      }
      if (sc > scoreBest) { scoreBest = sc; best = item; }
    }

    if (best && scoreBest >= 2) {
      lastTopic = best.id;
      return {
        html: `<div><strong>${best.title}</strong><p style="margin:6px 0">${escapeHtml(best.desc)}</p><pre class="code-block">${highlightC(best.ex)}</pre><ul style="padding-inline-start:18px;font-size:0.86rem">${best.tips.map(t => `<li>${escapeHtml(t)}</li>`).join('')}</ul></div>`,
        next: best.next || []
      };
    }

    if (/^(سلام|اهلا|مرحبا|bonjour|salut|hello|hi)/.test(n)) {
      return {
        html: `أهلاً بك! 👋 أنا <strong>C-Mentor 2.0</strong>. اسألني عن أي مفهوم في لغة C والخوارزميات، اطلب مقارنة بين مفهومين، أو <strong>الصق كود C لأصححه لك فوراً</strong>.`,
        next: ['اشرح المؤشرات', 'ما الفرق بين malloc و calloc؟', 'اختبرني بسؤال في C']
      };
    }

    return {
      html: `لم أفهم السؤال بدقة، لكن يمكنك سؤالي عن: <strong>المؤشرات، malloc، القوائم المترابطة، المصفوفات، الهياكل، الملفات، الفرز، البحث الثنائي، أو لصق كود C لتصحيحه</strong>.`,
      next: ['اشرح المؤشرات', 'ما سبب خطأ Segmentation Fault؟', 'كيفاش نخدم بالقوائم المترابطة؟']
    };
  };
})();
