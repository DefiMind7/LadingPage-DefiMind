/* ============================================================
   DeFiMind · Idiomas

   O português está escrito directamente no HTML e serve de base.
   Ao arrancar guardamos essa versão em memória, para se poder
   voltar a ela, e traduzimos para o idioma de quem está a visitar.
   ============================================================ */
(function () {
  'use strict';

  var SUPPORTED = ['pt', 'en', 'es'];
  var STORAGE = 'defimind:lang';

  var DICT = {

    /* ---------------------------------------------- INGLÊS -- */
    en: {
      'a11y.skip': 'Skip to content',
      'a11y.lang': 'Language',

      'nav.freedom': 'Freedom',
      'nav.security': 'Security',
      'nav.how': 'How it works',
      'nav.plans': 'Plans',
      'nav.neurex': 'Neurex',
      'nav.faq': 'Questions',
      'nav.cta': 'Join waitlist',

      'hero.badge': 'Wherever you are, in the currency you use',
      'hero.title': 'The bank that <span class="text-gradient">never touches</span> your money.',
      'hero.sub': 'Your savings earn every single day, on their own, protected by the same technology banks use to guard millions. One thing sets it apart: the key is yours and nobody else can reach it.',
      'hero.cta1': 'Join the waitlist',
      'hero.cta2': 'See how it works',
      'hero.t1': 'No opening fees',
      'hero.t2': 'Withdraw whenever you want',
      'hero.t3': 'See your balance in your currency',

      'app.hello': 'Hi, Ana',
      'app.balance': 'Total balance',
      'app.month': '+$38.14 this month',
      'app.deposit': 'Deposit',
      'app.withdraw': 'Withdraw',
      'app.invest': 'Invest',
      'app.plan': 'Balanced plan',
      'app.year': '/yr',
      'app.since': 'Earning since 12 March',
      'app.neurex': 'I rebalanced your portfolio this morning. You saved <strong>$4.20</strong> in fees.',

      'float.k1': 'The key is yours',
      'float.k2': 'Only you have access',
      'float.w1': 'Withdrawal',
      'float.w2': 'Done in 8s',

      'stats.upto': 'Up to',
      'stats.l1': 'estimated annual return on the boldest plan',
      'stats.l2': 'to open and keep your account',
      'stats.l3': 'your portfolio watched by the second',
      'stats.l4': 'of your money under your control',

      'marquee.label': 'Runs on the biggest networks in the world, without you needing to know what that means',

      'free.tag': 'The difference that changes everything',
      'free.title': 'Your money. <span class="text-gradient">Your rules.</span>',
      'free.sub': 'A traditional bank holds your money and then decides what you may do with it. DeFiMind works the other way round. The money always stays on your side and we simply hand you the tools to grow it.',
      'free.c1t': 'The key is yours',
      'free.c1d': 'When you open your account a secret key is created and it stays with you. Not even our team can reach your balance. That is not a promise, it is how the system was built.',
      'free.c2t': 'Nobody freezes your account',
      'free.c2d': 'There is no account manager deciding whether you may withdraw. No approvals, no explanations, no trips to a branch. The money is yours at any hour of the day or night.',
      'free.c3t': 'Come and go as you please',
      'free.c3d': 'No lock-in periods, no early withdrawal penalties, no paperwork. Your money is always one tap away and lands in seconds, not in working days.',
      'free.c4t': 'Everything in the open',
      'free.c4d': 'Every movement is recorded publicly and permanently. You can check where every cent went, whenever you like, without taking our word for it.',

      'sec.tag': 'Security',
      'sec.title': 'A bank’s protection. <span class="text-gradient">Without the bank.</span>',
      'sec.sub': 'Everyone asks the same thing: if the money is mine and it sits with me, who protects it? The answer is layers of protection built to the millimetre, the kind you find in a bank vault, except only you hold the combination.',
      'sec.c1t': 'Encrypted vault',
      'sec.c1d': 'Your data and your key always travel encrypted end to end, at the same grade banks use to move millions. Nobody intercepts what passes between you and your account.',
      'sec.c2t': 'Two-step verification',
      'sec.c2d': 'A password alone opens nothing. A second code is always required, generated on your phone, changing every thirty seconds and useless to anyone else.',
      'sec.c3t': 'Three-stage confirmation',
      'sec.c3d': 'Large movements go through double verification and a final confirmation from you. Nothing leaves your account unless you explicitly say yes, neither by mistake nor in a hurry.',
      'sec.c4t': 'Limits you set yourself',
      'sec.c4d': 'You choose a daily ceiling for movements. Even if somebody got hold of your unlocked phone, they could not drain the account in one go.',
      'sec.c5t': 'Audited by outsiders',
      'sec.c5d': 'Independent security firms review our code before every major update. The reports are public, so you do not have to trust us.',
      'sec.c6t': 'You always recover',
      'sec.c6d': 'Lost your phone? Your recovery phrase gives the whole account back in minutes, from any device, with no forms to fill and nobody to wait for.',
      'sec.foot': 'If DeFiMind vanished tomorrow, your money would still be reachable with your recovery phrase. <strong>We are not the vault. We are the wrench.</strong>',

      'how.tag': 'Simple on purpose',
      'how.title': 'Three steps. That is it.',
      'how.sub': 'You do not need to know anything about technology. If you can use your bank’s app, you can use DeFiMind.',
      'how.s1t': 'Create your account',
      'how.s1d': 'It takes under two minutes and all you need is an email. We show you a recovery phrase: keep it safe, it is your house key and nobody may ever ask you for it.',
      'how.s2t': 'Add money',
      'how.s2d': 'By card, bank transfer or whatever payment method you already use in your country. You can start with the equivalent of 25 dollars and there is no entry fee.',
      'how.s3t': 'Pick your pace',
      'how.s3d': 'Three plans, three levels of risk. From there DeFiMind handles everything, every day, while you get on with your life.',

      'cur.tag': 'Anywhere in the world',
      'cur.title': 'Your money, <span class="text-gradient">in your currency.</span>',
      'cur.sub': 'In Brazil? You see reais. In the United States? Dollars. In Europe? Euros. DeFiMind shows everything in the currency you use day to day and does the maths for you, so you never have to convert anything in your head.',
      'cur.k1': 'Balance, gains and fees always appear in your currency',
      'cur.k2': 'Switch currency whenever you like, without losing history',
      'cur.k3': 'Move money in and out using your country’s payment methods',
      'cur.k4': 'No hidden exchange fees and no disguised margins',
      'cur.us': 'United States',
      'cur.br': 'Brazil',
      'cur.eu': 'Europe',
      'cur.gb': 'United Kingdom',
      'cur.note': 'The same balance, seen from four different places in the world.',

      'plans.tag': 'Savings that work',
      'plans.title': 'Choose how much <span class="text-gradient">risk</span> you want to take.',
      'plans.sub': 'Three clear plans. No small print, no complicated products nobody understands. Switch plans whenever you want.',
      'plans.r1': 'Low risk',
      'plans.r2': 'Medium risk',
      'plans.r3': 'High risk',
      'plans.n1': 'Safe',
      'plans.n2': 'Balanced',
      'plans.n3': 'Bold',
      'plans.year': '% per year',
      'plans.t1': 'For those who want to sleep soundly.',
      'plans.t2': 'The sweet spot between calm and growth.',
      'plans.t3': 'For those who accept the ups and downs.',
      'plans.a1': 'Very small swings',
      'plans.a2': 'Automatic portfolio rebalancing',
      'plans.a3': 'Greater exposure to opportunities',
      'plans.daily': 'Returns credited every day',
      'plans.min': 'From $25 or equivalent',
      'plans.any': 'Withdraw at any time',
      'plans.pick': 'I want this plan',
      'plans.popular': 'Most chosen',
      'plans.risk': '<strong>Important warning:</strong> the percentages shown are annual estimates based on past performance and <strong>are not guaranteed returns</strong>. The amount invested can go up or down and you may get back less than you put in, including losing everything. The higher the expected return, the higher the risk of loss: the plans with the highest percentages are also the ones that can fall the furthest. Only invest what you are prepared to risk.',

      'calc.tag': 'Simulator',
      'calc.title': 'What could it earn?',
      'calc.sub': 'Move the values and see the estimate. No commitment and no details required.',
      'calc.amount': 'Starting amount',
      'calc.during': 'For',
      'calc.plan': 'Plan',
      'calc.currency': 'Currency',
      'calc.resultA': 'Estimated value after',
      'calc.resultB': 'years',
      'calc.put': 'You put in',
      'calc.earned': 'It earned',
      'calc.note': 'Compound interest estimate, for illustration only. This is not financial advice nor a guarantee of returns.',
      'calc.yearOne': 'year',
      'calc.yearMany': 'years',

      'nx.tag': 'Meet Neurex',
      'nx.title': 'A financial adviser of your own. <span class="text-gradient">At no cost.</span>',
      'nx.sub': 'Neurex is the intelligence behind DeFiMind. It watches your portfolio 24 hours a day, adjusts whatever needs adjusting and explains everything as if you were talking to a friend who knows the subject.',
      'nx.k1': 'Ask whatever you like, in your language and your own words',
      'nx.k2': 'Every decision explained in plain words, no jargon',
      'nx.k3': 'Watches the market while you sleep and catches the best moments',
      'nx.k4': 'Always asks your permission before any large movement',
      'nx.k5': 'Saves you money by picking the cheapest moments to act',
      'nx.cta': 'I want to meet Neurex',
      'nx.online': 'always available',
      'nx.m1': 'I have $500 sitting idle. Is it worth investing?',
      'nx.m2': 'It is, yes. But first let me ask you something: will you need this money in the next 12 months?',
      'nx.m3': 'No, it is money I have set aside.',
      'nx.m4': 'Perfect. In that case I would suggest the <strong>Balanced</strong> plan. Think of it like planting a tree: the longer you let it grow, the more shade it gives you. Shall I show you the simulation?',
      'nx.placeholder': 'Type your question…',

      'card.member': 'MEMBER SINCE',
      'card.holder': 'YOUR NAME HERE',
      'card.tag': 'DeFiMind Obsidian card',
      'card.title': 'Black. Discreet. <span class="text-gradient">Accepted everywhere.</span>',
      'card.sub': 'Your savings keep earning right up to the second you pay. When you need them, you spend just as you would with any other card, from the supermarket to the other side of the world.',
      'card.m1t': 'Virtual and physical',
      'card.m1d': 'The virtual one is instant. The physical one arrives in metal.',
      'card.m2t': 'No borders',
      'card.m2d': 'Works in any country and any shop that takes cards.',
      'card.m3t': 'Honest exchange',
      'card.m3d': 'You pay the real rate, with no hidden margin on the conversion.',
      'card.m4t': 'We give part back',
      'card.m4d': 'Every purchase returns a slice in DMIND rewards.',

      'cmp.tag': 'Side by side',
      'cmp.title': 'What changes compared to your bank.',
      'cmp.caption': 'Comparison between a traditional bank and DeFiMind',
      'cmp.feature': 'Feature',
      'cmp.bank': 'Traditional bank',
      'cmp.r1': 'Who holds your money',
      'cmp.r1a': 'The bank',
      'cmp.r1b': 'You, and only you',
      'cmp.r2': 'They can block the account',
      'cmp.r2a': 'Yes, without warning',
      'cmp.r2b': 'Not technically possible',
      'cmp.r3': 'Return on deposits',
      'cmp.r3a': 'Close to zero',
      'cmp.r3b': '9% to 40% per year (estimated)',
      'cmp.r4': 'Withdrawal time',
      'cmp.r4a': '1 to 3 working days',
      'cmp.r4b': 'Seconds, at any hour',
      'cmp.r5': 'Maintenance cost',
      'cmp.r5a': 'Monthly fees',
      'cmp.r6': 'Where it works',
      'cmp.r6a': 'The country you opened it in',
      'cmp.r6b': 'Anywhere in the world',
      'cmp.r7': 'Currency you see',
      'cmp.r7a': 'The bank’s',
      'cmp.r7b': 'Whichever you choose',
      'cmp.r8': 'Who decides the future of the service',
      'cmp.r8a': 'Shareholders',
      'cmp.r8b': 'The people who use it',
      'cmp.note': 'DeFiMind is not a licensed bank nor a guaranteed deposit. It is a tool that gives you direct access to your own money, with everything that brings, both good and demanding.',

      'comm.tag': 'Community',
      'comm.title': 'Those who use it, <span class="text-gradient">decide.</span>',
      'comm.sub': 'We have no shareholders demanding quarterly profit. We have people, and they are the ones who say where DeFiMind goes.',
      'comm.c1t': 'You earn by using it',
      'comm.c1d': 'Depositing, saving, inviting a friend, keeping your daily streak. It all counts and it all returns DMIND rewards.',
      'comm.c2t': 'Real advantages',
      'comm.c2d': 'Holding DMIND means lower fees, more back on every purchase and first access to what is new. It is not a gift, it is a real discount.',
      'comm.c3t': 'You vote on what comes next',
      'comm.c3d': 'The big decisions, from new features to fees, are voted on by the people who use the platform. One vote per person who is in.',

      'faq.tag': 'Questions',
      'faq.title': 'What everybody asks.',
      'faq.q1': 'If you do not hold my money, where is it?',
      'faq.a1': 'It sits in a wallet that belongs to you alone, created the moment you open your account. We can show you the balance and suggest what to do, but we cannot touch it. It is the difference between your accountant and your bank: one advises, the other holds.',
      'faq.q2': 'Does that mean it is less safe than a bank?',
      'faq.a2': 'Quite the opposite. At a bank your safety depends on the bank not failing. Here the protection sits on your side: end-to-end encryption, two-step verification, triple confirmation on large movements and daily limits you set. We cannot lose your money because we never hold it.',
      'faq.q3': 'What if I lose my phone or forget my password?',
      'faq.a3': 'You recover everything with the recovery phrase we show you at the start. That is why we insist so much on keeping it somewhere safe and away from your phone. It is the one thing nobody can give back to you if you lose it.',
      'faq.q4': 'Which countries does it work in?',
      'faq.a4': 'Practically all of them. DeFiMind does not depend on any particular country’s banking system, so it works wherever you have an internet connection. What varies is the methods for putting money in and taking it out.',
      'faq.q5': 'Which currency will I see my balance in?',
      'faq.a5': 'Yours. In Brazil you see reais, in the United States dollars, in Europe euros. You can switch currency at any time in the settings and your history follows the change. Underneath, everything is priced in dollars, the international reference.',
      'faq.q6': 'Can I lose money?',
      'faq.a6': 'Yes. This is not a term deposit and there is no guaranteed capital. The figures we show are estimates based on the past and the market can fall. The Safe plan was designed to swing very little, but no plan removes risk entirely. Only invest what you can leave working without needing it.',
      'faq.q7': 'What does it cost?',
      'faq.a7': 'Opening and keeping the account is free. There is no monthly charge and no entry or exit fee. We charge 1.3% on each buy, sell or investment movement, and it is all shown before you confirm anything.',
      'faq.q8': 'Do I need to understand cryptocurrencies?',
      'faq.a8': 'No. That is precisely why we exist. You see your balance in your currency, you see what it earned, and you press three buttons: deposit, invest, withdraw. All the complicated parts happen underneath, without bothering you.',
      'faq.q9': 'How do you make money if everything is free?',
      'faq.a9': 'From the 1.3% fee on movements and from the card. Nothing else. We do not sell your data, we have no hidden advertising and we do not profit from making you move your portfolio unnecessarily.',

      'cta.title': 'It is time your money <span class="text-gradient">worked for you.</span>',
      'cta.sub': 'Join the waitlist and be among the first to open an account. No commitment and no spam, promised.',
      'cta.label': 'Your email',
      'cta.placeholder': 'your@email.com',
      'cta.button': 'Count me in',
      'cta.fine': 'By joining the list you agree to receive news about the launch. Leave whenever you want, with one click.',
      'cta.b1': '🌍 Worldwide',
      'cta.b2': '🔐 Only you hold the key',
      'cta.b3': '🛡️ Bank-grade protection',
      'cta.b4': '💬 24/7 support',
      'cta.ok': 'You are in. We will let you know the moment we open registrations.',
      'cta.err': 'Check the email, something seems to be missing.',
      'cta.sending': 'Signing up…',

      'foot.tagline': 'The bank that never touches your money. Available wherever you are, in the currency you use.',
      'foot.product': 'Product',
      'foot.company': 'Company',
      'foot.legal': 'Legal',
      'foot.card': 'Card',
      'foot.currencies': 'Currencies',
      'foot.about': 'About us',
      'foot.faq': 'Frequently asked questions',
      'foot.terms': 'Terms and conditions',
      'foot.privacy': 'Privacy policy',
      'foot.cookies': 'Cookie policy',
      'foot.risk': 'Risk warning',
      'foot.rights': 'All rights reserved.',
      'foot.worldwide': 'Available worldwide',
      'foot.riskText': '<strong>Risk warning.</strong> Investing in digital assets carries high risk, including the total loss of the capital invested. The return percentages shown on this site are estimates based on historical performance, constitute no guarantee whatsoever and may not repeat. DeFiMind is not a credit institution, does not take deposits, and amounts placed on the platform are not covered by any deposit guarantee scheme. Nothing on this site constitutes personalised financial, tax or investment advice. Before investing, assess your own situation and, if in doubt, consult a qualified professional. Service availability and payment methods vary by country.',

      'meta.title': 'DeFiMind · The bank that never touches your money',
      'meta.desc': 'Savings that earn every day, with a bank’s security and one difference that changes everything: the key is yours. Available worldwide, in the currency you use.'
    },

    /* ------------------------------------------- ESPANHOL -- */
    es: {
      'a11y.skip': 'Saltar al contenido',
      'a11y.lang': 'Idioma',

      'nav.freedom': 'Libertad',
      'nav.security': 'Seguridad',
      'nav.how': 'Cómo funciona',
      'nav.plans': 'Planes',
      'nav.neurex': 'Neurex',
      'nav.faq': 'Preguntas',
      'nav.cta': 'Lista de espera',

      'hero.badge': 'Estés donde estés, en la moneda que usas',
      'hero.title': 'El banco que <span class="text-gradient">nunca toca</span> tu dinero.',
      'hero.sub': 'Tus ahorros rinden todos los días, solos, protegidos por la misma tecnología que los bancos usan para guardar millones. Hay una diferencia que lo cambia todo: la llave es tuya y nadie más puede tocarla.',
      'hero.cta1': 'Entrar en la lista de espera',
      'hero.cta2': 'Ver cómo funciona',
      'hero.t1': 'Sin costes de apertura',
      'hero.t2': 'Retiras cuando quieras',
      'hero.t3': 'Ves el saldo en tu moneda',

      'app.hello': 'Hola, Ana',
      'app.balance': 'Saldo total',
      'app.month': '+$38.14 este mes',
      'app.deposit': 'Depositar',
      'app.withdraw': 'Retirar',
      'app.invest': 'Invertir',
      'app.plan': 'Plan Equilibrado',
      'app.year': '/año',
      'app.since': 'Rindiendo desde el 12 de marzo',
      'app.neurex': 'Reequilibré tu cartera esta mañana. Ahorraste <strong>$4.20</strong> en comisiones.',

      'float.k1': 'La llave es tuya',
      'float.k2': 'Solo tú tienes acceso',
      'float.w1': 'Retirada',
      'float.w2': 'Hecha en 8s',

      'stats.upto': 'Hasta',
      'stats.l1': 'rendimiento anual estimado en el plan más atrevido',
      'stats.l2': 'para abrir y mantener tu cuenta',
      'stats.l3': 'tu cartera vigilada al segundo',
      'stats.l4': 'de tu dinero bajo tu control',

      'marquee.label': 'Funciona sobre las mayores redes del mundo, sin que necesites saber qué significa eso',

      'free.tag': 'La diferencia que lo cambia todo',
      'free.title': 'Tu dinero. <span class="text-gradient">Tus reglas.</span>',
      'free.sub': 'Un banco tradicional guarda tu dinero y luego decide qué puedes hacer con él. En DeFiMind ocurre lo contrario. El dinero se queda siempre de tu lado y nosotros te damos las herramientas para hacerlo crecer.',
      'free.c1t': 'La llave es tuya',
      'free.c1d': 'Al abrir la cuenta se crea una llave secreta que se queda contigo. Ni nuestro equipo puede llegar a tu saldo. No es una promesa, es la forma en que se construyó el sistema.',
      'free.c2t': 'Nadie congela tu cuenta',
      'free.c2d': 'No hay un gestor decidiendo si puedes retirar o no. Sin aprobaciones, sin justificaciones, sin ir a una oficina. El dinero es tuyo a cualquier hora del día o de la noche.',
      'free.c3t': 'Entras y sales cuando quieras',
      'free.c3d': 'Sin permanencias, sin penalizaciones por retirar pronto, sin papeleo. Tu dinero está siempre a un toque de distancia y llega en segundos, no en días hábiles.',
      'free.c4t': 'Todo a la vista',
      'free.c4d': 'Cada movimiento queda registrado de forma pública y permanente. Puedes comprobar adónde fue cada céntimo, cuando quieras, sin depender de nuestra palabra.',

      'sec.tag': 'Seguridad',
      'sec.title': 'La protección de un banco. <span class="text-gradient">Sin el banco.</span>',
      'sec.sub': 'Todo el mundo hace la misma pregunta: si el dinero es mío y está conmigo, ¿quién lo protege? La respuesta son capas de protección construidas al milímetro, del tipo que se encuentra en una caja fuerte, con la diferencia de que solo tú tienes la combinación.',
      'sec.c1t': 'Caja fuerte cifrada',
      'sec.c1d': 'Tus datos y tu llave viajan siempre cifrados de extremo a extremo, con el mismo grado de protección que la banca usa para mover millones. Nadie intercepta lo que pasa entre tú y tu cuenta.',
      'sec.c2t': 'Verificación en dos pasos',
      'sec.c2d': 'La contraseña sola no abre nada. Siempre hace falta un segundo código, generado en tu móvil, que cambia cada treinta segundos y no le sirve a nadie más.',
      'sec.c3t': 'Confirmación en tres etapas',
      'sec.c3d': 'Los movimientos grandes pasan por verificación doble y una confirmación final tuya. Nada sale de tu cuenta sin que digas expresamente que sí, ni por error ni por prisa.',
      'sec.c4t': 'Límites que defines tú',
      'sec.c4d': 'Eliges un techo diario para los movimientos. Aunque alguien llegara a tu móvil desbloqueado, no podría vaciar la cuenta de una vez.',
      'sec.c5t': 'Auditado por gente de fuera',
      'sec.c5d': 'Empresas independientes especializadas en seguridad revisan nuestro código antes de cada actualización importante. Los informes son públicos y no tienes que creernos.',
      'sec.c6t': 'Siempre recuperas',
      'sec.c6d': '¿Perdiste el móvil? Tu frase de recuperación te devuelve la cuenta entera en minutos, desde cualquier aparato, sin rellenar formularios ni esperar a nadie.',
      'sec.foot': 'Si DeFiMind desapareciera mañana, tu dinero seguiría siendo accesible con tu frase de recuperación. <strong>No somos la caja fuerte. Somos la llave inglesa.</strong>',

      'how.tag': 'Simple a propósito',
      'how.title': 'Tres pasos. Y ya está.',
      'how.sub': 'No necesitas saber nada de tecnología. Si sabes usar la app de tu banco, sabes usar DeFiMind.',
      'how.s1t': 'Crea tu cuenta',
      'how.s1d': 'Tarda menos de dos minutos y solo necesitas un email. Te mostramos una frase de recuperación: guárdala bien, es la llave de casa y nadie puede pedírtela.',
      'how.s2t': 'Pon dinero',
      'how.s2d': 'Con tarjeta, transferencia bancaria o el método de pago que ya usas en tu país. Puedes empezar con el equivalente a 25 dólares y no hay comisión de entrada.',
      'how.s3t': 'Elige tu ritmo',
      'how.s3d': 'Tres planes, tres niveles de riesgo. A partir de ahí DeFiMind se encarga de todo, todos los días, mientras tú vives tu vida.',

      'cur.tag': 'En cualquier lugar del mundo',
      'cur.title': 'Tu dinero, <span class="text-gradient">en tu moneda.</span>',
      'cur.sub': '¿Estás en Brasil? Ves reales. ¿En Estados Unidos? Dólares. ¿En Europa? Euros. DeFiMind lo muestra todo en la moneda que usas a diario y hace las cuentas por ti, para que nunca tengas que convertir nada de cabeza.',
      'cur.k1': 'El saldo, las ganancias y los costes aparecen siempre en tu moneda',
      'cur.k2': 'Cambias de moneda cuando quieras, sin perder el historial',
      'cur.k3': 'Entras y sales con los métodos de pago de tu país',
      'cur.k4': 'Sin comisiones de cambio ocultas ni márgenes disfrazados',
      'cur.us': 'Estados Unidos',
      'cur.br': 'Brasil',
      'cur.eu': 'Europa',
      'cur.gb': 'Reino Unido',
      'cur.note': 'El mismo saldo, visto desde cuatro sitios distintos del mundo.',

      'plans.tag': 'Ahorro que trabaja',
      'plans.title': 'Elige cuánto <span class="text-gradient">riesgo</span> quieres correr.',
      'plans.sub': 'Tres planes claros. Sin letra pequeña, sin productos complicados que nadie entiende. Cambias de plan cuando quieras.',
      'plans.r1': 'Riesgo bajo',
      'plans.r2': 'Riesgo medio',
      'plans.r3': 'Riesgo alto',
      'plans.n1': 'Seguro',
      'plans.n2': 'Equilibrado',
      'plans.n3': 'Atrevido',
      'plans.year': '% al año',
      'plans.t1': 'Para quien quiere dormir tranquilo.',
      'plans.t2': 'El punto justo entre calma y crecimiento.',
      'plans.t3': 'Para quien acepta subidas y bajadas.',
      'plans.a1': 'Oscilaciones muy reducidas',
      'plans.a2': 'Reequilibrio automático de la cartera',
      'plans.a3': 'Mayor exposición a oportunidades',
      'plans.daily': 'Rendimiento abonado todos los días',
      'plans.min': 'Desde $25 o equivalente',
      'plans.any': 'Retiras en cualquier momento',
      'plans.pick': 'Quiero este plan',
      'plans.popular': 'El más elegido',
      'plans.risk': '<strong>Aviso importante:</strong> los porcentajes mostrados son estimaciones anuales basadas en resultados pasados y <strong>no son rendimientos garantizados</strong>. El valor invertido puede subir o bajar y puedes recibir menos de lo que pusiste, incluso perderlo todo. Cuanto mayor es el rendimiento esperado, mayor es el riesgo de pérdida: los planes con porcentajes más altos son también los que más pueden caer. Invierte solo lo que estés dispuesto a arriesgar.',

      'calc.tag': 'Simulador',
      'calc.title': '¿Cuánto podría rendir?',
      'calc.sub': 'Mueve los valores y mira la estimación. Sin compromiso y sin dar ningún dato.',
      'calc.amount': 'Importe inicial',
      'calc.during': 'Durante',
      'calc.plan': 'Plan',
      'calc.currency': 'Moneda',
      'calc.resultA': 'Valor estimado al cabo de',
      'calc.resultB': 'años',
      'calc.put': 'Pusiste',
      'calc.earned': 'Rindió',
      'calc.note': 'Estimación con interés compuesto, solo a efectos ilustrativos. No constituye asesoramiento financiero ni garantía de rendimiento.',
      'calc.yearOne': 'año',
      'calc.yearMany': 'años',

      'nx.tag': 'Conoce a Neurex',
      'nx.title': 'Un asesor financiero solo para ti. <span class="text-gradient">Sin coste alguno.</span>',
      'nx.sub': 'Neurex es la inteligencia de DeFiMind. Sigue tu cartera 24 horas al día, ajusta lo que hay que ajustar y te lo explica todo como si hablaras con un amigo que entiende del tema.',
      'nx.k1': 'Pregunta lo que quieras, en tu idioma y a tu manera',
      'nx.k2': 'Explica cada decisión con palabras sencillas, sin tecnicismos',
      'nx.k3': 'Vigila el mercado mientras duermes y aprovecha los mejores momentos',
      'nx.k4': 'Siempre te pide permiso antes de cualquier movimiento grande',
      'nx.k5': 'Te ahorra dinero eligiendo los momentos más baratos para actuar',
      'nx.cta': 'Quiero conocer a Neurex',
      'nx.online': 'siempre disponible',
      'nx.m1': 'Tengo $500 parados. ¿Merece la pena invertir?',
      'nx.m2': 'Sí, merece la pena. Pero primero déjame preguntarte una cosa: ¿vas a necesitar este dinero en los próximos 12 meses?',
      'nx.m3': 'No, es dinero que tengo apartado.',
      'nx.m4': 'Perfecto. En ese caso sugeriría el plan <strong>Equilibrado</strong>. Piénsalo como plantar un árbol: cuanto más tiempo lo dejes crecer, más sombra te da. ¿Te muestro la simulación?',
      'nx.placeholder': 'Escribe tu pregunta…',

      'card.member': 'MIEMBRO DESDE',
      'card.holder': 'TU NOMBRE AQUÍ',
      'card.tag': 'Tarjeta DeFiMind Obsidian',
      'card.title': 'Negra. Discreta. <span class="text-gradient">Aceptada en todas partes.</span>',
      'card.sub': 'Tus ahorros siguen rindiendo hasta el segundo en que pagas. Cuando los necesitas, gastas como lo harías con cualquier otra tarjeta, del supermercado a la otra punta del mundo.',
      'card.m1t': 'Virtual y física',
      'card.m1d': 'La virtual sale al momento. La física llega a casa en metal.',
      'card.m2t': 'Sin fronteras',
      'card.m2d': 'Funciona en cualquier país y en cualquier tienda que acepte tarjeta.',
      'card.m3t': 'Cambio honesto',
      'card.m3d': 'Pagas al cambio real, sin márgenes ocultos en la conversión.',
      'card.m4t': 'Te devolvemos parte',
      'card.m4d': 'Cada compra te devuelve una parte en recompensas DMIND.',

      'cmp.tag': 'Lado a lado',
      'cmp.title': 'Qué cambia respecto a tu banco.',
      'cmp.caption': 'Comparación entre un banco tradicional y DeFiMind',
      'cmp.feature': 'Característica',
      'cmp.bank': 'Banco tradicional',
      'cmp.r1': 'Quién guarda tu dinero',
      'cmp.r1a': 'El banco',
      'cmp.r1b': 'Tú, y solo tú',
      'cmp.r2': 'Pueden bloquear la cuenta',
      'cmp.r2a': 'Sí, sin aviso',
      'cmp.r2b': 'No es técnicamente posible',
      'cmp.r3': 'Rendimiento de los depósitos',
      'cmp.r3a': 'Cerca de cero',
      'cmp.r3b': '9% a 40% al año (estimado)',
      'cmp.r4': 'Tiempo de retirada',
      'cmp.r4a': '1 a 3 días hábiles',
      'cmp.r4b': 'Segundos, a cualquier hora',
      'cmp.r5': 'Coste de mantenimiento',
      'cmp.r5a': 'Comisiones mensuales',
      'cmp.r6': 'Dónde funciona',
      'cmp.r6a': 'En el país donde la abriste',
      'cmp.r6b': 'En cualquier lugar del mundo',
      'cmp.r7': 'Moneda que ves',
      'cmp.r7a': 'La del banco',
      'cmp.r7b': 'La que tú elijas',
      'cmp.r8': 'Quién decide el futuro del servicio',
      'cmp.r8a': 'Accionistas',
      'cmp.r8b': 'Quien lo usa',
      'cmp.note': 'DeFiMind no es un banco licenciado ni un depósito garantizado. Es una herramienta que te da acceso directo a tu propio dinero, con todo lo que eso tiene de bueno y de exigente.',

      'comm.tag': 'Comunidad',
      'comm.title': 'Quien lo usa, <span class="text-gradient">decide.</span>',
      'comm.sub': 'No tenemos accionistas exigiendo beneficio trimestral. Tenemos personas, y son ellas las que dicen adónde va DeFiMind.',
      'comm.c1t': 'Ganas por usarlo',
      'comm.c1d': 'Depositar, ahorrar, invitar a un amigo, mantener la racha de días. Todo cuenta y todo te devuelve recompensas en DMIND.',
      'comm.c2t': 'Ventajas de verdad',
      'comm.c2d': 'Quien tiene DMIND paga menos comisiones, recibe más en cada compra y entra primero en las novedades. No es un regalo, es descuento real.',
      'comm.c3t': 'Votas lo que viene después',
      'comm.c3d': 'Las grandes decisiones, de las nuevas funciones a las comisiones, las vota quien usa la plataforma. Un voto por persona que está dentro.',

      'faq.tag': 'Preguntas',
      'faq.title': 'Lo que todo el mundo pregunta.',
      'faq.q1': 'Si no guardáis mi dinero, ¿dónde está?',
      'faq.a1': 'Está en una cartera que te pertenece solo a ti, creada en el momento en que abres la cuenta. Podemos mostrarte el saldo y sugerirte qué hacer, pero no podemos tocarlo. Es la diferencia entre tu contable y tu banco: uno aconseja, el otro guarda.',
      'faq.q2': '¿Eso quiere decir que es menos seguro que un banco?',
      'faq.a2': 'Al contrario. En un banco tu seguridad depende de que el banco no falle. Aquí la protección está de tu lado: cifrado de extremo a extremo, verificación en dos pasos, confirmación triple en movimientos grandes y límites diarios definidos por ti. No podemos perder tu dinero porque nunca llegamos a tenerlo.',
      'faq.q3': '¿Y si pierdo el móvil o me olvido de la contraseña?',
      'faq.a3': 'Lo recuperas todo con la frase de recuperación que te mostramos al principio. Por eso insistimos tanto en que la guardes en un sitio seguro y fuera del móvil. Es lo único que nadie puede devolverte si la pierdes.',
      'faq.q4': '¿En qué países funciona?',
      'faq.a4': 'En prácticamente todos. DeFiMind no depende del sistema bancario de ningún país en concreto, así que funciona donde tengas conexión a internet. Lo que varía son los métodos para meter y sacar dinero.',
      'faq.q5': '¿En qué moneda veo mi saldo?',
      'faq.a5': 'En la tuya. Si estás en Brasil ves reales, en Estados Unidos dólares, en Europa euros. Puedes cambiar de moneda cuando quieras en los ajustes y el historial acompaña el cambio. Por debajo está todo cotizado en dólares, que es la referencia internacional.',
      'faq.q6': '¿Puedo perder dinero?',
      'faq.a6': 'Sí. Esto no es un depósito a plazo y no hay capital garantizado. Los valores que mostramos son estimaciones basadas en el pasado y el mercado puede bajar. El plan Seguro se diseñó para oscilar muy poco, pero ningún plan elimina el riesgo por completo. Invierte solo lo que puedas dejar trabajando sin necesitarlo.',
      'faq.q7': '¿Cuánto cuesta?',
      'faq.a7': 'Abrir y mantener la cuenta es gratis. No hay mensualidad ni comisión de entrada o de salida. Cobramos un 1,3% en cada movimiento de compra, venta o inversión y está todo a la vista antes de que confirmes nada.',
      'faq.q8': '¿Necesito entender algo de criptomonedas?',
      'faq.a8': 'No. Esa es precisamente la razón de que existamos. Ves el saldo en tu moneda, ves cuánto rindió y pulsas tres botones: depositar, invertir, retirar. Toda la parte complicada ocurre por debajo, sin molestarte.',
      'faq.q9': '¿Cómo ganáis dinero si todo es gratis?',
      'faq.a9': 'Con la comisión del 1,3% en los movimientos y con la tarjeta. Nada más. No vendemos tus datos, no tenemos publicidad oculta y no ganamos por hacerte mover la cartera sin necesidad.',

      'cta.title': 'Es hora de que tu dinero <span class="text-gradient">trabaje para ti.</span>',
      'cta.sub': 'Entra en la lista de espera y sé de los primeros en abrir cuenta. Sin compromiso y sin spam, prometido.',
      'cta.label': 'Tu email',
      'cta.placeholder': 'tu@email.com',
      'cta.button': 'Quiero entrar',
      'cta.fine': 'Al entrar en la lista aceptas recibir novedades sobre el lanzamiento. Sales cuando quieras, con un clic.',
      'cta.b1': '🌍 En todo el mundo',
      'cta.b2': '🔐 Solo tú tienes la llave',
      'cta.b3': '🛡️ Protección de nivel bancario',
      'cta.b4': '💬 Soporte 24/7',
      'cta.ok': 'Estás dentro. Te avisamos en cuanto abramos las inscripciones.',
      'cta.err': 'Revisa el email, parece que falta algo.',
      'cta.sending': 'Registrando…',

      'foot.tagline': 'El banco que nunca toca tu dinero. Disponible estés donde estés, en la moneda que usas.',
      'foot.product': 'Producto',
      'foot.company': 'Empresa',
      'foot.legal': 'Legal',
      'foot.card': 'Tarjeta',
      'foot.currencies': 'Monedas',
      'foot.about': 'Sobre nosotros',
      'foot.faq': 'Preguntas frecuentes',
      'foot.terms': 'Términos y condiciones',
      'foot.privacy': 'Política de privacidad',
      'foot.cookies': 'Política de cookies',
      'foot.risk': 'Aviso de riesgo',
      'foot.rights': 'Todos los derechos reservados.',
      'foot.worldwide': 'Disponible en todo el mundo',
      'foot.riskText': '<strong>Aviso de riesgo.</strong> Invertir en activos digitales conlleva un riesgo elevado, incluida la pérdida total del capital invertido. Los porcentajes de rendimiento presentados en este sitio son estimaciones basadas en resultados históricos, no constituyen garantía alguna y pueden no repetirse. DeFiMind no es una entidad de crédito, no acepta depósitos y los importes colocados en la plataforma no están cubiertos por ningún fondo de garantía de depósitos. Nada en este sitio constituye asesoramiento financiero, fiscal o de inversión personalizado. Antes de invertir, evalúa tu situación y, si tienes dudas, consulta a un profesional cualificado. La disponibilidad del servicio y de los métodos de pago varía según el país.',

      'meta.title': 'DeFiMind · El banco que nunca toca tu dinero',
      'meta.desc': 'Ahorros que rinden todos los días, con la seguridad de un banco y una diferencia que lo cambia todo: la llave es tuya. Disponible en todo el mundo, en la moneda que usas.'
    }
  };

  /* ---- português: capturado do próprio HTML ---- */
  var pt = {};
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    pt[el.getAttribute('data-i18n')] = el.innerHTML;
  });
  pt['meta.title'] = document.title;
  pt['meta.desc'] = (document.querySelector('meta[name=description]') || {}).content || '';
  pt['cta.placeholder'] = 'o.teu@email.com';
  pt['cta.label'] = 'O teu email';
  pt['a11y.lang'] = 'Idioma';
  pt['calc.yearOne'] = 'ano';
  pt['calc.yearMany'] = 'anos';
  pt['calc.plan'] = 'Plano';
  pt['calc.currency'] = 'Moeda';
  pt['cmp.feature'] = 'Característica';
  pt['foot.product'] = 'Produto';
  pt['foot.company'] = 'Empresa';
  pt['foot.legal'] = 'Legal';
  pt['cta.ok'] = 'Estás dentro. Avisamos-te assim que abrirmos as inscrições.';
  pt['cta.err'] = 'Confirma o email, parece que falta alguma coisa.';
  pt['cta.sending'] = 'A registar…';
  DICT.pt = pt;

  var detect = function () {
    try {
      var saved = localStorage.getItem(STORAGE);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* localStorage indisponível */ }

    var base = (navigator.language || 'en').toLowerCase().split('-')[0];
    return SUPPORTED.indexOf(base) !== -1 ? base : 'en';
  };

  var listeners = [];
  var current = 'pt';

  var t = function (key) {
    var d = DICT[current] || DICT.pt;
    return d[key] != null ? d[key] : (DICT.pt[key] != null ? DICT.pt[key] : key);
  };

  var apply = function (lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    current = lang;
    var d = DICT[lang];

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = d[el.getAttribute('data-i18n')];
      if (v != null) el.innerHTML = v;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
        var bits = pair.split(':');
        var v = d[bits[1]];
        if (v != null) el.setAttribute(bits[0], v);
      });
    });

    if (d['meta.title']) document.title = d['meta.title'];
    var desc = document.querySelector('meta[name=description]');
    if (desc && d['meta.desc']) desc.content = d['meta.desc'];

    document.querySelectorAll('.lang button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('is-active', on);
      b.setAttribute('aria-pressed', String(on));
    });

    listeners.forEach(function (fn) { fn(lang); });
  };

  window.DFM_I18N = {
    t: t,
    apply: apply,
    get lang() { return current; },
    onChange: function (fn) { listeners.push(fn); }
  };

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      try { localStorage.setItem(STORAGE, lang); } catch (e) { /* ignorar */ }
      apply(lang);
    });
  });

  apply(detect());
})();
