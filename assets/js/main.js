/* ============================================================
   DeFiMind · Landing Page
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----------------------------------------------------------
     Moeda

     O visitante vê os valores na moeda do sítio onde está.
     A projeção do simulador é uma percentagem, por isso o
     resultado é correcto em qualquer moeda sem precisar de
     taxas de câmbio.
  ---------------------------------------------------------- */
  var CURRENCIES = {
    USD: { locale: 'en-US' },
    EUR: { locale: 'pt-PT' },
    BRL: { locale: 'pt-BR' },
    GBP: { locale: 'en-GB' }
  };

  var REGION_CURRENCY = {
    BR: 'BRL',
    US: 'USD', CA: 'USD', AU: 'USD', NZ: 'USD', SG: 'USD', HK: 'USD',
    GB: 'GBP',
    PT: 'EUR', ES: 'EUR', FR: 'EUR', DE: 'EUR', IT: 'EUR', IE: 'EUR',
    NL: 'EUR', BE: 'EUR', AT: 'EUR', FI: 'EUR', GR: 'EUR', LU: 'EUR',
    SK: 'EUR', SI: 'EUR', EE: 'EUR', LV: 'EUR', LT: 'EUR', CY: 'EUR', MT: 'EUR'
  };

  var detectCurrency = function () {
    var lang = navigator.language || 'en-US';
    var region = (lang.split('-')[1] || '').toUpperCase();
    if (REGION_CURRENCY[region]) return REGION_CURRENCY[region];
    if (lang.toLowerCase().indexOf('pt') === 0) return 'EUR';
    return 'USD';
  };

  /* useGrouping 'always': sem isto alguns locales escrevem "1000" mas "25 000" */
  var makeFormatter = function (code) {
    return new Intl.NumberFormat(CURRENCIES[code].locale, {
      style: 'currency',
      currency: code,
      maximumFractionDigits: 0,
      useGrouping: 'always'
    });
  };

  var currency = detectCurrency();
  var money = makeFormatter(currency);

  var i18n = window.DFM_I18N || { t: function (k) { return k; }, onChange: function () {} };

  /* o telemóvel do hero mostra a moeda de quem está a ver */
  (function () {
    var chip = document.getElementById('appCurChip');
    if (chip) chip.textContent = currency;

    var symEl = document.querySelector('.app__cur');
    if (symEl) {
      var parts = new Intl.NumberFormat(CURRENCIES[currency].locale, {
        style: 'currency', currency: currency
      }).formatToParts(1);
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].type === 'currency') { symEl.textContent = parts[i].value; break; }
      }
    }

    var balance = document.querySelector('.app__balance [data-count-to]');
    if (balance) balance.dataset.locale = CURRENCIES[currency].locale;
  })();

  /* ----------------------------------------------------------
     Navegação: fundo ao rolar
  ---------------------------------------------------------- */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    nav.classList.toggle('is-stuck', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----------------------------------------------------------
     Menu mobile
  ---------------------------------------------------------- */
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  var closeMenu = function () {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  };

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', function (e) {
    if (!links.classList.contains('is-open')) return;
    if (!links.contains(e.target) && !toggle.contains(e.target)) closeMenu();
  });

  /* ----------------------------------------------------------
     Rede de segurança das animações

     O IntersectionObserver é o mecanismo principal, mas há situações
     em que o browser não entrega os callbacks (separador em segundo
     plano, por exemplo). Como o conteúdo arranca invisível, isso
     deixaria a página em branco. Este backstop ligado ao scroll
     garante que tudo acaba por aparecer, e desliga-se sozinho quando
     já não há nada à espera.
  ---------------------------------------------------------- */
  var pending = [];
  var fallbackQueued = false;

  var runFallback = function () {
    if (!pending.length) return;
    var margin = window.innerHeight * 0.95;
    pending = pending.filter(function (item) {
      var box = item.el.getBoundingClientRect();
      if (box.top < margin && box.bottom > 0) { item.fn(); return false; }
      return true;
    });
    if (!pending.length) {
      window.removeEventListener('scroll', onFallbackScroll);
      window.removeEventListener('resize', onFallbackScroll);
    }
  };

  var onFallbackScroll = function () {
    if (fallbackQueued) return;
    fallbackQueued = true;
    requestAnimationFrame(function () { fallbackQueued = false; runFallback(); });
  };

  var watch = function (el, fn) { pending.push({ el: el, fn: fn }); };

  window.addEventListener('scroll', onFallbackScroll, { passive: true });
  window.addEventListener('resize', onFallbackScroll);

  /* ----------------------------------------------------------
     Animações de entrada
  ---------------------------------------------------------- */
  var revealables = document.querySelectorAll('.reveal');

  var showReveal = function (el) { el.classList.add('is-in'); };

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(showReveal);
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        showReveal(entry.target);
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealables.forEach(function (el) {
      revealObserver.observe(el);
      watch(el, function () { showReveal(el); });
    });
  }

  /* ----------------------------------------------------------
     Cartão: cai e assenta na mesa
  ---------------------------------------------------------- */
  var stage = document.getElementById('ccardStage');

  if (stage) {
    var drop = function () {
      if (stage.classList.contains('is-dropped')) return;
      stage.classList.add('is-dropped');
      /* quando pousa largamos a animação para o hover voltar a mandar */
      stage.querySelector('.ccard').addEventListener('animationend', function () {
        stage.classList.add('is-landed');
      }, { once: true });
    };

    if (reduceMotion || !('IntersectionObserver' in window)) {
      stage.classList.add('is-dropped', 'is-landed');
    } else {
      var dropObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          drop();
          dropObserver.unobserve(entry.target);
        });
      }, { threshold: 0.35 });

      dropObserver.observe(stage);
      watch(stage, drop);
    }
  }

  /* ----------------------------------------------------------
     Contadores animados
  ---------------------------------------------------------- */
  var counters = document.querySelectorAll('[data-count-to]');

  var runCounter = function (el) {
    var target = parseFloat(el.dataset.countTo);
    var decimals = parseInt(el.dataset.decimals || '0', 10);
    var locale = el.dataset.locale || 'pt-PT';
    var duration = 1500;
    var start = null;

    var format = function (value) {
      return value.toLocaleString(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: 'always'
      });
    };

    if (reduceMotion) {
      el.textContent = format(target);
      return;
    }

    var tick = function (now) {
      if (start === null) start = now;
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = format(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(runCounter);
  } else {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) {
      counterObserver.observe(el);
      watch(el, function () { runCounter(el); });
    });
  }

  /* ----------------------------------------------------------
     Simulador de rendimento
  ---------------------------------------------------------- */
  var amountInput = document.getElementById('calcAmount');
  var yearsInput = document.getElementById('calcYears');

  if (amountInput && yearsInput) {
    var amountOut = document.getElementById('calcAmountOut');
    var yearsOut = document.getElementById('calcYearsOut');
    var yearsLbl = document.getElementById('calcYearsLbl');
    var resultEl = document.getElementById('calcResult');
    var principalEl = document.getElementById('calcPrincipal');
    var gainEl = document.getElementById('calcGain');
    var barEl = document.getElementById('calcBar');
    var planButtons = document.querySelectorAll('.segmented:not(#curPicker) button');
    var curButtons = document.querySelectorAll('#curPicker button');

    var rate = 24;

    var paintTrack = function (input) {
      var pct = ((input.value - input.min) / (input.max - input.min)) * 100;
      input.style.setProperty('--pct', pct + '%');
    };

    var update = function () {
      var principal = Number(amountInput.value);
      var years = Number(yearsInput.value);
      var total = principal * Math.pow(1 + rate / 100, years);
      var gain = total - principal;

      amountOut.textContent = money.format(principal);
      yearsOut.textContent = years + ' ' + i18n.t(years === 1 ? 'calc.yearOne' : 'calc.yearMany');
      yearsLbl.textContent = years;

      resultEl.textContent = money.format(total);
      principalEl.textContent = money.format(principal);
      gainEl.textContent = '+' + money.format(gain);

      barEl.style.width = Math.min((gain / total) * 100, 100).toFixed(1) + '%';

      paintTrack(amountInput);
      paintTrack(yearsInput);
    };

    var selectIn = function (group, chosen) {
      group.forEach(function (btn) {
        var on = btn === chosen;
        btn.classList.toggle('is-active', on);
        btn.setAttribute('aria-checked', String(on));
      });
    };

    amountInput.addEventListener('input', update);
    yearsInput.addEventListener('input', update);

    planButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectIn(planButtons, btn);
        rate = Number(btn.dataset.rate);
        update();
      });
    });

    curButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectIn(curButtons, btn);
        currency = btn.dataset.cur;
        money = makeFormatter(currency);
        update();
      });
    });

    /* arranca na moeda de quem está a ver */
    curButtons.forEach(function (btn) {
      if (btn.dataset.cur === currency) selectIn(curButtons, btn);
    });

    update();

    /* trocar de idioma reescreve "anos", por isso recalculamos */
    i18n.onChange(update);
  }

  /* ----------------------------------------------------------
     FAQ: só uma pergunta aberta de cada vez
  ---------------------------------------------------------- */
  var faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ----------------------------------------------------------
     Lista de espera

     Sem backend ligado: guardamos localmente e confirmamos.
     Para ligar a um serviço real (Formspree, Supabase, Mailchimp…),
     substitui o bloco marcado abaixo por um fetch() para o endpoint.
  ---------------------------------------------------------- */
  var form = document.getElementById('waitlistForm');

  if (form) {
    var emailInput = document.getElementById('email');
    var msg = document.getElementById('waitlistMsg');
    var isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    var setMessage = function (text, state) {
      msg.textContent = text;
      msg.className = 'waitlist__msg ' + (state ? 'is-' + state : '');
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = emailInput.value.trim();

      if (!isEmail.test(email)) {
        emailInput.setAttribute('aria-invalid', 'true');
        setMessage(i18n.t('cta.err'), 'err');
        emailInput.focus();
        return;
      }

      emailInput.removeAttribute('aria-invalid');
      setMessage('', null);

      var button = form.querySelector('button[type="submit"]');
      var label = button.textContent;
      button.disabled = true;
      button.textContent = i18n.t('cta.sending');

      /* ---- substituir por chamada ao backend ---- */
      window.setTimeout(function () {
        try {
          var list = JSON.parse(localStorage.getItem('defimind:waitlist') || '[]');
          if (list.indexOf(email) === -1) list.push(email);
          localStorage.setItem('defimind:waitlist', JSON.stringify(list));
        } catch (err) {
          /* localStorage indisponível, seguimos na mesma */
        }

        form.reset();
        button.disabled = false;
        button.textContent = label;
        setMessage(i18n.t('cta.ok'), 'ok');
      }, 700);
      /* ---- fim do bloco a substituir ---- */
    });

    emailInput.addEventListener('input', function () {
      if (msg.textContent) setMessage('', null);
      emailInput.removeAttribute('aria-invalid');
    });
  }

  /* ----------------------------------------------------------
     Ano no rodapé
  ---------------------------------------------------------- */
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* primeira passagem, para o que já está à vista ao abrir a página */
  runFallback();
})();
