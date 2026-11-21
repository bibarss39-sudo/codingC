window.LESSONS_DATA = [
  {
    id: 'l1', level: 1, title: 'بنية برنامج C، المتغيرات والإدخال/الإخراج', fr: 'Structure C, Variables & I/O',
    summary: 'افهم كيف يعمل أول برنامج C، كيف تُخزن المتغيرات في الذاكرة، وكيف تقرأ وتطبع القيم بدون أخطاء.',
    analogy: 'تخيّل الذاكرة (RAM) كخزانة مليئة بالصناديق. كل متغير هو "صندوق" تعطيه اسماً (مثل age) ونوعاً يحدد حجمه (int للأرقام الصحيحة، float للعشرية، char للحرف) وتضع بداخله قيمة.',
    deep: [
      'يبدأ تنفيذ أي برنامج C دائماً من الدالة <strong>int main()</strong> وينتهي بـ <strong>return 0;</strong>.',
      'مكتبة <code>#include &lt;stdio.h&gt;</code> ضرورية لتوفير دالتي الطباعة <code>printf</code> والقراءة <code>scanf</code>.',
      'أهم الأنواع: <code>int</code> (4 بايت، صحيح)، <code>float</code> (4 بايت، عشري)، <code>double</code> (8 بايت، عشري دقيق)، و <code>char</code> (1 بايت، حرف).',
      'عند القراءة بـ <code>scanf</code> يجب إعطاء الدالة <strong>عنوان الصندوق</strong> في الذاكرة باستخدام الرمز <code>&amp;</code>.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int age;\n    float moyenne = 15.75;\n    printf("أدخل عمرك: ");\n    scanf("%d", &age);\n    printf("العمر: %d | المعدل: %.2f\\n", age, moyenne);\n    return 0;\n}',
    lineByLine: [
      ['#include <stdio.h>', 'يستورد مكتبة الإدخال والإخراج القياسية حتى يتعرف المترجم على printf و scanf.'],
      ['int main() {', 'نقطة البداية الإجبارية التي يبدأ منها تشغيل البرنامج.'],
      ['int age;', 'يحجز صندوقاً في الذاكرة اسمه age لتخزين عدد صحيح.'],
      ['float moyenne = 15.75;', 'يحجز متغيراً عشرياً ويعطيه قيمة مبدئية 15.75 مباشرة.'],
      ['scanf("%d", &age);', 'ينتظر إدخال عدد صحيح من المستخدم (%d) ويضعه في عنوان المتغير (&age).'],
      ['printf("... %.2f\\n", ...);', 'يطبع القيم، و %.2f تعني طباعة رقمين فقط بعد الفاصلة، و \\n للسطر الجديد.'],
      ['return 0;', 'يُخبر نظام التشغيل أن البرنامج انتهى بنجاح دون أخطاء.']
    ],
    algo: 'Algorithme InfoEtudiant\nVariables\n    age : Entier\n    moyenne : Réel\nDébut\n    moyenne <- 15.75\n    Ecrire("أدخل عمرك:")\n    Lire(age)\n    Ecrire("العمر:", age, "المعدل:", moyenne)\nFin',
    mistakes: [
      { bad: 'scanf("%d", age);', good: 'scanf("%d", &age);', why: 'نسيان علامة العنوان (&) يجعل البرنامج ينهار فوراً.' },
      { bad: 'printf("%d", moyenne);', good: 'printf("%.2f", moyenne);', why: 'استخدام %d مع متغير float يطبع أرقاماً غريبة عشوائية.' }
    ],
    practice: {
      prompt: 'اكتب برنامجاً يقرأ عددين صحيحين a و b ثم يطبع مجموعهما وحاصل ضربهما.',
      hint: 'عرّف int a, b; ثم اقرأهما بـ scanf("%d %d", &a, &b); واطبع a+b و a*b.',
      solution: '#include <stdio.h>\nint main() {\n    int a, b;\n    scanf("%d %d", &a, &b);\n    printf("المجموع = %d | الضرب = %d\\n", a + b, a * b);\n    return 0;\n}'
    }
  },
  {
    id: 'l2', level: 1, title: 'المعاملات الحسابية والمنطقية والقسمة', fr: 'Opérateurs & Division',
    summary: 'الفرق الحاسم بين القسمة الصحيحة والعشرية، قوة باقي القسمة %، والفرق بين ++i و i++.',
    analogy: 'القسمة في C مثل توزيع 7 تفاحات على شخصين دون تقطيع: يأخذ كل واحد 3 تفاحات (7 / 2 = 3) وتبقى تفاحة واحدة هي باقي القسمة (7 % 2 = 1). إذا أردت تقطيع التفاح (3.5) يجب تحويل أحد العددين لعشري!',
    deep: [
      '<code>int / int</code> يعطي دائماً <code>int</code> (يهمل الفاصلة): <code>7 / 2 = 3</code>.',
      'للحصول على نتيجة عشرية نستخدم التحويل (Casting): <code>(float)a / b</code> فتصبح <code>3.5</code>.',
      'باقي القسمة <code>%</code> يعمل فقط مع الأعداد الصحيحة ويكشف الزوجي (<code>n % 2 == 0</code>) وآخر رقم في عدد (<code>n % 10</code>).',
      'المقارنة تستخدم <code>==</code>، بينما <code>=</code> تعني الإسناد (وضع قيمة في متغير).'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int a = 7, b = 2;\n    printf("قسمة صحيحة: %d\\n", a / b);\n    printf("قسمة عشرية: %.2f\\n", (float)a / b);\n    printf("الباقي: %d\\n", a % b);\n    return 0;\n}',
    lineByLine: [
      ['int a = 7, b = 2;', 'تعريف عددين صحيحين في سطر واحد.'],
      ['a / b', 'لأن كليهما int، الناتج هو 3 فقط.'],
      ['(float)a / b', 'يحوّل a مؤقتاً إلى 7.0 فتصبح القسمة عشرية والناتج 3.50.'],
      ['a % b', 'يحسب باقي قسمة 7 على 2 وهو 1.']
    ],
    algo: 'Algorithme Calcul\nVariables a, b : Entier\nDébut\n    a <- 7 ; b <- 2\n    Ecrire(a div b)  // 3\n    Ecrire(a / b)    // 3.5\n    Ecrire(a mod b)  // 1\nFin',
    mistakes: [
      { bad: 'float r = 7 / 2; // يعطي 3.0!', good: 'float r = 7.0 / 2; // يعطي 3.5', why: 'القسمة تحسب كـ int أولاً قبل تخزينها في r.' },
      { bad: 'if (x = 5)', good: 'if (x == 5)', why: 'علامة = الواحدة تغيّر قيمة x إلى 5 وتجعل الشرط دائماً صحيحاً!' }
    ],
    practice: {
      prompt: 'اقرأ عدداً من 3 أرقام (مثل 472) واطبع رقم الآحاد ورقم المئات.',
      hint: 'رقم الآحاد هو n % 10، ورقم المئات هو n / 100.',
      solution: '#include <stdio.h>\nint main() {\n    int n = 472;\n    printf("الآحاد: %d | المئات: %d\\n", n % 10, n / 100);\n    return 0;\n}'
    }
  },
  {
    id: 'l3', level: 1, title: 'البنى الشرطية واتخاذ القرار (if / switch)', fr: 'Structures Conditionnelles',
    summary: 'كيف تجعل برنامجك يتخذ قرارات ذكية باستخدام if و else if و switch والمعاملات && و ||.',
    analogy: 'البنى الشرطية مثل إشارة المرور أو مفترق طرق: يفحص البرنامج الشرط (هل المعدل >= 10؟) ثم يسلك طريقاً واحداً فقط ويتجاهل الباقي.',
    deep: [
      'استخدم <code>if / else if / else</code> عندما تفحص مجالات (مثل <code>moy >= 16</code>) أو شروطاً مركبة بـ <code>&&</code> (و) و <code>||</code> (أو).',
      'استخدم <code>switch</code> عندما تقارن متغيراً واحداً (<code>int</code> أو <code>char</code>) بقيم ثابتة محددة (مثل قائمة اختيارات 1، 2، 3).',
      'في لغة C: الرقم <code>0</code> يعني خطأ (False)، وأي رقم غير الصفر يعني صح (True).'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    float moy = 14.5;\n    if (moy >= 16) {\n        printf("ممتاز\\n");\n    } else if (moy >= 10) {\n        printf("ناجح\\n");\n    } else {\n        printf("راسب\\n");\n    }\n    return 0;\n}',
    lineByLine: [
      ['if (moy >= 16)', 'يفحص الشرط الأول: هل المعدل 16 فما فوق؟ هنا النتيجة خطأ (14.5 < 16).'],
      ['else if (moy >= 10)', 'ينتقل للشرط الثاني فقط لأن الأول لم يتحقق. هنا 14.5 >= 10 صحيح!'],
      ['printf("ناجح\\n");', 'يطبع "ناجح" ويتخطى فرع else تماماً.'],
      ['else { ... }', 'لا يُنفذ إلا إذا فشلت جميع الشروط السابقة.']
    ],
    algo: 'Si moy >= 16 Alors\n    Ecrire("ممتاز")\nSinon Si moy >= 10 Alors\n    Ecrire("ناجح")\nSinon\n    Ecrire("راسب")\nFinSi',
    mistakes: [
      { bad: 'if (x > 0); { printf("موجب"); }', good: 'if (x > 0) { printf("موجب"); }', why: 'الفاصلة المنقوطة بعد القوس تفصل الشرط عن الكتلة فتطبع الجملة دائماً!' },
      { bad: 'case 1: printf("A"); case 2: ...', good: 'case 1: printf("A"); break;', why: 'نسيان break يجعل switch ينفذ الحالات التالية أيضاً.' }
    ],
    practice: {
      prompt: 'اقرأ عدداً صحيحاً واطبع إن كان موجباً أو سالباً أو صفراً.',
      hint: 'استعمل if (n > 0) ثم else if (n < 0) ثم else.',
      solution: '#include <stdio.h>\nint main() {\n    int n; scanf("%d", &n);\n    if (n > 0) printf("موجب\\n");\n    else if (n < 0) printf("سالب\\n");\n    else printf("صفر\\n");\n    return 0;\n}'
    }
  },
  {
    id: 'l4', level: 1, title: 'الحلقات التكرارية (for, while, do-while)', fr: 'Les Boucles',
    summary: 'متى تستعمل for ومتى while ومتى do-while؟ وكيف تتجنب الحلقات اللانهائية.',
    analogy: 'الحلقة مثل التمرين الرياضي: for تعني "افعل 10 تمارين ضغط" (العدد معروف)، while تعني "استمر في الجري طالما لم تتعب" (شرط مسبق)، و do-while تعني "جرب التمرين مرة أولاً ثم قرر إن كنت ستكرره".',
    deep: [
      '<strong>for(تهيئة؛ شرط؛ تحديث)</strong>: الأفضل والأوضح عندما تعرف البداية والنهاية.',
      '<strong>while(شرط)</strong>: تفحص الشرط أولاً؛ قد لا تُنفذ ولا مرة إذا كان الشرط خاطئاً منذ البداية.',
      '<strong>do { ... } while(شرط);</strong>: تنفذ مرة واحدة على الأقل ثم تفحص الشرط — مثالية لإجبار المستخدم على إدخال رقم صحيح بين 0 و 20.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int n = 5, sum = 0;\n    for (int i = 1; i <= n; i++) {\n        sum += i;\n    }\n    printf("المجموع = %d\\n", sum);\n    return 0;\n}',
    lineByLine: [
      ['int n = 5, sum = 0;', 'نهيّئ sum بقيمة 0 دائماً قبل الجمع وإلا سيحوي قيمة عشوائية!'],
      ['for (int i = 1; i <= n; i++)', 'يبدأ i من 1، ويستمر طالما i <= 5، ويزيد 1 في كل دورة.'],
      ['sum += i;', 'اختصار لـ sum = sum + i؛ فيضيف 1 ثم 2 ثم 3 ثم 4 ثم 5 ليصبح 15.'],
      ['printf("المجموع = %d\\n", sum);', 'بعد انتهاء الحلقة يطبع النتيجة النهائية مرة واحدة (15).']
    ],
    algo: 'sum <- 0\nPour i de 1 à n Faire\n    sum <- sum + i\nFinPour\nEcrire("المجموع =", sum)',
    mistakes: [
      { bad: 'int i=1; while(i<=5) { printf("%d", i); }', good: 'int i=1; while(i<=5) { printf("%d", i); i++; }', why: 'نسيان i++ يجعل الحلقة تدور للأبد (Infinite Loop)!' },
      { bad: 'do { ... } while (x < 0)', good: 'do { ... } while (x < 0);', why: 'نسيان الفاصلة المنقوطة في نهاية do-while يسبب خطأ ترجمة.' }
    ],
    practice: {
      prompt: 'اطبع جدول ضرب العدد 7 من 1 إلى 10.',
      hint: 'حلقة for من i = 1 إلى 10 وطباعة printf("7 x %d = %d\\n", i, 7*i);',
      solution: '#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 10; i++)\n        printf("7 x %d = %d\\n", i, 7 * i);\n    return 0;\n}'
    }
  },
  {
    id: 'l5', level: 2, title: 'الدوال وتنظيم الكود (Fonctions)', fr: 'Fonctions & Prototypes',
    summary: 'تقسيم البرنامج الكبير إلى دوال صغيرة نظيفة وفهم التمرير بالقيمة والنماذج الأولية.',
    analogy: 'الدالة مثل آلة العصير: تعطيها مدخلات (فواكه = Parameters)، تقوم بعمل محدد بالداخل، ثم تُرجع لك النتيجة (عصير = return) دون أن تضطر لإعادة صنع الآلة في كل مرة.',
    deep: [
      'الدالة التي تُرجع نتيجة تقابل <strong>Fonction</strong> (تبدأ بنوع مثل <code>int</code> أو <code>float</code>).',
      'الدالة التي تنفذ مهمة دون إرجاع قيمة تقابل <strong>Procédure</strong> (تبدأ بـ <code>void</code>).',
      'المعاملات تُمرّر افتراضياً <strong>بالقيمة (نسخة)</strong>، لذا تعديلها داخل الدالة لا يغير الأصل في main.'
    ],
    code: '#include <stdio.h>\n\nint max2(int a, int b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    int res = max2(14, 29);\n    printf("الأكبر = %d\\n", res);\n    return 0;\n}',
    lineByLine: [
      ['int max2(int a, int b)', 'تعريف دالة تستقبل عددين صحيحين وترجع عدداً صحيحاً.'],
      ['return (a > b) ? a : b;', 'ترجع a إذا كان أكبر من b، وإلا ترجع b.'],
      ['int res = max2(14, 29);', 'استدعاء الدالة وتخزين القيمة المرجعة (29) داخل res.']
    ],
    algo: 'Fonction max2(a, b : Entier) : Entier\nDébut\n    Si a > b Alors Retourner a\n    Sinon Retourner b\n    FinSi\nFinFonction',
    mistakes: [
      { bad: 'استدعاء دالة قبل تعريفها بدون prototype', good: 'اكتب الدالة فوق main أو ضع int max2(int, int); في الأعلى', why: 'مترجم C يقرأ الملف من الأعلى للأسفل.' }
    ],
    practice: {
      prompt: 'اكتب دالة estPair(int n) ترجع 1 إذا كان العدد زوجياً و 0 إذا كان فردياً.',
      hint: 'return (n % 2 == 0);',
      solution: '#include <stdio.h>\nint estPair(int n) { return (n % 2 == 0); }\nint main() { printf("%d\\n", estPair(8)); return 0; }'
    }
  },
  {
    id: 'l6', level: 2, title: 'الاستدعاء الذاتي (Récursivité)', fr: 'La Récursivité',
    summary: 'كيف تستدعي الدالة نفسها لحل مسائل مثل العاملي (Factorielle) والرفع للقوة، ولماذا حالة التوقف ضرورية.',
    analogy: 'مثل الدمى الروسية (ماتريوشكا): تفتح كل دمية فتجد داخلها دمية أصغر منها حتى تصل إلى أصغر دمية مغلقة (حالة التوقف Base Case)، ثم تبدأ بإغلاقها واحدة تلو الأخرى.',
    deep: [
      'أي دالة تعاودية تحتاج ركنين: <strong>حالة التوقف (Base Case)</strong> + <strong>استدعاء أصغر</strong> يقترب منها.',
      'كل استدعاء يُخزن مؤقتاً في <strong>مكدس الاستدعاءات (Call Stack)</strong> حتى ترجع حالة التوقف.'
    ],
    code: '#include <stdio.h>\n\nlong long fact(int n) {\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}\n\nint main() {\n    printf("5! = %lld\\n", fact(5));\n    return 0;\n}',
    lineByLine: [
      ['if (n <= 1) return 1;', 'حالة التوقف: عاملي 0 أو 1 هو 1. بدونها سيعمل البرنامج للأبد وينهار!'],
      ['return n * fact(n - 1);', 'القاعدة الرياضية: n! = n × (n-1)! فتصغر المسألة في كل خطوة.'],
      ['fact(5)', 'يحسب 5 * fact(4) -> 4 * fact(3) -> ... -> 120.']
    ],
    algo: 'Fonction fact(n : Entier) : Entier\nDébut\n    Si n <= 1 Alors Retourner 1\n    Sinon Retourner n * fact(n - 1)\n    FinSi\nFinFonction',
    mistakes: [
      { bad: 'int f(int n) { return n * f(n - 1); }', good: 'أضف if (n <= 1) return 1; في البداية', why: 'غياب حالة التوقف يسبب Stack Overflow.' }
    ],
    practice: {
      prompt: 'اكتب دالة تعاودية somme(int n) تحسب مجموع الأعداد من 1 إلى n.',
      hint: 'إذا كان n <= 0 أرجع 0، وإلا أرجع n + somme(n - 1).',
      solution: '#include <stdio.h>\nint somme(int n) { return (n <= 0) ? 0 : n + somme(n - 1); }\nint main() { printf("%d\\n", somme(5)); return 0; }'
    }
  },
  {
    id: 'l7', level: 2, title: 'المصفوفات 1D و 2D (Tableaux & Matrices)', fr: 'Tableaux & Matrices',
    summary: 'تخزين قوائم البيانات في خلايا متجاورة في الذاكرة ومعالجتها بسهولة.',
    analogy: 'المصفوفة مثل صف من خزائن الطلاب المرقّمة: أول خزانة رقمها دائماً 0 (وليس 1!)، ويمكنك فتح أي خزانة فوراً إذا عرفت رقمها.',
    deep: [
      'المصفوفة <code>int T[5]</code> فهارسها هي <code>0, 1, 2, 3, 4</code> فقط.',
      'المصفوفة الثنائية <code>int M[3][4]</code> عبارة عن 3 صفوف و 4 أعمدة، ونمر عليها بحلقتين متداخلتين (<code>i</code> للصفوف و <code>j</code> للأعمدة).'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int T[5] = {12, 4, 29, 8, 17};\n    int max = T[0];\n    for (int i = 1; i < 5; i++) {\n        if (T[i] > max) max = T[i];\n    }\n    printf("أكبر قيمة = %d\\n", max);\n    return 0;\n}',
    lineByLine: [
      ['int T[5] = {12, 4, 29, 8, 17};', 'تعريف وتهيئة مصفوفة من 5 أعداد صحيحة متجاورة في الذاكرة.'],
      ['int max = T[0];', 'نفترض أن أول عنصر هو الأكبر (أفضل من 0 لأن الأعداد قد تكون سالبة).'],
      ['for (int i = 1; i < 5; i++)', 'نقارن باقي العناصر من الفهرس 1 حتى 4.'],
      ['if (T[i] > max) max = T[i];', 'كلما وجدنا عنصراً أكبر نحدّث قيمة max.']
    ],
    algo: 'max <- T[0]\nPour i de 1 à 4 Faire\n    Si T[i] > max Alors max <- T[i] FinSi\nFinPour\nEcrire("أكبر قيمة =", max)',
    mistakes: [
      { bad: 'for (int i = 0; i <= 5; i++) T[i] = 0;', good: 'for (int i = 0; i < 5; i++) T[i] = 0;', why: 'T[5] خارج حدود المصفوفة ويخرب ذاكرة مجاورة!' }
    ],
    practice: {
      prompt: 'احسب معدل عناصر المصفوفة float N[4] = {12, 15, 14, 17}.',
      hint: 'اجمع العناصر في متغير s ثم اقسم s / 4.',
      solution: '#include <stdio.h>\nint main() {\n    float N[4]={12,15,14,17}, s=0;\n    for(int i=0;i<4;i++) s+=N[i];\n    printf("المعدل = %.2f\\n", s/4);\n    return 0;\n}'
    }
  },
  {
    id: 'l8', level: 2, title: 'السلاسل النصية (Chaînes & string.h)', fr: 'Chaînes de Caractères',
    summary: 'كيف تتعامل C مع النصوص عبر مصفوفة char والمحرف الخفي \\0 وأهم دوال string.h.',
    analogy: 'السلسلة النصية مثل قطار من الحروف، وفي آخر عربة توجد إشارة توقف حمراء اسمها \'\\0\' تُخبر دالة printf أين ينتهي النص بالضبط!',
    deep: [
      'لا يوجد نوع <code>string</code> في C؛ نستخدم <code>char s[50]</code>.',
      'أهم 4 دوال في <code>&lt;string.h&gt;</code>: <code>strlen</code> (الطول)، <code>strcpy</code> (النسخ)، <code>strcmp</code> (المقارنة، ترجع 0 عند التطابق)، <code>strcat</code> (الدمج).'
    ],
    code: '#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char nom[30] = "Bibarss";\n    printf("الطول: %zu\\n", strlen(nom));\n    if (strcmp(nom, "Bibarss") == 0) {\n        printf("الاسمان متطابقان!\\n");\n    }\n    return 0;\n}',
    lineByLine: [
      ['#include <string.h>', 'مكتبة ضرورية لاستخدام strlen و strcmp و strcpy.'],
      ['char nom[30] = "Bibarss";', 'يخزن الحروف السبعة ويضيف \'\\0\' تلقائياً في الخانة الثامنة.'],
      ['strlen(nom)', 'يحسب عدد الحروف دون احتساب \'\\0\' (هنا 7).'],
      ['strcmp(nom, "Bibarss") == 0', 'الطريقة الصحيحة الوحيدة لمقارنة نصين في C.']
    ],
    algo: 'nom <- "Bibarss"\nEcrire("الطول:", Longueur(nom))\nSi nom = "Bibarss" Alors Ecrire("متطابقان") FinSi',
    mistakes: [
      { bad: 'if (s1 == s2)', good: 'if (strcmp(s1, s2) == 0)', why: 'المعامل == يقارن عناوين الذاكرة وليس الحروف!' },
      { bad: 'gets(nom);', good: 'fgets(nom, sizeof(nom), stdin);', why: 'gets غير آمنة ويمكن أن تتجاوز حجم المصفوفة.' }
    ],
    practice: {
      prompt: 'انسخ النص "Algo" إلى مصفوفة char dest[20] ثم ادمج معها " & C".',
      hint: 'استعمل strcpy ثم strcat.',
      solution: '#include <stdio.h>\n#include <string.h>\nint main() {\n    char dest[20]; strcpy(dest, "Algo"); strcat(dest, " & C");\n    printf("%s\\n", dest); return 0;\n}'
    }
  },
  {
    id: 'l9', level: 3, title: 'المؤشرات وعناوين الذاكرة (Pointeurs)', fr: 'Pointeurs & Références',
    summary: 'افهم المؤشرات بسهولة تامة: ما معنى & و *؟ ولماذا لا تعمل دالة swap بدون مؤشرات؟',
    analogy: 'المؤشر مثل "ورقة مكتوب عليها عنوان منزلك". إذا أعطيت صديقك صورة للمنزل (تمرير بالقيمة) وغيّر لونها، لن يتغير منزلك الحقيقي؛ أما إذا أعطيته العنوان (مؤشر &x) فسيأتي ويغيّر لون منزلك الحقيقي مباشرة!',
    deep: [
      '<code>&amp;x</code> تعني: "أعطني عنوان المتغير x في الذاكرة".',
      '<code>int *p = &amp;x;</code> تعني: "p مؤشر يحمل عنوان x".',
      '<code>*p = 20;</code> تعني: "اذهب إلى العنوان الموجود في p وغيّر القيمة هناك إلى 20".'
    ],
    code: '#include <stdio.h>\n\nvoid echanger(int *a, int *b) {\n    int tmp = *a;\n    *a = *b;\n    *b = tmp;\n}\n\nint main() {\n    int x = 10, y = 25;\n    echanger(&x, &y);\n    printf("x = %d, y = %d\\n", x, y);\n    return 0;\n}',
    lineByLine: [
      ['void echanger(int *a, int *b)', 'الدالة تستقبل عنوانين (مؤشرين) وليس نسختين.'],
      ['int tmp = *a;', 'نقرأ القيمة الأصلية لـ x ونحفظها في tmp.'],
      ['*a = *b; *b = tmp;', 'نبدل القيمتين داخل عناوين الذاكرة الأصلية لـ x و y.'],
      ['echanger(&x, &y);', 'نمرّر عنوان x وعنوان y باستخدام &.']
    ],
    algo: 'Procédure echanger(Var a, Var b : Entier)\n    tmp <- a ; a <- b ; b <- tmp\nFinProcédure',
    mistakes: [
      { bad: 'int *p; *p = 5;', good: 'int x = 0; int *p = &x; *p = 5;', why: 'استخدام مؤشر غير مهيأ يشير لعنوان عشوائي ويدمر البرنامج!' }
    ],
    practice: {
      prompt: 'اكتب دالة doubler(int *n) تضاعف قيمة المتغير الأصلي في main.',
      hint: 'داخل الدالة اكتب *n = (*n) * 2;',
      solution: '#include <stdio.h>\nvoid doubler(int *n) { *n *= 2; }\nint main() { int x = 7; doubler(&x); printf("%d\\n", x); return 0; }'
    }
  },
  {
    id: 'l10', level: 3, title: 'الذاكرة الديناميكية (malloc, calloc, free)', fr: 'Allocation Dynamique',
    summary: 'حجز مصفوفات بحجم يحدده المستخدم أثناء التشغيل وتحريرها بأمان دون تسرب ذاكرة.',
    analogy: 'المصفوفة العادية مثل استئجار قاعة بـ 50 مقعداً ثابتاً. أما malloc فهي استئجار عدد المقاعد بالضبط حسب عدد الضيوف عند وصولهم، ثم إعادتها (free) بعد انتهاء الحفل!',
    deep: [
      '<code>malloc(n * sizeof(int))</code> يحجز في <strong>الكومة (Heap)</strong> ويترك القيم عشوائية.',
      '<code>calloc(n, sizeof(int))</code> يحجز ويصفّر جميع العناصر بقيمة 0.',
      'قاعدة ذهبية: <strong>تحقق دائماً من NULL ← استخدم الذاكرة ← حرّر بـ free() ← اجعل المؤشر NULL</strong>.'
    ],
    code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int n = 4;\n    int *T = (int*) calloc(n, sizeof(int));\n    if (T == NULL) return 1;\n    for (int i = 0; i < n; i++) T[i] = (i + 1) * 10;\n    printf("T[2] = %d\\n", T[2]);\n    free(T);\n    T = NULL;\n    return 0;\n}',
    lineByLine: [
      ['#include <stdlib.h>', 'المكتبة التي تحتوي على malloc و calloc و realloc و free.'],
      ['calloc(n, sizeof(int))', 'يحجز مساحة لـ 4 أعداد صحيحة كلها مهيأة بالصفر.'],
      ['if (T == NULL) return 1;', 'حماية ضرورية في حال امتلأت ذاكرة الجهاز وفشل الحجز.'],
      ['free(T); T = NULL;', 'يحرر الذاكرة لمنع Memory Leak ويصفّر المؤشر لمنع استخدامه لاحقاً.']
    ],
    algo: 'Allouer(T, n * Taille(Entier))\nSi T = NIL Alors Quitter FinSi\n// معالجة T\nLibérer(T)',
    mistakes: [
      { bad: 'حجز malloc بدون استدعاء free()', good: 'استدعِ free(T); T = NULL; قبل انتهاء البرنامج', why: 'نسيان free يسبب تسرب الذاكرة (Memory Leak).' }
    ],
    practice: {
      prompt: 'احجز مصفوفة ديناميكية لـ 3 أعداد عشرية، خزّن فيها 10 و 15 و 20، اطبعها ثم حررها.',
      hint: 'float *a = malloc(3 * sizeof(float)); ثم free(a);',
      solution: '#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    float *a = malloc(3*sizeof(float));\n    if(!a) return 1;\n    a[0]=10; a[1]=15; a[2]=20;\n    for(int i=0;i<3;i++) printf("%.1f ", a[i]);\n    free(a); a=NULL; return 0;\n}'
    }
  },
  {
    id: 'l11', level: 4, title: 'الهياكل والملفات (Structures & Fichiers)', fr: 'Structures & Fichiers',
    summary: 'تجميع بيانات مترابطة في نوع واحد (struct) وحفظها بشكل دائم في ملفات على القرص.',
    analogy: 'الهيكل struct مثل "بطاقة الطالب" التي تجمع اسمه وعمره ومعدله معاً، والملف FILE* مثل الدفتر الذي تكتب فيه هذه البطاقات حتى لا تضيع عند إغلاق الحاسوب.',
    deep: [
      'مع المتغير العادي نصل للحقل بالنقطة: <code>e.moy</code>. مع المؤشر نستخدم السهم: <code>ptr-&gt;moy</code>.',
      'أوضاع فتح الملف في <code>fopen</code>: <code>"r"</code> للقراءة، <code>"w"</code> للكتابة (يمسح القديم)، <code>"a"</code> للإضافة في النهاية.'
    ],
    code: '#include <stdio.h>\n\ntypedef struct {\n    char nom[25];\n    float moy;\n} Etudiant;\n\nint main() {\n    Etudiant e = {"Amine", 16.5};\n    FILE *f = fopen("notes.txt", "w");\n    if (f != NULL) {\n        fprintf(f, "%s %.2f\\n", e.nom, e.moy);\n        fclose(f);\n    }\n    return 0;\n}',
    lineByLine: [
      ['typedef struct { ... } Etudiant;', 'ينشئ نوع بيانات جديداً اسمه Etudiant يجمع الاسم والمعدل.'],
      ['FILE *f = fopen("notes.txt", "w");', 'يفتح ملفاً نصياً للكتابة ويُرجع مؤشراً له.'],
      ['fprintf(f, ...);', 'تشبه printf تماماً لكنها تكتب داخل الملف f بدل الشاشة.'],
      ['fclose(f);', 'يغلق الملف ويضمن حفظ كل البيانات على القرص.']
    ],
    algo: 'Type Etudiant = Enregistrement\n    nom : Chaîne ; moy : Réel\nFinEnregistrement\nOuvrir(f, "notes.txt", "w")\nEcrire(f, e.nom, e.moy)\nFermer(f)',
    mistakes: [
      { bad: 'ptr.moy (عندما يكون ptr مؤشراً)', good: 'ptr->moy', why: 'مع مؤشر الهيكل يجب استخدام معامل السهم (->).' }
    ],
    practice: {
      prompt: 'عرّف هيكلاً Point يحوي x و y واحسب المسافة بين نقطتين من المبدأ (0,0).',
      hint: 'typedef struct { double x, y; } Point; واستخدم sqrt(p.x*p.x + p.y*p.y).',
      solution: '#include <stdio.h>\n#include <math.h>\ntypedef struct { double x, y; } Point;\nint main() { Point p={3,4}; printf("%.2f\\n", sqrt(p.x*p.x+p.y*p.y)); return 0; }'
    }
  },
  {
    id: 'l12', level: 4, title: 'القوائم المترابطة والتعقيد الزمني (Listes Chaînées)', fr: 'Listes Chaînées & Big-O',
    summary: 'بناء أول هيكل بيانات ديناميكي مترابط وفهم لماذا يفضّله المبرمجون عند الإضافة السريعة.',
    analogy: 'القائمة المترابطة مثل "عربات قطار": كل عربة (Node) تحمل بضاعة (data) وخطّافاً (next) يمسك بالعربة التالية، وآخر عربة خطافها فارغ (NULL). يمكنك إضافة عربة في المقدمة في خطوة واحدة فقط!',
    deep: [
      'كل عقدة هي <code>struct Node { int data; struct Node *next; };</code>.',
      'الإضافة في بداية القائمة تستغرق زمناً ثابتاً <code>O(1)</code>، بينما البحث أو العرض يستغرق <code>O(n)</code>.',
      'للمرور على القائمة استخدم دائماً مؤشراً مؤقتاً <code>Node *curr = head;</code> حتى لا تفقد رأس القائمة.'
    ],
    code: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct Node {\n    int data;\n    struct Node *next;\n} Node;\n\nNode* pushFront(Node *head, int val) {\n    Node *n = (Node*) malloc(sizeof(Node));\n    n->data = val;\n    n->next = head;\n    return n;\n}',
    lineByLine: [
      ['struct Node *next;', 'مؤشر من نفس نوع العقدة لربطها بالعقدة التالية.'],
      ['Node *n = malloc(sizeof(Node));', 'حجز عقدة جديدة في الكومة (Heap).'],
      ['n->next = head;', 'نجعل العقدة الجديدة تشير إلى الرأس القديم.'],
      ['return n;', 'تصبح العقدة الجديدة هي رأس القائمة الجديد.']
    ],
    algo: 'Fonction InsererDebut(tete : ^Noeud, val : Entier) : ^Noeud\n    Allouer(n)\n    n^.data <- val\n    n^.suiv <- tete\n    Retourner n\nFinFonction',
    mistakes: [
      { bad: 'while(head != NULL) head = head->next;', good: 'Node *c = head; while(c != NULL) c = c->next;', why: 'تحريك head نفسه يفقدك القائمة بالكامل ويسبب Memory Leak!' }
    ],
    practice: {
      prompt: 'اكتب حلقة تحسب عدد العُقد الموجودة في قائمة مترابطة رأسها head.',
      hint: 'int cnt = 0; for (Node *c = head; c != NULL; c = c->next) cnt++;',
      solution: 'int compter(Node *head) {\n    int cnt = 0;\n    for (Node *c = head; c != NULL; c = c->next) cnt++;\n    return cnt;\n}'
    }
  },
  {
    id: 'l13', level: 2, title: 'المصفوفات ثنائية البعد (Matrices 2D)', fr: 'Matrices 2D (Lignes & Colonnes)',
    summary: 'كيف تمثل الجداول والمصفوفات الرياضية في C، وتحسب مجموع القطر الرئيسي والمنقول وحاصل الضرب.',
    analogy: 'تخيّل المصفوفة الثنائية مثل جدول إكسل أو رقعة شطرنج: للوصول إلى أي خانة تحتاج رقمين معاً — رقم الصف (i) أولاً ثم رقم العمود (j)، تماماً مثل إحداثيات الخريطة.',
    deep: [
      'التعريف: <code>int M[3][4];</code> يعني 3 صفوف (0..2) و 4 أعمدة (0..3).',
      'نستخدم <strong>حلقتين متداخلتين</strong>: الحلقة الخارجية <code>i</code> تمر على الصفوف، والداخلية <code>j</code> تمر على الأعمدة.',
      'عناصر <strong>القطر الرئيسي</strong> في مصفوفة مربعة هي التي يتحقق فيها <code>i == j</code>، والقطر الثانوي <code>i + j == n - 1</code>.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int M[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};\n    int diag = 0;\n    for (int i = 0; i < 3; i++) {\n        diag += M[i][i];\n    }\n    printf("مجموع القطر الرئيسي = %d\\n", diag);\n    return 0;\n}',
    lineByLine: [
      ['int M[3][3] = {{1,2,3}, ...};', 'تعريف مصفوفة مربعة 3×3 وتهيئتها صفاً بصف.'],
      ['for (int i = 0; i < 3; i++)', 'لأن القطر الرئيسي يحقق i == j نحتاج حلقة واحدة فقط!'],
      ['diag += M[i][i];', 'يجمع العناصر M[0][0]=1 و M[1][1]=5 و M[2][2]=9 ليصبح الناتج 15.']
    ],
    algo: 'diag <- 0\nPour i de 0 à n-1 Faire\n    diag <- diag + M[i][i]\nFinPour\nEcrire("مجموع القطر =", diag)',
    mistakes: [
      { bad: 'M[i, j]', good: 'M[i][j]', why: 'في لغة C كل فهرس يوضع داخل قوسين مستقلين [i][j] وليس بفاصلة.' }
    ],
    practice: {
      prompt: 'احسب مجموع جميع عناصر مصفوفة 2×3.',
      hint: 'حلقتان متداخلتان: for i=0..1 و for j=0..2 ثم sum += M[i][j];',
      solution: '#include <stdio.h>\nint main() {\n    int M[2][3]={{1,2,3},{4,5,6}}, s=0;\n    for(int i=0;i<2;i++) for(int j=0;j<3;j++) s+=M[i][j];\n    printf("المجموع = %d\\n", s); return 0;\n}'
    }
  },
  {
    id: 'l14', level: 3, title: 'المؤشرات والمصفوفات وحساب المؤشرات (p++)', fr: 'Pointeurs & Tableaux',
    summary: 'اكتشف السر الحقيقي: لماذا اسم المصفوفة هو مؤشر، وكيف تعمل p++ و *(p + i) داخل RAM.',
    analogy: 'إذا كانت المصفوفة شارعاً به منازل متلاصقة كل منزل عرضه 4 أمتار (4 بايت لـ int)، فعندما تقول للمؤشر p++ فإنه لا يمشي متراً واحداً، بل يقفز تلقائياً 4 أمتار إلى باب المنزل التالي مباشرة!',
    deep: [
      'اسم المصفوفة <code>T</code> يساوي دائماً عنوان أول عنصر <code>&amp;T[0]</code>.',
      'التعبير <code>T[i]</code> يطابق تماماً <code>*(T + i)</code> داخل المترجم.',
      'عند تمرير مصفوفة لدالة <code>void f(int *T, int n)</code> فإنها تُمرر بالمرجع تلقائياً، لذا تعديل عناصرها يؤثر على المصفوفة الأصلية.'
    ],
    code: '#include <stdio.h>\n\nint main() {\n    int T[4] = {10, 20, 30, 40};\n    int *p = T;\n    for (int i = 0; i < 4; i++) {\n        printf("العنصر %d = %d\\n", i, *(p + i));\n    }\n    return 0;\n}',
    lineByLine: [
      ['int *p = T;', 'يجعل المؤشر p يشير إلى أول عنصر T[0] (نفس &T[0]).'],
      ['*(p + i)', 'ينتقل i خطوة في الذاكرة ويقرأ القيمة الموجودة هناك (10 ثم 20 ثم 30 ثم 40).']
    ],
    algo: 'p <- Adresse(T[0])\nPour i de 0 à 3 Faire\n    Ecrire((p + i)^)\nFinPour',
    mistakes: [
      { bad: 'T++; // خطأ ترجمة!', good: 'int *p = T; p++;', why: 'اسم المصفوفة T عنوان ثابت لا يمكن تحريكه؛ استخدم مؤشراً متغيراً p.' }
    ],
    practice: {
      prompt: 'احسب مجموع عناصر مصفوفة باستخدام المؤشر p++ فقط دون استعمال الترقيم T[i].',
      hint: 'for (int *p = T; p < T + n; p++) sum += *p;',
      solution: '#include <stdio.h>\nint main() {\n    int T[]={2,4,6,8}, s=0;\n    for(int *p=T; p<T+4; p++) s += *p;\n    printf("Sum = %d\\n", s); return 0;\n}'
    }
  },
  {
    id: 'l15', level: 3, title: 'المؤشرات المزدوجة (**p) والمصفوفات الديناميكية 2D', fr: 'Pointeurs Doubles & Matrices Dynamiques',
    summary: 'فهم int **p وحجز مصفوفة ثنائية الأبعاد ديناميكياً في Heap وتحريرها بالترتيب الصحيح.',
    analogy: 'المؤشر المزدوج مثل "فهرس كتاب": الفهرس لا يحتوي على الصفحات مباشرة، بل يحتوي على أرقام الصفحات التي تبدأ منها كل فصول الكتاب (كل فصل = صف مستقل في الذاكرة).',
    deep: [
      '<code>int **M</code> هو مؤشر يشير إلى مصفوفة من المؤشرات (كل مؤشر يمثل صفاً).',
      'الحجز يتم على مرحلتين: نحجز الصفوف أولاً <code>malloc(L * sizeof(int*))</code>، ثم لكل صف نحجز أعمدته.',
      'التحرير يتم <strong>بالعكس</strong>: نحرر كل صف أولاً بحلقة، ثم نحرر <code>free(M)</code> في النهاية!'
    ],
    code: '#include <stdio.h>\n#include <stdlib.h>\n\nint main() {\n    int L = 2, C = 3;\n    int **M = malloc(L * sizeof(int*));\n    for (int i = 0; i < L; i++) M[i] = calloc(C, sizeof(int));\n    M[1][2] = 99;\n    printf("M[1][2] = %d\\n", M[1][2]);\n    for (int i = 0; i < L; i++) free(M[i]);\n    free(M);\n    return 0;\n}',
    lineByLine: [
      ['int **M = malloc(L * sizeof(int*));', 'حجز عمود من المؤشرات بعدد الصفوف L.'],
      ['M[i] = calloc(C, sizeof(int));', 'حجز كل صف مستقلاً بـ C أعمدة كلها أصفار.'],
      ['for (i) free(M[i]); free(M);', 'تحرير كل صف أولاً ثم تحرير مصفوفة المؤشرات لمنع تسرب الذاكرة.']
    ],
    algo: 'Allouer(M, L)\nPour i de 0 à L-1 : Allouer(M[i], C)\n// ... استخدام ...\nPour i de 0 à L-1 : Libérer(M[i]) ; Libérer(M)',
    mistakes: [
      { bad: 'free(M); // مباشرة بدون تحرير الصفوف!', good: 'حرر كل M[i] في حلقة أولاً ثم free(M)', why: 'تحرير M أولاً يفقدك عناوين الصفوف ويسبب Memory Leak.' }
    ],
    practice: {
      prompt: 'لماذا نمرّر Node **head (مؤشر مزدوج) لدالة تضيف عقدة في بداية قائمة مترابطة؟',
      hint: 'لأن الدالة تحتاج تعديل عنوان الرأس head نفسه في main.',
      solution: 'void push(Node **head, int v) {\n    Node *n = malloc(sizeof(Node));\n    n->val = v; n->next = *head; *head = n;\n}'
    }
  },
  {
    id: 'l16', level: 4, title: 'الملفات النصية والثنائية (Fichiers Texte & Binaires)', fr: 'Fichiers Texte & Binaires',
    summary: 'القراءة السطرية بـ fgets، حفظ الهياكل مباشرة بـ fwrite/fread، والتنقل داخل الملف.',
    analogy: 'الملف النصي مثل ورقة تقرؤها بعينك، أما الملف الثنائي (.bin) فمثل صندوق مغلق يحفظ ذاكرة الهيكل (struct) كما هي بالبايتات — أسرع بكثير وأصغر حجماً!',
    deep: [
      'لقراءة ملف نصي سطراً بسطر نستعمل <code>while (fgets(line, sizeof(line), f))</code>.',
      'للملفات الثنائية نفتح بـ <code>"wb"</code> للكتابة و <code>"rb"</code> للقراءة مع <code>fwrite</code> و <code>fread</code>.',
      'تحقق دائماً من <code>if (!f)</code> وأغلق الملف بـ <code>fclose(f)</code>.'
    ],
    code: '#include <stdio.h>\n\ntypedef struct { char nom[20]; float moy; } Etud;\n\nint main() {\n    Etud e = {"Yasmine", 18.0}, out;\n    FILE *f = fopen("etud.bin", "wb");\n    if (f) { fwrite(&e, sizeof(Etud), 1, f); fclose(f); }\n    f = fopen("etud.bin", "rb");\n    if (f) { fread(&out, sizeof(Etud), 1, f); fclose(f); }\n    printf("%s -> %.2f\\n", out.nom, out.moy);\n    return 0;\n}',
    lineByLine: [
      ['fopen("etud.bin", "wb")', 'يفتح ملفاً ثنائياً للكتابة (Write Binary).'],
      ['fwrite(&e, sizeof(Etud), 1, f);', 'ينسخ كامل بايتات الهيكل e دفعة واحدة إلى الملف.'],
      ['fread(&out, sizeof(Etud), 1, f);', 'يسترجع الهيكل كاملاً من الملف إلى المتغير out في خطوة واحدة!']
    ],
    algo: 'OuvrirBinaire(f, "etud.bin", "wb")\nEcrireBloc(f, e)\nFermer(f)',
    mistakes: [
      { bad: 'while (!feof(f)) { fscanf(...); }', good: 'while (fscanf(f, "%s %f", nom, &m) == 2)', why: 'feof يكرر آخر سطر مرتين؛ فحص ناتج fscanf أو fgets هو الأصح.' }
    ],
    practice: {
      prompt: 'اكتب حلقة تعدّ عدد الأسطر في ملف نصي مفتوح f.',
      hint: 'char buf[256]; int lines = 0; while (fgets(buf, sizeof(buf), f)) lines++;',
      solution: 'int countLines(FILE *f) {\n    char buf[256]; int c = 0;\n    while (fgets(buf, sizeof(buf), f)) c++;\n    return c;\n}'
    }
  },
  {
    id: 'l17', level: 4, title: 'المكدس والطابور (Pile / Stack & File / Queue)', fr: 'Piles (LIFO) et Files (FIFO)',
    summary: 'افهم الفرق العملي بين LIFO و FIFO وطريقة برمجتهما بسرعة O(1) في لغة C.',
    analogy: 'المكدس (Stack) مثل كومة صحون: آخر صحن تضعه في الأعلى هو أول صحن تأخذه (LIFO). أما الطابور (Queue) فمثل صف أمام شباك البريد: أول شخص يصل هو أول من يُخدم (FIFO).',
    deep: [
      '<strong>المكدس (Pile)</strong> يدعم عمليتين أساسيتين بـ <code>O(1)</code>: <code>push</code> (إضافة للأعلى) و <code>pop</code> (سحب من الأعلى).',
      '<strong>الطابور (File)</strong> يدعم: <code>enqueue</code> (إضافة في المؤخرة <code>rear</code>) و <code>dequeue</code> (سحب من المقدمة <code>front</code>).',
      'تُستخدم المكدسات في الاستدعاء الذاتي وفحص توازن الأقواس، والطوابير في جدولة المهام وخوارزمية BFS.'
    ],
    code: '#include <stdio.h>\n#define MAX 50\n\nint stack[MAX], top = -1;\nvoid push(int x) { if (top < MAX - 1) stack[++top] = x; }\nint pop() { return (top >= 0) ? stack[top--] : -1; }\n\nint main() {\n    push(10); push(20); push(30);\n    printf("أول عنصر يخرج: %d\\n", pop()); // 30\n    return 0;\n}',
    lineByLine: [
      ['int top = -1;', 'القيمة -1 تعني أن المكدس فارغ تماماً.'],
      ['stack[++top] = x;', 'نزيد top أولاً ليصبح 0 ثم نضع العنصر في القمة.'],
      ['stack[top--]', 'نأخذ عنصر القمة أولاً ثم ننقص top بـ 1.']
    ],
    algo: 'Procédure Empiler(x) : sommet <- sommet + 1 ; P[sommet] <- x\nFonction Depiler() : x <- P[sommet] ; sommet <- sommet - 1 ; Retourner x',
    mistakes: [
      { bad: 'القيام بـ pop() عندما يكون top == -1', good: 'تحقق دائماً من if (top >= 0) قبل السحب', why: 'السحب من مكدس فارغ يقرأ خارج المصفوفة (Stack Underflow).' }
    ],
    practice: {
      prompt: 'إذا نفّذنا push(5)، push(8)، pop()، push(3) فما هي القيمة الموجودة في قمة المكدس؟',
      hint: '8 خرجت مع pop() ثم دخلت 3 فوق 5.',
      solution: '// القمة هي 3، والعنصر الذي تحتها هو 5.'
    }
  },
  {
    id: 'l18', level: 4, title: 'خوارزميات الفرز والبحث وتعقيد Big-O', fr: 'Algorithmes de Tri, Recherche & Big-O',
    summary: 'قارن بين الفرز الفقاعي والفرز بالإدراج والبحث الثنائي وتعلّم كيف تحسب التعقيد الزمني في الامتحان.',
    analogy: 'البحث الخطي مثل البحث عن كلمة في قاموس صفحةً بصفحة من البداية (O(n)). أما البحث الثنائي فهو فتح القاموس من المنتصف تماماً وتجاهل نصف الصفحات في كل خطوة (O(log n))!',
    deep: [
      '<strong>البحث الثنائي (Binary Search)</strong>: يعمل فقط على مصفوفة <strong>مرتبة</strong>، وتعقيده <code>O(log n)</code>.',
      '<strong>الفرز بالإدراج (Insertion Sort)</strong>: سريع جداً على المصفوفات شبه المرتبة بتعقيد <code>O(n)</code> في أفضل حالة و <code>O(n²)</code> في أسوأ حالة.',
      'ترتيب سرعة الخوارزميات: <code>O(1)</code> أسرع من <code>O(log n)</code> أسرع من <code>O(n)</code> أسرع من <code>O(n log n)</code> أسرع من <code>O(n²)</code>.'
    ],
    code: '#include <stdio.h>\n\nvoid insertionSort(int T[], int n) {\n    for (int i = 1; i < n; i++) {\n        int key = T[i], j = i - 1;\n        while (j >= 0 && T[j] > key) {\n            T[j + 1] = T[j];\n            j--;\n        }\n        T[j + 1] = key;\n    }\n}',
    lineByLine: [
      ['int key = T[i];', 'نأخذ العنصر الحالي لندخله في مكانه الصحيح وسط الجزء المرتب يساراً.'],
      ['while (j >= 0 && T[j] > key)', 'نزيح العناصر الأكبر من key خطوة لليمين.'],
      ['T[j + 1] = key;', 'نضع key في المكان الفارغ الصحيح — مثل ترتيب أوراق اللعب في يدك!']
    ],
    algo: 'Pour i de 1 à n-1 Faire\n    cle <- T[i] ; j <- i - 1\n    TantQue j >= 0 et T[j] > cle Faire\n        T[j+1] <- T[j] ; j <- j - 1\n    FinTantQue\n    T[j+1] <- cle\nFinPour',
    mistakes: [
      { bad: 'استخدام البحث الثنائي على مصفوفة غير مرتبة', good: 'رتّب المصفوفة أولاً ثم طبّق Binary Search', why: 'البحث الثنائي يعتمد كلياً على أن النصف الأيمن أكبر والأيسر أصغر.' }
    ],
    practice: {
      prompt: 'ما هو التعقيد الزمني لحلقتين متداخلتين من 0 إلى n-1؟',
      hint: 'في كل دورة خارجية (n) تنفذ الحلقة الداخلية (n) مرة.',
      solution: '// التعقيد الزمني هو O(n²).'
    }
  }
];
