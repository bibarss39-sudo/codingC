/* Complete Trilingual Engine (AR / FR / EN) for All 12 Pages — Algorithmes & C */
(function () {
  const DICT = {
    // Global Navigation, Back Bar, Bottom Nav, Pager, Footer
    'رجوع': { fr: 'Retour', en: 'Back' },
    'الرئيسية': { fr: 'Accueil', en: 'Home' },
    'الدروس': { fr: 'Cours', en: 'Lessons' },
    'القاموس': { fr: 'Dico C', en: 'Dict' },
    'الأمثلة': { fr: 'Exemples', en: 'Examples' },
    'الذكاء AI': { fr: 'IA', en: 'AI Tutor' },
    '→ الصفحة السابقة': { fr: '← Page précédente', en: '← Previous Page' },
    'الصفحة التالية ←': { fr: 'Page suivante →', en: 'Next Page →' },
    'بوابة الأساسيات': { fr: 'Portail des Bases', en: 'Basics Portal' },
    'الدروس التفاعلية': { fr: 'Cours Interactifs', en: 'Interactive Lessons' },
    'قاموس C ↔ Algo': { fr: 'Dico C ↔ Algo', en: 'C ↔ Algo Dictionary' },
    'مكتبة الأمثلة': { fr: 'Bibliothèque d\'Exemples', en: 'Code Examples' },
    'التمارين والمختبر': { fr: 'Exercices & Labo', en: 'Practice & Lab' },
    'المساعد الذكي AI': { fr: 'Assistant IA', en: 'AI Tutor' },
    'اختصارات Code::Blocks': { fr: 'Raccourcis Code::Blocks', en: 'Code::Blocks Shortcuts' },
    'أدوات التطوير': { fr: 'Outils & IDEs', en: 'Dev Tools' },
    'المصادر والمراجع': { fr: 'Ressources & Références', en: 'Resources' },
    'الشروحات المرئية': { fr: 'Cours Vidéo', en: 'Video Tutorials' },
    'تواصل معنا': { fr: 'Contactez-nous', en: 'Contact Us' },

    // index.html
    'تصميم هادئ للتركيز • Algorithmes & C': { fr: 'Design calme pour la concentration • Algorithmes & C', en: 'Calm Focus Design • Algorithms & C' },
    'تعلّم لغة C والخوارزميات بفهم عميق وواجهة سهلة': { fr: 'Apprenez le langage C et l\'algorithmique avec clarté', en: 'Master C Programming & Algorithms with Clarity' },
    'منصة متكاملة لطلاب الإعلام الآلي: 18 درساً مشروحاً سطراً بسطر بتشبيهات واقعية، قاموس شامل لأوامر لغة C وتحويلها للخوارزميات، مكتبة 26 مثالاً عملياً، محاكي ذاكرة ومصحح أكواد، ومساعد الذكاء الاصطناعي C-Mentor.': {
      fr: 'Plateforme complète pour étudiants en informatique : 18 cours détaillés ligne par ligne, dictionnaire C ↔ Algorithme, 26 exemples pratiques, visualiseur RAM, analyseur d\'erreurs et assistant IA C-Mentor.',
      en: 'Complete CS student platform: 18 line-by-line lessons with analogies, C ↔ Algorithm dictionary, 26 practical examples, live RAM visualizer, bug analyzer, and C-Mentor AI.'
    },
    'ابدأ الدروس المشروحة': { fr: 'Commencer les cours', en: 'Start Lessons' },
    'قاموس C ↔ Algorithme': { fr: 'Dictionnaire C ↔ Algorithme', en: 'C ↔ Algorithm Dict' },
    'مكتبة 26 مثالاً': { fr: '26 Exemples C', en: '26 C Examples' },
    'الدروس المكتملة': { fr: 'Cours terminés', en: 'Lessons Completed' },
    'أمر في قاموس C↔Algo': { fr: 'Commandes C↔Algo', en: 'C↔Algo Commands' },
    'مثال كود عملي': { fr: 'Exemples pratiques', en: 'Practical Examples' },
    'نقاط الخبرة XP': { fr: 'Points XP', en: 'XP Points' },
    'ابدأ من القسم الذي تحتاجه': { fr: 'Choisissez votre section', en: 'Jump Into Any Section' },
    '18 درساً عميقاً': { fr: '18 Cours Détaillés', en: '18 Deep Lessons' },
    'تشبيه واقعي، شرح كل سطر برمجي، التحويل للخوارزمية، الأخطاء الشائعة وتمرين محلول.': {
      fr: 'Analogies réelles, explication ligne par ligne, conversion en algorithme, erreurs fréquentes et exercice corrigé.',
      en: 'Real-world analogies, line-by-line code walkthroughs, algorithm mapping, common pitfalls, and solved practice.'
    },
    'جديد': { fr: 'Nouveau', en: 'New' },
    'قاموس أوامر C ↔ الخوارزميات': { fr: 'Dictionnaire C ↔ Algorithmes', en: 'C ↔ Algorithms Dictionary' },
    'شرح مبسط لكل أمر (scanf، printf، for، malloc...) مع كيفية استعماله ومقابله في Algorithme.': {
      fr: 'Explication simple de chaque commande (scanf, printf, for, malloc...) avec syntaxe et équivalent en Algorithme.',
      en: 'Simple guide to every C command (scanf, printf, for, malloc...) with usage examples and Algorithm equivalents.'
    },
    '26 برنامجاً': { fr: '26 Programmes', en: '26 Programs' },
    'مكتبة الأمثلة والأكواد': { fr: 'Bibliothèque d\'Exemples', en: 'Code Examples Library' },
    'أكواد جاهزة ومشروحة مع الخوارزمية والتعقيد الزمني Big-O والمخرجات المتوقعة.': {
      fr: 'Codes C prêts et expliqués avec algorithme, complexité Big-O et résultat attendu.',
      en: 'Ready-to-run C programs with pseudocode, Big-O complexity, and expected output.'
    },
    'تطبيق عملي': { fr: 'Pratique', en: 'Hands-on' },
    'التمارين، محاكي الذاكرة والمختبر': { fr: 'Quiz, Visualiseur RAM & Labo', en: 'Quizzes, RAM Visualizer & Lab' },
    'اختبارات تفاعلية، تتبع المؤشرات في RAM، ومصحح فوري لأخطاء كود C.': {
      fr: 'Quiz interactifs, suivi des pointeurs en RAM et détecteur instantané d\'erreurs C.',
      en: 'Interactive quizzes, step-by-step RAM pointer tracer, and instant C bug detector.'
    },
    'المساعد الذكي C-Mentor': { fr: 'Assistant IA C-Mentor', en: 'C-Mentor AI Tutor' },
    'يجيب بالعربية والدارجة والفرنسية والإنجليزية، يصحح أكوادك ويقارن المفاهيم.': {
      fr: 'Comprend AR/FR/EN, corrige votre code C, compare les concepts et vous interroge.',
      en: 'Understands AR/FR/EN, debugs your C code, compares concepts, and quizzes you.'
    },
    'خطة التعلم': { fr: 'Plan d\'étude', en: 'Study Roadmap' },
    'بوابة الأساسيات والمراجع': { fr: 'Portail des Bases & Ressources', en: 'Basics Portal & Resources' },
    'خريطة تعلم واضحة + اختصارات Code::Blocks وأدوات التطوير والشروحات المرئية.': {
      fr: 'Feuille de route claire + raccourcis Code::Blocks, outils de développement et vidéos.',
      en: 'Clear learning roadmap + Code::Blocks shortcuts, dev tools, and video tracks.'
    },

    // asasi.html
    'بوابة الأساسيات • C Language Portal': { fr: 'Portail des Bases • Langage C', en: 'Basics Portal • C Language' },
    'خطة تعلم لغة C من الصفر في 4 خطوات': { fr: 'Plan d\'apprentissage du C en 4 étapes', en: '4-Step C Learning Roadmap' },
    'صُممت هذه البوابة لمساعدة الطالب على ترتيب أفكاره وعدم التشتت بين المصادر. اتبع المراحل بالترتيب:': {
      fr: 'Ce portail aide les étudiants à structurer leur apprentissage étape par étape sans dispersion :',
      en: 'This portal helps students follow a structured path from zero to mastery without overwhelm:'
    },
    'المرحلة 1': { fr: 'Étape 1', en: 'Stage 1' },
    'المرحلة 2': { fr: 'Étape 2', en: 'Stage 2' },
    'المرحلة 3': { fr: 'Étape 3', en: 'Stage 3' },
    'المرحلة 4': { fr: 'Étape 4', en: 'Stage 4' },
    'الأساسيات والمنطق الخوارزمي': { fr: 'Bases & Logique Algorithmique', en: 'Basics & Algorithmic Logic' },
    'الدوال، المصفوفات والسلاسل النصية': { fr: 'Fonctions, Tableaux & Chaînes', en: 'Functions, Arrays & Strings' },
    'المؤشرات والذاكرة الديناميكية': { fr: 'Pointeurs & Mémoire Dynamique', en: 'Pointers & Dynamic Memory' },
    'الهياكل، الملفات وهياكل البيانات': { fr: 'Structures, Fichiers & Structures de Données', en: 'Structs, Files & Data Structures' },
    'افتح دروس المستوى 1': { fr: 'Ouvrir Niveau 1', en: 'Open Level 1' },
    'افتح دروس المستوى 2': { fr: 'Ouvrir Niveau 2', en: 'Open Level 2' },
    'دروس المؤشرات': { fr: 'Cours Pointeurs', en: 'Pointer Lessons' },
    'محاكي الذاكرة RAM': { fr: 'Visualiseur RAM', en: 'RAM Visualizer' },
    'دروس المستوى 4': { fr: 'Ouvrir Niveau 4', en: 'Open Level 4' },
    'أمثلة هياكل البيانات': { fr: 'Exemples Structures', en: 'Data Structure Examples' },
    'روابط سريعة للطالب': { fr: 'Liens rapides pour l\'étudiant', en: 'Quick Student Links' },
    'برامج وتطبيقات البرمجة': { fr: 'Outils & IDEs', en: 'Coding Apps & IDEs' },
    'المصادر والقنوات': { fr: 'Ressources & Chaînes', en: 'Resources & Channels' },
    'اسأل C-Mentor AI': { fr: 'Demander à C-Mentor IA', en: 'Ask C-Mentor AI' },

    // home.html (Lessons)
    'منهج متكامل • 18 درساً مشروحاً بعمق': { fr: 'Programme complet • 18 cours approfondis', en: 'Complete Curriculum • 18 In-Depth Lessons' },
    'الدروس التفاعلية المتدرجة في لغة C والخوارزميات': { fr: 'Cours Interactifs Progressifs : Langage C & Algorithmique', en: 'Progressive Interactive C & Algorithms Lessons' },
    'تشبيه واقعي، قواعد واضحة، شرح الكود سطراً بسطر، التحويل للخوارزمية، أخطاء شائعة، وتمرين محلول.': {
      fr: 'Analogie concrète, règles claires, code expliqué ligne par ligne, algorithme, erreurs fréquentes et exercice corrigé.',
      en: 'Real-world analogy, clear rules, line-by-line code explanation, algorithm mapping, pitfalls, and solved exercise.'
    },
    'تقدمك في المنهج': { fr: 'Votre progression', en: 'Your Progress' },
    'جميع الدروس (18)': { fr: 'Tous les cours (18)', en: 'All Lessons (18)' },
    'المستوى 1: الأساسيات': { fr: 'Niveau 1 : Bases', en: 'Level 1: Basics' },
    'المستوى 2: الدوال والمصفوفات': { fr: 'Niveau 2 : Fonctions & Tableaux', en: 'Level 2: Functions & Arrays' },
    'المستوى 3: المؤشرات والذاكرة': { fr: 'Niveau 3 : Pointeurs & Mémoire', en: 'Level 3: Pointers & Memory' },
    'المستوى 4: الهياكل والبيانات': { fr: 'Niveau 4 : Structures & Données', en: 'Level 4: Structs & Data' },
    'اختر الدرس مباشرة:': { fr: 'Choisir un cours :', en: 'Select a lesson:' },
    '→ الدرس السابق': { fr: '← Cours précédent', en: '← Prev Lesson' },
    'الدرس التالي ←': { fr: 'Cours suivant →', en: 'Next Lesson →' },
    '1. الفهم والتشبيه': { fr: '1. Concept & Analogie', en: '1. Concept & Analogy' },
    '2. شرح الكود سطراً بسطر': { fr: '2. Code ligne par ligne', en: '2. Line-by-Line Code' },
    '3. الخوارزمية ↔ C': { fr: '3. Algorithme ↔ C', en: '3. Algorithm ↔ C' },
    '4. أخطاء شائعة': { fr: '4. Erreurs fréquentes', en: '4. Common Mistakes' },
    '5. تمرين محلول': { fr: '5. Exercice corrigé', en: '5. Solved Practice' },
    'هدف هذا الدرس:': { fr: 'Objectif du cours :', en: 'Lesson Goal:' },
    'تخيّل الفكرة ببساطة (تشبيه واقعي):': { fr: 'Comprendre simplement (Analogie) :', en: 'Simple Real-World Analogy:' },
    'أهم القواعد التي تحتاج فهمها:': { fr: 'Règles essentielles à retenir :', en: 'Key Rules to Master:' },
    'الكود التطبيقي للدرس:': { fr: 'Code d\'application :', en: 'Lesson Code Example:' },
    'نسخ الكود': { fr: 'Copier le code', en: 'Copy Code' },
    'تفسير الكود سطراً بسطر:': { fr: 'Explication ligne par ligne :', en: 'Line-by-Line Breakdown:' },
    'الخطأ الشائع (تجنبه):': { fr: 'Erreur fréquente (à éviter) :', en: 'Common Mistake (Avoid):' },
    'الكتابة الصحيحة:': { fr: 'Code correct :', en: 'Correct Code:' },
    'التمرين التطبيقي:': { fr: 'Exercice pratique :', en: 'Practice Challenge:' },
    'إظهار تلميح ذكي قبل رؤية الحل': { fr: 'Afficher un indice', en: 'Show Hint' },
    'إظهار الحل النموذجي الكامل بلغة C': { fr: 'Afficher la solution complète en C', en: 'Show Full C Solution' },
    'القسم السابق': { fr: 'Étape précédente', en: 'Prev Step' },
    'القسم التالي': { fr: 'Étape suivante', en: 'Next Step' },
    'إتمام الدرس (+50 XP)': { fr: 'Marquer terminé (+50 XP)', en: 'Mark Complete (+50 XP)' },
    'درس مكتمل ✓': { fr: 'Cours terminé ✓', en: 'Completed ✓' },

    // keywords.html
    '50 أمراً وأكثر من 100 مثال كود • قاموس C ↔ Algorithme': { fr: '50 commandes & +100 exemples • Dictionnaire C ↔ Algorithme', en: '50 Commands & 100+ Snippets • C ↔ Algorithm Dict' },
    'قاموس أوامر وكلمات لغة C وتحويلها للخوارزميات': { fr: 'Dictionnaire des commandes C & équivalents Algorithmiques', en: 'C Language Commands & Algorithm Dictionary' },
    'كل أمر وكلمة في لغة C مع شرح مبسّط، الصيغة العامة، مثال أساسي مع تحويله للخوارزمية، ومثال تطبيقي متقدم جاهز للنسخ.': {
      fr: 'Chaque commande C expliquée simplement avec syntaxe, exemple de base + algorithme, et exemple avancé prêt à copier.',
      en: 'Every essential C command explained clearly with syntax, basic example + pseudocode, and an advanced practical snippet.'
    },
    'عرض جدول التحويل السريع': { fr: 'Afficher le tableau récapitulatif', en: 'Show Quick Conversion Table' },
    'عرض البطاقات التفصيلية': { fr: 'Afficher les cartes détaillées', en: 'Show Detailed Cards' },
    'الكل (50)': { fr: 'Tous (50)', en: 'All (50)' },
    'الإدخال والإخراج': { fr: 'Entrées / Sorties', en: 'Input / Output' },
    'أنواع البيانات': { fr: 'Types', en: 'Data Types' },
    'المعاملات': { fr: 'Opérateurs', en: 'Operators' },
    'الشروط': { fr: 'Conditions', en: 'Conditions' },
    'الحلقات': { fr: 'Boucles', en: 'Loops' },
    'الدوال': { fr: 'Fonctions', en: 'Functions' },
    'المؤشرات والذاكرة': { fr: 'Pointeurs & Mémoire', en: 'Pointers & Memory' },
    'الهياكل والملفات': { fr: 'Structures & Fichiers', en: 'Structs & Files' },
    'النصوص': { fr: 'Chaînes', en: 'Strings' },
    'الرياضيات و #': { fr: 'Maths & #', en: 'Math & Macros' },
    'مثال أساسي + الخوارزمية': { fr: 'Exemple simple + Algo', en: 'Basic + Algorithm' },
    'مثال تطبيقي متقدم': { fr: 'Exemple avancé', en: 'Advanced Example' },
    'كود لغة C': { fr: 'Code C', en: 'C Code' },
    'المقابل في الخوارزمية': { fr: 'Équivalent Algorithme', en: 'Algorithm Equivalent' },
    'تطبيق عملي إضافي بلغة C': { fr: 'Application pratique en C', en: 'Practical C Example' },
    'جدول التحويل السريع: لغة C ↔ الخوارزميات (Algorithme)': { fr: 'Tableau de conversion rapide : C ↔ Algorithme', en: 'Quick Conversion Table: C ↔ Algorithm' },
    'الأمر في C': { fr: 'Commande C', en: 'C Command' },
    'الوظيفة باختصار': { fr: 'Rôle en bref', en: 'Summary' },
    'الصيغة العامة': { fr: 'Syntaxe', en: 'Syntax' },

    // amtla.html
    'مكتبة الأمثلة والأكواد العملية (26 برنامج C)': { fr: 'Bibliothèque d\'Exemples Pratiques (26 Programmes C)', en: 'Practical C Code Examples Library (26 Programs)' },
    'ابحث بالاسم أو الكود، شاهد الخوارزمية والمخرجات، وانسخ الكود بنقرة واحدة.': {
      fr: 'Recherchez par nom ou code, consultez l\'algorithme et le résultat, puis copiez en un clic.',
      en: 'Search by name or code, inspect the algorithm and output, and copy with one click.'
    },
    'الكل (26)': { fr: 'Tous (26)', en: 'All (26)' },
    'الأساسيات': { fr: 'Bases', en: 'Basics' },
    'المصفوفات': { fr: 'Tableaux', en: 'Arrays' },
    'المؤشرات': { fr: 'Pointeurs', en: 'Pointers' },
    'هياكل البيانات والفرز': { fr: 'Structures & Tri', en: 'Data Structures & Sort' },
    'عرض الكود والخوارزمية': { fr: 'Voir Code & Algo', en: 'View Code & Algo' },
    'نسخ': { fr: 'Copier', en: 'Copy' },
    'المخرجات المتوقعة': { fr: 'Sortie attendue', en: 'Expected Output' },
    'كود لغة C الكامل': { fr: 'Code C complet', en: 'Full C Code' },
    'فحصه في المختبر': { fr: 'Tester dans le Labo', en: 'Check in Lab' },

    // t.html
    'تطبيق عملي تفاعلي': { fr: 'Pratique Interactive', en: 'Interactive Practice' },
    'التمارين، محاكي الذاكرة ومختبر فحص الأخطاء': { fr: 'Quiz, Visualiseur RAM & Analyseur d\'Erreurs', en: 'Quizzes, RAM Visualizer & Bug Lab' },
    'اختبر فهمك، تتبّع المؤشرات والمكدس داخل RAM، وافحص أكواد C لاكتشاف الأخطاء الشائعة فوراً.': {
      fr: 'Testez vos connaissances, visualisez la RAM pas à pas et détectez les bugs C instantanément.',
      en: 'Test your understanding, trace pointers & call stack in RAM, and detect C bugs instantly.'
    },
    '1. اختبارات تفاعلية': { fr: '1. Quiz Interactifs', en: '1. Interactive Quizzes' },
    '2. محاكي الذاكرة RAM': { fr: '2. Visualiseur RAM', en: '2. RAM Visualizer' },
    '3. مختبر فحص كود C': { fr: '3. Analyseur de Code C', en: '3. C Bug Analyzer' },
    '1. المؤشرات (& و *)': { fr: '1. Pointeurs (& et *)', en: '1. Pointers (& and *)' },
    '2. التبديل بالمؤشرات (Swap)': { fr: '2. Échange (Swap)', en: '2. Swap with Pointers' },
    '3. الاستدعاء الذاتي (Call Stack)': { fr: '3. Récursivité (Pile)', en: '3. Recursion (Call Stack)' },
    'السابق': { fr: 'Précédent', en: 'Prev' },
    'التالي': { fr: 'Suivant', en: 'Next' },
    'تشغيل تلقائي': { fr: 'Lecture auto', en: 'Auto Play' },
    'إيقاف مؤقت': { fr: 'Pause', en: 'Pause' },
    'إعادة': { fr: 'Réinitialiser', en: 'Reset' },
    'خلايا الذاكرة الحية (RAM Stack)': { fr: 'Cellules Mémoire (RAM Stack)', en: 'Live RAM Memory Cells' },
    'محرر كود C (main.c)': { fr: 'Éditeur C (main.c)', en: 'C Code Editor (main.c)' },
    'فحص الأخطاء الآن': { fr: 'Analyser le code', en: 'Analyze Bugs Now' },
    'تقرير مصحح الأخطاء الذكي': { fr: 'Rapport d\'analyse statique', en: 'Static Bug Analysis Report' },

    // nn.html
    'المساعد الذكي C-Mentor AI 2.0': { fr: 'Assistant IA C-Mentor 2.0', en: 'C-Mentor AI 2.0 Tutor' },
    'يفهم العربية والدارجة والفرنسية والإنجليزية — يشرح المفاهيم، يصحح أكواد C، يقارن المفاهيم، ويختبرك.': {
      fr: 'Comprend AR/FR/EN — explique les concepts, corrige votre code C, compare les notions et vous teste.',
      en: 'Understands AR/FR/EN — explains concepts, debugs pasted C code, compares topics, and quizzes you.'
    },
    'محادثة جديدة': { fr: 'Nouvelle discussion', en: 'New Chat' },
    'شرح المؤشرات': { fr: 'Expliquer Pointeurs', en: 'Explain Pointers' },
    'القيمة vs المرجع': { fr: 'Valeur vs Référence', en: 'Value vs Reference' },
    'القوائم المترابطة': { fr: 'Listes Chaînées', en: 'Linked Lists' },
    'حل Segmentation Fault': { fr: 'Corriger SegFault', en: 'Fix SegFault' },
    'اختبرني الآن': { fr: 'Teste-moi !', en: 'Quiz Me Now' },
    'إرسال': { fr: 'Envoyer', en: 'Send' },

    // i5.html, apps.html, ms.html, y.html, contact.html
    'المرجع السريع • Shortcuts & Symbols': { fr: 'Aide-mémoire • Raccourcis & Symboles', en: 'Quick Reference • Shortcuts & Symbols' },
    'اختصارات Code::Blocks ورموز لغة C': { fr: 'Raccourcis Code::Blocks & Spécificateurs C', en: 'Code::Blocks Shortcuts & C Specifiers' },
    'أهم الاختصارات التي توفر وقتك أثناء البرمجة مع جدول محددات التنسيق ورموز الهروب.': {
      fr: 'Les raccourcis essentiels pour coder plus vite et le tableau complet des spécificateurs printf/scanf.',
      en: 'Essential IDE shortcuts to code faster plus printf/scanf format specifiers and escape sequences.'
    },
    'الاختصار': { fr: 'Raccourci', en: 'Shortcut' },
    'الوظيفة': { fr: 'Action', en: 'Action' },
    'الرمز': { fr: 'Symbole', en: 'Symbol' },
    'النوع / الوظيفة': { fr: 'Type / Rôle', en: 'Type / Purpose' },
    'مثال': { fr: 'Exemple', en: 'Example' },
    'محددات التنسيق (printf / scanf) ورموز الهروب': { fr: 'Spécificateurs (printf / scanf) & Échappement', en: 'Format Specifiers & Escape Sequences' },
    'أدوات التطوير • IDEs': { fr: 'Outils de Développement • IDEs', en: 'Development Tools • IDEs' },
    'أفضل برامج وتطبيقات كتابة وتشغيل لغة C': { fr: 'Meilleurs Logiciels et Applications pour coder en C', en: 'Best IDEs & Apps for C Programming' },
    'اختر البيئة المناسبة لجهازك (حاسوب أو هاتف أو متصفح) وابدأ التطبيق العملي فوراً.': {
      fr: 'Choisissez l\'environnement adapté à votre PC, téléphone ou navigateur pour pratiquer immédiatement.',
      en: 'Pick the right IDE for your PC, smartphone, or browser and start coding right away.'
    },
    'أفضل المصادر الموثوقة لتعلم الخوارزميات ولغة C': { fr: 'Meilleures Ressources pour l\'Algorithmique et le C', en: 'Top Trusted Resources for C & Algorithms' },
    'مسارات الفيديو المقترحة للطلاب': { fr: 'Parcours Vidéo Recommandés', en: 'Recommended Video Learning Tracks' },
    'مشاهدة على YouTube': { fr: 'Regarder sur YouTube', en: 'Watch on YouTube' },
    'أرسل اقتراحك أو استفسارك': { fr: 'Envoyez votre suggestion ou question', en: 'Send Your Feedback or Question' },
    'إرسال الرسالة': { fr: 'Envoyer le message', en: 'Send Message' },
    'مستودع GitHub': { fr: 'Dépôt GitHub', en: 'GitHub Repo' }
  };

  const PLACEHOLDERS = {
    'ابحث عن أي أمر في C أو الخوارزمية (مثلاً: scanf, Lire, malloc, strcmp, for, struct)...': {
      fr: 'Rechercher une commande C ou Algo (ex: scanf, Lire, malloc, for, struct)...',
      en: 'Search any C command or Algorithm keyword (e.g., scanf, malloc, for, struct)...'
    },
    'ابحث في الأمثلة (مثلاً: malloc, tri, palindrome, matrice, linked)...': {
      fr: 'Rechercher un exemple (ex: malloc, tri, palindrome, matrice, linked)...',
      en: 'Search examples (e.g., malloc, sort, palindrome, matrix, linked)...'
    },
    'اكتب سؤالك هنا أو الصق كود C لتصحيحه...': {
      fr: 'Posez votre question ou collez un code C à corriger...',
      en: 'Ask your question or paste C code to debug...'
    },
    'الاسم الكامل': { fr: 'Nom complet', en: 'Full Name' },
    'البريد الإلكتروني': { fr: 'Adresse e-mail', en: 'Email Address' },
    'اكتب رسالتك أو اقتراحك هنا...': { fr: 'Écrivez votre message ou suggestion ici...', en: 'Write your message or suggestion here...' }
  };

  const CODE_TERMS = [
    ['أدخل عمرك:', { fr: 'Entrez votre âge :', en: 'Enter your age:' }],
    ['العمر:', { fr: 'Âge :', en: 'Age:' }],
    ['المعدل:', { fr: 'Moyenne :', en: 'Average:' }],
    ['المجموع =', { fr: 'Somme =', en: 'Sum =' }],
    ['النتيجة =', { fr: 'Résultat =', en: 'Result =' }],
    ['الأكبر =', { fr: 'Max =', en: 'Max =' }],
    ['الطول:', { fr: 'Longueur :', en: 'Length:' }],
    ['الطول =', { fr: 'Longueur =', en: 'Length =' }],
    ['الفهرس =', { fr: 'Indice =', en: 'Index =' }],
    ['ممتاز', { fr: 'Très Bien', en: 'Excellent' }],
    ['ناجح', { fr: 'Admis', en: 'Passed' }],
    ['راسب', { fr: 'Ajourné', en: 'Failed' }],
    ['موجب', { fr: 'Positif', en: 'Positive' }],
    ['سالب', { fr: 'Négatif', en: 'Negative' }],
    ['صفر', { fr: 'Zéro', en: 'Zero' }],
    ['قسمة صحيحة:', { fr: 'Division entière :', en: 'Integer div:' }],
    ['قسمة عشرية:', { fr: 'Division réelle :', en: 'Float div:' }],
    ['الباقي:', { fr: 'Reste :', en: 'Remainder:' }],
    ['عدد أولي', { fr: 'Nombre premier', en: 'Prime number' }],
    ['غير أولي', { fr: 'Non premier', en: 'Not prime' }],
    ['أهلاً بك!', { fr: 'Bienvenue !', en: 'Welcome!' }],
    ['الاسمان متطابقان!', { fr: 'Les noms sont identiques !', en: 'Names match!' }],
    ['حالة التوقف', { fr: 'Cas de base', en: 'Base case' }],
    ['مؤشر فارغ', { fr: 'Pointeur nul', en: 'Null pointer' }],
    ['سنة كبيسة', { fr: 'Année bissextile', en: 'Leap year' }],
    ['سنة عادية', { fr: 'Année normale', en: 'Regular year' }],
    ['الأول:', { fr: 'Premier :', en: 'Top student:' }],
    ['أكبر قيمة =', { fr: 'Valeur max =', en: 'Max value =' }],
    ['مجموع القطر الرئيسي =', { fr: 'Somme diagonale =', en: 'Main diagonal sum =' }],
    ['عدد العناصر =', { fr: 'Nombre d\'éléments =', en: 'Element count =' }],
    ['العنصر', { fr: 'Élément', en: 'Element' }]
  ];

  function translateTree(lang) {
    // 1. Fast single-pass UI text translation (never touches scripts/styles/textarea)
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, textarea')) continue;

      const inCode = Boolean(parent.closest('pre, code'));
      const raw = node.nodeValue;
      const trimmed = raw.trim();
      if (!trimmed) continue;

      if (inCode) {
        if (!node._origCode) node._origCode = raw;
        if (lang === 'ar') {
          if (raw !== node._origCode) node.nodeValue = node._origCode;
        } else {
          let updated = node._origCode;
          for (const [ar, map] of CODE_TERMS) {
            if (updated.includes(ar)) updated = updated.split(ar).join(map[lang]);
          }
          if (raw !== updated) node.nodeValue = updated;
        }
        continue;
      }

      if (!node._origAr) node._origAr = trimmed;
      const key = node._origAr;

      if (lang === 'ar') {
        if (trimmed !== key) node.nodeValue = raw.replace(trimmed, key);
      } else if (DICT[key] && DICT[key][lang]) {
        const target = DICT[key][lang];
        if (trimmed !== target) node.nodeValue = raw.replace(trimmed, target);
      }
    }

    // 2. Translate input placeholders
    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(el => {
      if (!el.dataset.origPh) el.dataset.origPh = el.placeholder;
      const key = el.dataset.origPh;
      const nextPh = (lang === 'ar') ? key : ((PLACEHOLDERS[key] && PLACEHOLDERS[key][lang]) || key);
      if (el.placeholder !== nextPh) el.placeholder = nextPh;
    });

    // 3. Update footer ONLY if changed (prevents any redundant DOM write)
    const footer = document.getElementById('siteFooter');
    if (footer && footer.dataset.langRendered !== lang) {
      footer.dataset.langRendered = lang;
      if (lang === 'fr') footer.innerHTML = 'Algorithmes &amp; C — Plateforme éducative complète • <strong>bibarss39</strong> • Design calme pour apprendre efficacement';
      else if (lang === 'en') footer.innerHTML = 'Algorithms &amp; C — Complete CS Learning Platform • <strong>bibarss39</strong> • Calm focus design for deep understanding';
      else footer.innerHTML = 'Algorithmes &amp; C — منصة تعليمية متكاملة لطلاب لغة C • <strong>bibarss39</strong> • تصميم هادئ للتركيز والفهم العميق';
    }
  }

  let scheduled = false;
  window.applySiteTranslation = function () {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      translateTree((window.appState && window.appState.lang) || 'ar');
    });
  };

  // Hook into renderSharedChrome so clicking AR / FR / EN translates once immediately
  const prevRender = window.renderSharedChrome;
  if (typeof prevRender === 'function') {
    window.renderSharedChrome = function (activePage) {
      prevRender(activePage);
      window.applySiteTranslation();
    };
  }

  // Re-translate cleanly ONLY on user clicks/changes (ZERO MutationObserver loop!)
  document.addEventListener('DOMContentLoaded', () => {
    window.applySiteTranslation();
    document.addEventListener('click', (e) => {
      if (window.appState && window.appState.lang !== 'ar' && e.target.closest('button, select, summary')) {
        setTimeout(() => window.applySiteTranslation(), 30);
      }
    });
    document.addEventListener('change', () => {
      if (window.appState && window.appState.lang !== 'ar') {
        setTimeout(() => window.applySiteTranslation(), 30);
      }
    });
  });
})();
