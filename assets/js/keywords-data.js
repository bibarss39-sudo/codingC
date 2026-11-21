window.KEYWORDS_DATA = [
  // === 1. الإدخال والإخراج ===
  {
    cmd: 'scanf', cat: 'io', algo: 'Lire(x)',
    short: 'تقرأ قيمة يُدخلها المستخدم من لوحة المفاتيح وتخزنها داخل متغير في الذاكرة.',
    syntax: 'scanf("محدد_التنسيق", &اسم_المتغير);',
    cEx: 'int age;\nprintf("أدخل عمرك: ");\nscanf("%d", &age);',
    algoEx: 'Ecrire("أدخل عمرك:")\nLire(age)',
    cEx2: '// قراءة عدة قيم مع التحقق من نجاح القراءة\nint a, b;\nif (scanf("%d %d", &a, &b) == 2) {\n    printf("المجموع = %d\\n", a + b);\n} else {\n    printf("إدخال غير صالح!\\n");\n}',
    tip: 'لا تنسَ علامة العنوان (&) قبل اسم المتغير (إلا مع السلاسل النصية char[]). استخدم %lf مع double.'
  },
  {
    cmd: 'printf', cat: 'io', algo: 'Ecrire(...)',
    short: 'تطبع النصوص وقيم المتغيرات على الشاشة بالتنسيق الذي تحدده.',
    syntax: 'printf("النص %d", المتغير);',
    cEx: 'int x = 15;\nprintf("النتيجة = %d\\n", x);',
    algoEx: 'x <- 15\nEcrire("النتيجة =", x)',
    cEx2: '// تنسيق جدول مرتب بالأعمدة والأرقام العشرية\nprintf("%-10s | %6.2f\\n", "Amine", 16.5);\nprintf("%-10s | %6.2f\\n", "Sara", 18.25);',
    tip: 'استخدم \\n للسطر الجديد، %.2f لرقمين بعد الفاصلة، و %02d لإضافة صفر يسار الرقم (مثل 05).'
  },
  {
    cmd: 'fgets', cat: 'io', algo: 'Lire(chaine)',
    short: 'تقرأ سطراً نصياً كاملاً (بما فيه المسافات) بطريقة آمنة تمنع تجاوز حجم المصفوفة.',
    syntax: 'fgets(str, sizeof(str), stdin);',
    cEx: 'char nom[50];\nfgets(nom, sizeof(nom), stdin);',
    algoEx: 'Variables nom : Chaîne\nLire(nom)',
    cEx2: '// قراءة اسم كامل وإزالة سطر \\n الزائد في النهاية\nchar nom[50];\nfgets(nom, sizeof(nom), stdin);\nnom[strcspn(nom, "\\n")] = \'\\0\';\nprintf("مرحباً %s!\\n", nom);',
    tip: 'أأمن دائماً من gets() المُلغاة، وتقرأ الجمل التي تحتوي على مسافات عكس scanf("%s").'
  },
  {
    cmd: 'puts', cat: 'io', algo: 'EcrireLigne(texte)',
    short: 'تطبع سلسلة نصية على الشاشة وتنزل تلقائياً لسطر جديد دون الحاجة لـ \\n.',
    syntax: 'puts("النص");',
    cEx: 'puts("مرحباً بك في لغة C");',
    algoEx: 'Ecrire("مرحباً بك في لغة C")',
    cEx2: 'char msg[] = "تم الحفظ بنجاح!";\nputs(msg); // أسرع من printf لطباعة نص ثابت',
    tip: 'تُستخدم للنصوص الجاهزة فقط ولا تدعم محددات التنسيق مثل %d.'
  },
  {
    cmd: 'getchar / putchar', cat: 'io', algo: 'Lire(c) / Ecrire(c)',
    short: 'getchar تقرأ حرفاً واحداً من لوحة المفاتيح، و putchar تطبع حرفاً واحداً.',
    syntax: 'int c = getchar();  putchar(c);',
    cEx: 'char c = getchar();\nputchar(c);',
    algoEx: 'Lire(c)\nEcrire(c)',
    cEx2: '// تنظيف بقايا السطر بعد scanf قبل قراءة نص\nint ch;\nwhile ((ch = getchar()) != \'\\n\' && ch != EOF);',
    tip: 'الحل السحري لمشكلة تخطي fgets بعد scanf هو تفريغ Buffer بـ getchar().'
  },
  {
    cmd: 'sprintf / sscanf', cat: 'io', algo: 'FormaterChaine / ExtraireDeChaine',
    short: 'sprintf تكتب نصاً منسقاً داخل مصفوفة char، و sscanf تستخرج قيماً من نص جاهز.',
    syntax: 'sprintf(buf, "%d", x);  sscanf(str, "%d", &x);',
    cEx: 'char buf[40];\nsprintf(buf, "Note: %.1f/20", 17.5);',
    algoEx: 'buf <- "Note: " + Chaine(17.5) + "/20"',
    cEx2: '// استخراج اليوم والشهر والسنة من نص تاريخ\nchar date[] = "21/11/2026";\nint d, m, y;\nsscanf(date, "%d/%d/%d", &d, &m, &y);\nprintf("السنة: %d\\n", y);',
    tip: 'استخدم snprintf(buf, sizeof(buf), ...) لحماية المصفوفة من الامتلاء.'
  },

  // === 2. أنواع البيانات والثوابت ===
  {
    cmd: 'int', cat: 'types', algo: 'Entier',
    short: 'يُعرّف متغيراً يخزن عدداً صحيحاً بدون فاصلة عشرية (عادةً 4 بايت).',
    syntax: 'int x = 10;',
    cEx: 'int score = 20, essais = 3;',
    algoEx: 'Variables score, essais : Entier\nscore <- 20 ; essais <- 3',
    cEx2: '// حدود int (من -2 مليار إلى +2 مليار تقريباً)\n#include <limits.h>\nprintf("Max int = %d\\n", INT_MAX);',
    tip: 'للأعداد التي تفوق 2 مليار (مثل العاملي 20!) استخدم long long.'
  },
  {
    cmd: 'float / double', cat: 'types', algo: 'Réel',
    short: 'لتخزين الأعداد العشرية؛ double يوفر دقة مضاعفة (15 رقماً) مقابل float (7 أرقام).',
    syntax: 'float a = 12.5f;  double pi = 3.14159265;',
    cEx: 'double r = 4.5;\ndouble aire = 3.14159 * r * r;',
    algoEx: 'Variables r, aire : Réel\naire <- 3.14159 * r * r',
    cEx2: '// حساب معدل 3 مواد بدقة عالية\ndouble n1 = 14.25, n2 = 16.5, n3 = 13.75;\nprintf("المعدل = %.2f\\n", (n1 + n2 + n3) / 3.0);',
    tip: 'في scanf: استخدم %f مع float و %lf مع double.'
  },
  {
    cmd: 'char', cat: 'types', algo: 'Caractère',
    short: 'يخزن حرفاً واحداً بين علامتي تنصيص مفردتين \'A\' وحجمه دائماً 1 بايت.',
    syntax: 'char lettre = \'A\';',
    cEx: 'char grade = \'A\';\nprintf("التقدير: %c (ASCII: %d)\\n", grade, grade);',
    algoEx: 'Variables grade : Caractère\ngrade <- \'A\'',
    cEx2: '// تحويل حرف صغير إلى كبير باستخدام ASCII\nchar c = \'b\';\nif (c >= \'a\' && c <= \'z\') c = c - (\'a\' - \'A\');\nprintf("%c\\n", c); // B',
    tip: 'الفرق بين \'a\' و \'A\' في جدول ASCII هو 32.'
  },
  {
    cmd: 'long long / unsigned', cat: 'types', algo: 'GrandEntier / EntierPositif',
    short: 'long long للأعداد الصحيحة الضخمة (8 بايت)، و unsigned للأعداد غير السالبة فقط.',
    syntax: 'long long big = 10000000000LL;  unsigned int n = 50;',
    cEx: 'long long fact = 2432902008176640000LL;\nprintf("%lld\\n", fact);',
    algoEx: 'Variables fact : GrandEntier',
    cEx2: '// حساب 20! بدون Overflow\nlong long f = 1;\nfor (int i = 2; i <= 20; i++) f *= i;\nprintf("20! = %lld\\n", f);',
    tip: 'محدد الطباعة لـ long long هو %lld ولـ unsigned int هو %u.'
  },
  {
    cmd: 'void', cat: 'types', algo: 'Procédure (بلا قيمة مرجعة)',
    short: 'يعني "لا نوع"؛ يُستخدم للدوال التي تنفذ عملاً دون إرجاع قيمة (مثل الطباعة).',
    syntax: 'void afficher(int x) { ... }',
    cEx: 'void saluer() {\n    printf("أهلاً بك!\\n");\n}',
    algoEx: 'Procédure saluer()\n  Ecrire("أهلاً بك!")\nFinProcédure',
    cEx2: '// إجراء لطباعة عناصر مصفوفة\nvoid afficherTab(int T[], int n) {\n    for (int i = 0; i < n; i++) printf("%d ", T[i]);\n    printf("\\n");\n}',
    tip: 'يمكن استخدام void* كمؤشر عام يشير لأي نوع بيانات (مثل ناتج malloc).'
  },
  {
    cmd: 'const', cat: 'types', algo: 'Constante',
    short: 'يمنع تغيير قيمة المتغير بعد تهيئته لحماية الثوابت والمعاملات.',
    syntax: 'const double PI = 3.14159;',
    cEx: 'const int MAX_NOTE = 20;',
    algoEx: 'Constante MAX_NOTE = 20',
    cEx2: '// حماية مصفوفة من التعديل داخل دالة\nint somme(const int *T, int n) {\n    int s = 0;\n    for (int i = 0; i < n; i++) s += T[i];\n    return s;\n}',
    tip: 'تمرير const int *T في الدوال يمنع أي تعديل غير مقصود على المصفوفة الأصلية.'
  },
  {
    cmd: 'typedef', cat: 'types', algo: 'Type ... =',
    short: 'يُنشئ اسماً مستعاراً نظيفاً ومختصراً لنوع بيانات (مشهور مع الهياكل struct).',
    syntax: 'typedef struct { ... } Etudiant;',
    cEx: 'typedef unsigned int uint;\nuint age = 20;',
    algoEx: 'Type uint = EntierPositif',
    cEx2: '// تسهيل كتابة القوائم المترابطة\ntypedef struct Node {\n    int val;\n    struct Node *next;\n} Node;\nNode *head = NULL;',
    tip: 'يغنيك عن تكرار كلمة struct قبل كل تعريف متغير.'
  },
  {
    cmd: 'sizeof', cat: 'types', algo: 'Taille(Type)',
    short: 'يحسب حجم نوع بيانات أو متغير أو مصفوفة بالبايت (Bytes).',
    syntax: 'sizeof(int)  أو  sizeof(T)',
    cEx: 'printf("حجم int: %zu بايت\\n", sizeof(int));',
    algoEx: 'Ecrire(Taille(Entier))',
    cEx2: '// حساب عدد عناصر مصفوفة ثابتة تلقائياً\nint T[] = {4, 8, 15, 16, 23, 42};\nint n = sizeof(T) / sizeof(T[0]);\nprintf("عدد العناصر = %d\\n", n); // 6',
    tip: 'محدد طباعة sizeof الصحيح هو %zu.'
  },
  {
    cmd: 'enum', cat: 'types', algo: 'Type Enuméré',
    short: 'يُعرّف مجموعة من الثوابت الصحيحة بأسماء واضحة بدل الأرقام الغامضة.',
    syntax: 'enum Jour { DIM, LUN, MAR };',
    cEx: 'enum Etat { ECHEC = 0, SUCCES = 1 };\nenum Etat st = SUCCES;',
    algoEx: 'Type Etat = (ECHEC, SUCCES)',
    cEx2: 'typedef enum { ROUGE, ORANGE, VERT } Feu;\nFeu f = VERT;\nif (f == VERT) printf("انطلق!\\n");',
    tip: 'يجعل الكود أسهل قراءة بكثير من استخدام أرقام مثل 0 و 1 و 2.'
  },
  {
    cmd: '(type) Casting', cat: 'types', algo: 'Convertir(x)',
    short: 'يحوّل قيمة متغير مؤقتاً من نوع إلى آخر (مهم جداً في القسمة العشرية).',
    syntax: '(float)a / b',
    cEx: 'int a = 7, b = 2;\nprintf("%.2f\\n", (float)a / b); // 3.50',
    algoEx: 'Ecrire(Reel(a) / b)',
    cEx2: '// حساب معدل عناصر مصفوفة صحيحة بدقة عشرية\nint sum = 35, n = 4;\ndouble moy = (double)sum / n; // 8.75 وليس 8.0',
    tip: 'بدون (double) ستعطي 35 / 4 القيمة 8 فقط وتضيع الفاصلة!'
  },

  // === 3. المعاملات ===
  {
    cmd: '+ - * / %', cat: 'ops', algo: '+ - * div mod',
    short: 'العمليات الحسابية الأساسية؛ المعامل % يحسب باقي القسمة الصحيحة.',
    syntax: 'q = a / b;  r = a % b;',
    cEx: 'printf("17 / 5 = %d | الباقي = %d\\n", 17/5, 17%5);',
    algoEx: 'Ecrire(17 div 5, 17 mod 5)',
    cEx2: '// استخراج آخر رقم من عدد وفحص الزوجي والفردي\nint n = 48;\nprintf("الآحاد: %d | %s\\n", n % 10, (n % 2 == 0) ? "زوجي" : "فردي");',
    tip: 'المعامل % يعمل فقط مع الأعداد الصحيحة (int / long) ولا يعمل مع float.'
  },
  {
    cmd: '== != < > <= >=', cat: 'ops', algo: '= <> < > <= >=',
    short: 'معاملات المقارنة؛ ترجع 1 إذا كانت المقارنة صحيحة و 0 إذا كانت خاطئة.',
    syntax: 'if (a == b && c != 0)',
    cEx: 'int x = 10;\nif (x != 0 && x <= 20) printf("صالح\\n");',
    algoEx: 'Si x <> 0 et x <= 20 Alors Ecrire("صالح") FinSi',
    cEx2: '// فحص إذا كان العدد محصوراً بين 0 و 20\nfloat note = 14.5;\nif (note >= 0 && note <= 20) printf("علامة مقبولة\\n");',
    tip: 'في C لا تكتب 0 <= note <= 20؛ اكتب دائماً (note >= 0 && note <= 20).'
  },
  {
    cmd: '&& || !', cat: 'ops', algo: 'ET / OU / NON',
    short: 'المعاملات المنطقية لربط الشروط: && (و)، || (أو)، ! (النفي).',
    syntax: 'if (age >= 18 && !estBloque)',
    cEx: 'if (note >= 10 || rachat == 1) printf("ناجح\\n");',
    algoEx: 'Si note >= 10 OU rachat = 1 Alors Ecrire("ناجح") FinSi',
    cEx2: '// شرط السنة الكبيسة\nint y = 2024;\nif ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0)\n    printf("سنة كبيسة\\n");',
    tip: 'تعمل C بمبدأ التقييم القصير: في (a && b) إذا كان a خطأً لا يتم فحص b أصلاً!'
  },
  {
    cmd: '++ / --', cat: 'ops', algo: 'i <- i + 1 / i <- i - 1',
    short: 'تزيد أو تنقص قيمة المتغير بـ 1. (++i تزيد أولاً، i++ تستخدم القيمة ثم تزيد).',
    syntax: 'i++;  ++i;  i--;',
    cEx: 'int i = 5;\nprintf("%d\\n", i++); // يطبع 5 ثم يصبح 6',
    algoEx: 'Ecrire(i) ; i <- i + 1',
    cEx2: 'int a = 5, b = 5;\nint x = ++a; // a=6, x=6\nint y = b++; // y=5, b=6\nprintf("x=%d, y=%d\\n", x, y);',
    tip: 'تجنب استخدام i++ مرتين في نفس التعبير مثل (i++ + ++i) لأن نتيجته غير معرفة.'
  },
  {
    cmd: '+= -= *= /=', cat: 'ops', algo: 'x <- x + k',
    short: 'معاملات الإسناد المختصرة لتحديث المتغير بطريقة أنظف وأقصر.',
    syntax: 'sum += T[i];  n /= 10;',
    cEx: 'int total = 100;\ntotal += 25; // يصبح 125',
    algoEx: 'total <- total + 25',
    cEx2: '// جمع أرقام عدد صحيح\nint n = 456, s = 0;\nwhile (n > 0) { s += n % 10; n /= 10; }\nprintf("مجموع الأرقام = %d\\n", s); // 15',
    tip: 'أوضح وأقل عرضة للأخطاء من تكرار اسم المتغير مرتين.'
  },

  // === 4. الشروط ===
  {
    cmd: 'if', cat: 'cond', algo: 'Si ... Alors',
    short: 'ينفذ كتلة التعليمات فقط إذا تحقق الشرط بين القوسين.',
    syntax: 'if (الشرط) { ... }',
    cEx: 'if (note >= 10) {\n    printf("ناجح\\n");\n}',
    algoEx: 'Si note >= 10 Alors\n  Ecrire("ناجح")\nFinSi',
    cEx2: '// فحص القسمة الآمنة قبل الحساب\nfloat a = 10, b = 0;\nif (b != 0) printf("%.2f\\n", a / b);\nelse printf("لا يمكن القسمة على صفر\\n");',
    tip: 'لا تضع فاصلة منقوطة بعد القوس if(cond); لأنها تنهي الشرط فوراً!'
  },
  {
    cmd: 'else / else if', cat: 'cond', algo: 'Sinon / Sinon Si',
    short: 'يحدد المسار البديل عند عدم تحقق الشرط الأول أو لفحص شروط متدرجة.',
    syntax: 'if (c1) {...} else if (c2) {...} else {...}',
    cEx: 'if (x > 0) printf("موجب");\nelse if (x < 0) printf("سالب");\nelse printf("صفر");',
    algoEx: 'Si x > 0 Alors Ecrire("موجب")\nSinon Si x < 0 Alors Ecrire("سالب")\nSinon Ecrire("صفر") FinSi',
    cEx2: '// تحديد التقدير الجامعي\nfloat m = 15.2;\nif (m >= 16) printf("Très Bien");\nelse if (m >= 14) printf("Bien");\nelse if (m >= 12) printf("Assez Bien");\nelse if (m >= 10) printf("Passable");\nelse printf("Ajourné");',
    tip: 'رتّب الشروط دائماً من الأكبر للأصغر (أو العكس) لتجنب تداخل المجالات.'
  },
  {
    cmd: 'switch / case', cat: 'cond', algo: 'Selon ... Faire',
    short: 'يقارن متغيراً صحيحاً أو حرفاً بحالات ثابتة بطريقة مرتبة وسريعة.',
    syntax: 'switch (x) { case 1: ... break; default: ... }',
    cEx: 'switch (jour) {\n    case 1: printf("الأحد"); break;\n    default: printf("يوم آخر");\n}',
    algoEx: 'Selon jour Faire\n  1 : Ecrire("الأحد")\n  Sinon : Ecrire("يوم آخر")\nFinSelon',
    cEx2: '// قائمة تفاعلية لبرنامج طلابي\nint choix = 2;\nswitch (choix) {\n    case 1: printf("إضافة طالب\\n"); break;\n    case 2: printf("عرض القائمة\\n"); break;\n    case 0: printf("خروج\\n"); break;\n    default: printf("اختيار غير صالح\\n");\n}',
    tip: 'لا تنسَ break في نهاية كل case، ولا يقبل switch الأعداد العشرية float.'
  },
  {
    cmd: '?: (Ternary)', cat: 'cond', algo: 'Si ... Alors ... Sinon (مختصر)',
    short: 'صيغة مختصرة لـ if/else في سطر واحد لإرجاع إحدى قيمتين.',
    syntax: 'الشرط ? قيمة_صح : قيمة_خطأ',
    cEx: 'int max = (a > b) ? a : b;',
    algoEx: 'Si a > b Alors max <- a Sinon max <- b FinSi',
    cEx2: '// حساب القيمة المطلقة في سطر واحد\nint x = -12;\nint absX = (x < 0) ? -x : x;\nprintf("|%d| = %d\\n", x, absX);',
    tip: 'ممتازة للتعابير القصيرة؛ أما للشروط المعقدة فاستعمل if/else لوضوح القراءة.'
  },

  // === 5. الحلقات ===
  {
    cmd: 'for', cat: 'loops', algo: 'Pour i de A à B Faire',
    short: 'حلقة تكرارية مثالية عندما يكون عدد الدورات معروفاً مسبقاً.',
    syntax: 'for (int i = 0; i < n; i++) { ... }',
    cEx: 'for (int i = 1; i <= 5; i++) {\n    printf("%d ", i);\n}',
    algoEx: 'Pour i de 1 à 5 Faire\n  Ecrire(i)\nFinPour',
    cEx2: '// العد التنازلي وخطوة بمقدار 2 (الأعداد الزوجية)\nfor (int i = 10; i >= 0; i -= 2) {\n    printf("%d ", i); // 10 8 6 4 2 0\n}',
    tip: 'عند المرور على مصفوفة حجمها n ابدأ من i = 0 واجعل الشرط i < n.'
  },
  {
    cmd: 'while', cat: 'loops', algo: 'TantQue ... Faire',
    short: 'تكرر التعليمات طالما الشرط صحيح، وتفحص الشرط قبل كل دورة.',
    syntax: 'while (الشرط) { ... }',
    cEx: 'while (n > 0) {\n    n /= 10;\n}',
    algoEx: 'TantQue n > 0 Faire\n  n <- n div 10\nFinTantQue',
    cEx2: '// حساب عدد أرقام أي عدد صحيح\nint n = 94821, digits = 0;\nwhile (n > 0) { digits++; n /= 10; }\nprintf("عدد الأرقام = %d\\n", digits); // 5',
    tip: 'تأكد من تغيير متغير الشرط داخل الحلقة وإلا ستقع في حلقة لا نهائية.'
  },
  {
    cmd: 'do ... while', cat: 'loops', algo: 'Répéter ... Jusqu\'à',
    short: 'تنفذ جسم الحلقة مرة واحدة على الأقل ثم تفحص الشرط في النهاية.',
    syntax: 'do { ... } while (الشرط);',
    cEx: 'int note;\ndo {\n    scanf("%d", &note);\n} while (note < 0 || note > 20);',
    algoEx: 'Répéter\n  Lire(note)\nJusqu\'à (note >= 0 ET note <= 20)',
    cEx2: '// تكرار قائمة حتى يختار المستخدم 0 للخروج\nint ch;\ndo {\n    printf("1-حساب  0-خروج: ");\n    scanf("%d", &ch);\n} while (ch != 0);',
    tip: 'انتبه: شرط while في C هو شرط الاستمرار، وهو عكس شرط Jusqu\'à (التوقف) في الخوارزمية!'
  },
  {
    cmd: 'break', cat: 'loops', algo: 'Sortir / QuitterBoucle',
    short: 'يُنهي الحلقة أو switch فوراً ويقفز إلى ما بعدها.',
    syntax: 'if (condition) break;',
    cEx: 'for (int i = 0; i < n; i++) {\n    if (T[i] == x) { pos = i; break; }\n}',
    algoEx: 'Si T[i] = x Alors pos <- i ; Sortir FinSi',
    cEx2: '// التوقف فور العثور على أول قاسم لعدد\nint n = 49, premier = 1;\nfor (int i = 2; i * i <= n; i++) {\n    if (n % i == 0) { premier = 0; break; }\n}',
    tip: 'في الحلقات المتداخلة، يخرج break من الحلقة الداخلية فقط.'
  },
  {
    cmd: 'continue', cat: 'loops', algo: 'Passer à l\'itération suivante',
    short: 'يتخطى باقي الدورة الحالية فقط وينتقل مباشرة للدورة التالية.',
    syntax: 'if (T[i] < 0) continue;',
    cEx: 'for (int i = 1; i <= 5; i++) {\n    if (i == 3) continue;\n    printf("%d ", i); // 1 2 4 5\n}',
    algoEx: 'Si i = 3 Alors Continuer FinSi',
    cEx2: '// جمع الأعداد الموجبة فقط وتجاهل السالبة\nint T[] = {5, -2, 8, -1, 4}, s = 0;\nfor (int i = 0; i < 5; i++) {\n    if (T[i] < 0) continue;\n    s += T[i];\n}',
    tip: 'مفيد لتجنب تداخل شروط if الطويلة داخل الحلقات.'
  },

  // === 6. الدوال ===
  {
    cmd: 'return', cat: 'funcs', algo: 'Retourner',
    short: 'يُنهي الدالة فوراً ويُرجع القيمة المحسوبة إلى المستدعي.',
    syntax: 'return القيمة;',
    cEx: 'int carre(int x) {\n    return x * x;\n}',
    algoEx: 'Fonction carre(x : Entier) : Entier\n  Retourner x * x\nFinFonction',
    cEx2: '// الخروج المبكر من دالة البحث\nint chercher(int T[], int n, int x) {\n    for (int i = 0; i < n; i++)\n        if (T[i] == x) return i;\n    return -1; // غير موجود\n}',
    tip: 'أي كود يُكتب بعد return في نفس المسار لن يُنفذ أبداً.'
  },
  {
    cmd: 'Prototype', cat: 'funcs', algo: 'Déclaration de Fonction',
    short: 'إعلان توقيع الدالة فوق main() لتتمكن من استدعائها قبل كتابة جسمها أسفل الملف.',
    syntax: 'int somme(int a, int b);',
    cEx: 'int somme(int a, int b); // Prototype\nint main() { printf("%d", somme(3, 4)); }\nint somme(int a, int b) { return a + b; }',
    algoEx: '// الإعلان المسبق عن الدالة قبل استخدامها',
    cEx2: '// تنظيم ملف كبير بوضع جميع النماذج في الأعلى\nvoid lireTab(int T[], int n);\nfloat moyenne(const int T[], int n);\nvoid afficher(const int T[], int n);',
    tip: 'لا تنسَ الفاصلة المنقوطة ; في نهاية سطر الـ Prototype.'
  },
  {
    cmd: 'static', cat: 'funcs', algo: 'Variable Persistante',
    short: 'يجعل المتغير المحلي يحتفظ بقيمته بين الاستدعاءات المتكررة للدالة.',
    syntax: 'static int compteur = 0;',
    cEx: 'void tick() {\n    static int c = 0;\n    printf("استدعاء #%d\\n", ++c);\n}',
    algoEx: '// متغير يحفظ قيمته بين الاستدعاءات',
    cEx2: '// توليد رقم تسلسلي تلقائي لكل طالب جديد\nint nextId() {\n    static int id = 1000;\n    return ++id; // 1001, 1002, 1003...\n}',
    tip: 'تُنفذ تهيئة المتغير static مرة واحدة فقط عند بداية البرنامج.'
  },

  // === 7. المؤشرات والذاكرة ===
  {
    cmd: '& (Address-of)', cat: 'pointers', algo: 'Adresse(x)',
    short: 'يجلب عنوان المتغير في الذاكرة RAM لتمريره لمؤشر أو لدالة scanf.',
    syntax: 'int *p = &x;',
    cEx: 'int x = 10;\nprintf("عنوان x = %p\\n", (void*)&x);',
    algoEx: 'p <- Adresse(x)',
    cEx2: '// تمرير عنوانين لدالة تقوم بتعديلهـما\nvoid inc(int *a, int *b) { (*a)++; (*b)++; }\nint x = 1, y = 2;\ninc(&x, &y); // x=2, y=3',
    tip: 'لا تخلط بين & (عنوان المتغير) و && (المعامل المنطقي "و").'
  },
  {
    cmd: '* (Pointer / Deref)', cat: 'pointers', algo: 'p^ (محتوى العنوان)',
    short: 'في التعريف يُنشئ مؤشراً، وفي الاستخدام يصل ويعدّل القيمة المخزنة في ذلك العنوان.',
    syntax: '*p = 50;',
    cEx: 'int x = 10, *p = &x;\n*p = 50; // x تصبح 50',
    algoEx: 'p^ <- 50',
    cEx2: '// مؤشر إلى مؤشر (Double Pointer) لتعديل رأس قائمة مترابطة\nvoid push(Node **head, int v) {\n    Node *n = malloc(sizeof(Node));\n    n->val = v; n->next = *head;\n    *head = n;\n}',
    tip: 'تحقق دائماً من p != NULL قبل تنفيذ *p.'
  },
  {
    cmd: 'NULL', cat: 'pointers', algo: 'NIL',
    short: 'ثابت يعني أن المؤشر فارغ ولا يشير إلى أي عنوان صالح في الذاكرة.',
    syntax: 'Node *head = NULL;',
    cEx: 'int *p = NULL;\nif (p == NULL) printf("مؤشر فارغ\\n");',
    algoEx: 'tete <- NIL',
    cEx2: '// حلقة المرور الآمن على قائمة مترابطة حتى NULL\nfor (Node *c = head; c != NULL; c = c->next) {\n    printf("%d -> ", c->val);\n}',
    tip: 'اجعل المؤشر يساوي NULL مباشرة بعد استدعاء free(p).'
  },
  {
    cmd: 'malloc', cat: 'pointers', algo: 'Allouer(taille)',
    short: 'يحجز مساحة ذاكرة ديناميكية في الكومة (Heap) أثناء التشغيل (من <stdlib.h>).',
    syntax: 'int *T = malloc(n * sizeof(int));',
    cEx: 'int *T = (int*) malloc(5 * sizeof(int));\nif (T == NULL) return 1;',
    algoEx: 'Allouer(T, 5 * Taille(Entier))',
    cEx2: '// حجز مصفوفة ديناميكية حسب عدد يقرؤه المستخدم\nint n; scanf("%d", &n);\nfloat *notes = malloc(n * sizeof(float));\nif (!notes) return 1;\n// ... استخدام notes ...\nfree(notes); notes = NULL;',
    tip: 'القيم الأولية بعد malloc تكون عشوائية، ويجب دائماً تحريرها بـ free().'
  },
  {
    cmd: 'calloc', cat: 'pointers', algo: 'AllouerZero(n, taille)',
    short: 'يحجز ذاكرة ديناميكية لمصفوفة ويصفّر جميع عناصرها بقيمة 0 تلقائياً.',
    syntax: 'int *T = calloc(n, sizeof(int));',
    cEx: 'int *freq = (int*) calloc(26, sizeof(int));',
    algoEx: 'Allouer(freq, 26) // مهيأة بصفر',
    cEx2: '// حساب تكرار الأرقام من 0 إلى 9 باستخدام calloc\nint *cnt = calloc(10, sizeof(int));\nif (cnt) { cnt[5]++; printf("تكرار 5: %d\\n", cnt[5]); free(cnt); }',
    tip: 'ممتاز لجدول التكرارات أو المصفوفات التي يجب أن تبدأ كلها بأصفار.'
  },
  {
    cmd: 'realloc', cat: 'pointers', algo: 'Réallouer(T, nouvelleTaille)',
    short: 'يوسّع أو يقلّص حجماً محجوزاً مسبقاً في Heap مع الاحتفاظ بالبيانات القديمة.',
    syntax: 'T = realloc(T, newN * sizeof(int));',
    cEx: 'int *tmp = realloc(T, 10 * sizeof(int));\nif (tmp) T = tmp;',
    algoEx: 'Redimensionner(T, 10)',
    cEx2: '// إضافة عنصر جديد لمصفوفة ديناميكية بتوسيعها\nint n = 3;\nint *T = malloc(n * sizeof(int));\nint *tmp = realloc(T, (n + 1) * sizeof(int));\nif (tmp) { T = tmp; T[n++] = 99; }',
    tip: 'استعمل مؤشراً مؤقتاً tmp حتى لا تفقد عنوان T الأصلي إذا فشل التوسيع.'
  },
  {
    cmd: 'free', cat: 'pointers', algo: 'Libérer(p)',
    short: 'يحرر الذاكرة المحجوزة بـ malloc/calloc/realloc ويعيدها لنظام التشغيل.',
    syntax: 'free(T);  T = NULL;',
    cEx: 'free(T);\nT = NULL;',
    algoEx: 'Libérer(T) ; T <- NIL',
    cEx2: '// تحرير جميع عُقد قائمة مترابطة دون تسرب ذاكرة\nwhile (head != NULL) {\n    Node *tmp = head;\n    head = head->next;\n    free(tmp);\n}',
    tip: 'لا تستدعِ free() مرتين على نفس المؤشر (Double Free) ولا تستخدمه بعدها.'
  },
  {
    cmd: 'p++ (Pointer Math)', cat: 'pointers', algo: 'AvancerPointeur(p)',
    short: 'عند زيادة مؤشر بـ 1 ينتقل تلقائياً بمقدار حجم نوعه (4 بايت لـ int) للعنصر التالي.',
    syntax: '*(p + i)  تساوي  p[i]',
    cEx: 'int T[] = {10, 20, 30};\nint *p = T;\nprintf("%d\\n", *(p + 1)); // 20',
    algoEx: 'Ecrire(T[1])',
    cEx2: '// طباعة مصفوفة بالمؤشر دون استخدام الفهرس i\nint T[] = {5, 10, 15, 20};\nfor (int *p = T; p < T + 4; p++) {\n    printf("%d ", *p);\n}',
    tip: 'في لغة C العبارة T[i] يترجمها المترجم داخلياً إلى *(T + i).'
  },

  // === 8. الهياكل والملفات ===
  {
    cmd: 'struct', cat: 'structs', algo: 'Enregistrement',
    short: 'يجمع حقولاً من أنواع مختلفة في نوع واحد مركب لتمثيل كيان واقعي.',
    syntax: 'typedef struct { char nom[25]; float moy; } Etudiant;',
    cEx: 'typedef struct { int x, y; } Point;\nPoint p = {3, 4};',
    algoEx: 'Type Point = Enregistrement\n  x, y : Entier\nFinEnregistrement',
    cEx2: '// مصفوفة من الهياكل لتمثيل قسم طلابي\ntypedef struct { char nom[20]; float moy; } Etud;\nEtud cls[2] = {{"Ali", 14.5}, {"Lina", 17.2}};\nprintf("%s: %.1f\\n", cls[1].nom, cls[1].moy);',
    tip: 'تستطيع نسخ هيكل لآخر مباشرة بالمساواة: e2 = e1;'
  },
  {
    cmd: 'union', cat: 'structs', algo: 'Union (ذاكرة مشتركة)',
    short: 'يشبه struct لكن جميع حقوله تتشارك نفس المساحة في الذاكرة (حجم أكبر حقل فقط).',
    syntax: 'union Valeur { int i; float f; };',
    cEx: 'union Data { int i; float f; };\nunion Data d; d.i = 42;',
    algoEx: '// نوع يخزن حقلاً واحداً فقط في كل لحظة',
    cEx2: 'union Val { int i; char c; };\nprintf("الحجم = %zu بايت\\n", sizeof(union Val)); // 4 وليس 5',
    tip: 'تعديل حقل في union يمسح قيمة الحقل الآخر لأنهما يشتركان في نفس البايتات.'
  },
  {
    cmd: '-> (Arrow)', cat: 'structs', algo: 'p^.champ',
    short: 'معامل الوصول لحقل داخل هيكل (struct) عبر مؤشر يشير إليه.',
    syntax: 'ptr->champ  (تساوي (*ptr).champ)',
    cEx: 'Etudiant *p = &e;\nprintf("%s\\n", p->nom);',
    algoEx: 'Ecrire(p^.nom)',
    cEx2: '// تعديل معدل طالب داخل دالة عبر مؤشر الهيكل\nvoid bonus(Etudiant *e) {\n    if (e->moy < 19) e->moy += 1.0;\n}',
    tip: 'المتغير العادي يأخذ نقطة (e.moy) والمؤشر يأخذ سهماً (p->moy).'
  },
  {
    cmd: 'fopen / fclose', cat: 'structs', algo: 'Ouvrir / Fermer',
    short: 'يفتح ملفاً على القرص بأوضاع ("r" قراءة، "w" كتابة، "a" إضافة) ويغلقه بأمان.',
    syntax: 'FILE *f = fopen("a.txt", "w"); ... fclose(f);',
    cEx: 'FILE *f = fopen("notes.txt", "w");\nif (f) { fprintf(f, "20\\n"); fclose(f); }',
    algoEx: 'Ouvrir(f, "notes.txt", "w")\nEcrire(f, 20)\nFermer(f)',
    cEx2: '// إضافة سطر جديد في نهاية ملف موجود دون مسح القديم\nFILE *f = fopen("log.txt", "a");\nif (!f) { perror("خطأ"); return 1; }\nfprintf(f, "دخول ناجح\\n");\nfclose(f);',
    tip: 'الوضع "w" يمسح محتوى الملف القديم، أما "a" فيضيف في آخره.'
  },
  {
    cmd: 'fprintf / fscanf', cat: 'structs', algo: 'EcrireFichier / LireFichier',
    short: 'نسخة الملفات من printf و scanf للكتابة والقراءة المنسقة داخل الملفات النصية.',
    syntax: 'fprintf(f, "%s %f", s, x);  fscanf(f, "%s %f", s, &x);',
    cEx: 'char nom[30]; float m;\nfscanf(f, "%s %f", nom, &m);',
    algoEx: 'LireFichier(f, nom, m)',
    cEx2: '// قراءة جميع أسطر ملف طلاب حتى نهايته\nchar nom[30]; float m;\nwhile (fscanf(f, "%29s %f", nom, &m) == 2) {\n    printf("%s -> %.2f\\n", nom, m);\n}',
    tip: 'الشرط while (fscanf(...) == عدد_المتغيرات) هو الطريقة الأصح والأأمن لقراءة الملفات.'
  },

  // === 9. السلاسل النصية ===
  {
    cmd: 'strlen', cat: 'strings', algo: 'Longueur(s)',
    short: 'يحسب عدد حروف السلسلة النصية دون احتساب المحرف الصفري \\0 (من <string.h>).',
    syntax: 'size_t len = strlen(s);',
    cEx: 'printf("الطول = %zu\\n", strlen("C_Lang")); // 6',
    algoEx: 'Ecrire(Longueur("C_Lang"))',
    cEx2: '// طباعة كلمة بالعكس باستخدام strlen\nchar s[] = "Algo";\nfor (int i = (int)strlen(s) - 1; i >= 0; i--)\n    putchar(s[i]); // oglA',
    tip: 'لا تضع strlen(s) داخل شرط حلقة for لأنها تُحسب في كل دورة؛ احفظها في متغير len أولاً.'
  },
  {
    cmd: 'strcpy / strcat', cat: 'strings', algo: 'Copier / Concaténer',
    short: 'strcpy تنسخ نصاً داخل مصفوفة، و strcat تدمج نصاً في نهاية نص آخر.',
    syntax: 'strcpy(dest, src);  strcat(dest, suite);',
    cEx: 'char s[30];\nstrcpy(s, "Hello ");\nstrcat(s, "World");',
    algoEx: 's <- "Hello " + "World"',
    cEx2: '// بناء الاسم الكامل من الاسم واللقب\nchar full[60] = "Amine";\nstrcat(full, " ");\nstrcat(full, "Benali");\nprintf("%s\\n", full);',
    tip: 'تأكد دائماً أن حجم المصفوفة الوجهة (dest) يكفي للنص الناتج + المحرف \\0.'
  },
  {
    cmd: 'strcmp', cat: 'strings', algo: 'Comparer(s1, s2)',
    short: 'يقارن سلسلتين نصيتين حرفاً بحرف؛ يرجع 0 إذا تطابقا تماماً.',
    syntax: 'if (strcmp(s1, s2) == 0)',
    cEx: 'if (strcmp(pass, "1234") == 0) printf("دخول\\n");',
    algoEx: 'Si pass = "1234" Alors Ecrire("دخول") FinSi',
    cEx2: '// ترتيب اسمين أبجدياً\nchar a[] = "Karim", b[] = "Amine";\nif (strcmp(a, b) > 0) printf("%s يأتي قبل %s\\n", b, a);',
    tip: 'إذا رجع عدداً سالباً فالأول أصغر أبجدياً، وإذا موجباً فالأول أكبر.'
  },
  {
    cmd: 'tolower / toupper', cat: 'strings', algo: 'Minuscule / Majuscule',
    short: 'دوال من مكتبة <ctype.h> لتحويل الحرف بين الصغير والكبير بسهولة.',
    syntax: 'char c = toupper(\'a\'); // \'A\'',
    cEx: 'printf("%c\\n", toupper(\'c\')); // C',
    algoEx: 'Ecrire(Majuscule(\'c\'))',
    cEx2: '// تحويل جملة كاملة إلى حروف كبيرة\nchar s[] = "langage c";\nfor (int i = 0; s[i]; i++) s[i] = toupper(s[i]);\nputs(s); // LANGAGE C',
    tip: 'تضم <ctype.h> أيضاً دوال مفيدة مثل isdigit(c) و isalpha(c).'
  },

  // === 10. الرياضيات والموجهات ===
  {
    cmd: 'sqrt / pow / fabs', cat: 'pre', algo: 'Racine / Puissance / Abs',
    short: 'دوال مكتبة <math.h>: الجذر التربيعي sqrt، القوة pow(a,b)، والقيمة المطلقة fabs.',
    syntax: 'double r = sqrt(25.0);  double p = pow(2, 8);',
    cEx: 'printf("جذر 16 = %.1f\\n", sqrt(16.0));',
    algoEx: 'Ecrire(Racine(16))',
    cEx2: '// حساب المسافة الإقليدية بين نقطتين (x1,y1) و (x2,y2)\ndouble d = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));',
    tip: 'على نظام Linux عند الترجمة بـ gcc أضف الراية -lm لربط مكتبة الرياضيات.'
  },
  {
    cmd: 'rand / srand', cat: 'pre', algo: 'Aléatoire(min, max)',
    short: 'توليد أعداد عشوائية من <stdlib.h> مع تهيئة البذرة بالوقت الحالي time(NULL).',
    syntax: 'srand(time(NULL));  int r = rand() % 100;',
    cEx: 'srand(time(NULL));\nint d = (rand() % 6) + 1; // نرد 1..6',
    algoEx: 'd <- Aleatoire(1, 6)',
    cEx2: '// توليد رقم عشوائي محصور بين min و max\nint min = 10, max = 50;\nint x = min + rand() % (max - min + 1);',
    tip: 'بدون srand(time(NULL)) ستعطيك rand() نفس الأرقام في كل تشغيل!'
  },
  {
    cmd: '#include', cat: 'pre', algo: 'Importer Bibliothèque',
    short: 'يُضمّن ملفات المكتبات القياسية في أعلى البرنامج قبل الترجمة.',
    syntax: '#include <stdio.h>',
    cEx: '#include <stdio.h>\n#include <stdlib.h>',
    algoEx: '// استيراد المكتبات اللازمة',
    cEx2: '// الفرق بين < > للمكتبات القياسية و " " لملفاتك الخاصة\n#include <stdio.h>\n#include "mes_fonctions.h"',
    tip: 'لا تضع فاصلة منقوطة ; في نهاية أسطر التوجيهات التي تبدأ بـ #.'
  },
  {
    cmd: '#define', cat: 'pre', algo: 'Constante / Macro',
    short: 'يُعرّف ثابتاً أو ماكرو يستبدله المعالج المسبق نصياً قبل الترجمة.',
    syntax: '#define MAX 100',
    cEx: '#define MAX 100\nint T[MAX];',
    algoEx: 'Constante MAX = 100',
    cEx2: '// تعريف ماكرو دالي لحساب الأكبر\n#define MAX2(a, b) (((a) > (b)) ? (a) : (b))\nprintf("%d\\n", MAX2(12, 25)); // 25',
    tip: 'احرص دائماً على وضع أقواس حول معاملات الماكرو مثل ((a) > (b)) لتجنب أخطاء الأولوية.'
  }
];
